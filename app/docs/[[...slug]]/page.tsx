import Link from 'next/link'
import { notFound } from 'next/navigation'
import { DocsToc } from '@/components/docs-toc'
import { MdxContent } from '@/components/mdx-content'
import { getDocBySlug, getDocNavGroups, getDocs, getDocToc } from '@/lib/content'

type Props = {
  params: Promise<{ slug?: string[] }>
}

export function generateStaticParams() {
  return getDocs().map((doc) => ({ slug: doc.slug.split('/') }))
}

export default async function DocPage({ params }: Props) {
  const resolved = await params
  const slug = (resolved.slug ?? []).join('/')

  if (!slug) {
    notFound()
  }

  const doc = getDocBySlug(slug)

  if (!doc) {
    notFound()
  }

  const toc = getDocToc(doc.body.raw)
  const navGroups = getDocNavGroups()

  return (
    <div className="docs-shell">
      <aside className="docs-nav">
        {navGroups.map((group) => (
          <section key={group.category} className="docs-nav-group">
            <p className="docs-nav-title">{group.category}</p>
            {group.docs.map((navDoc) => (
              <Link
                key={navDoc._id}
                href={navDoc.url as never}
                className={navDoc.slug === doc.slug ? 'docs-nav-link active' : 'docs-nav-link'}
              >
                {navDoc.title}
              </Link>
            ))}
          </section>
        ))}
      </aside>

      <article className="prose-wrapper">
        <p className="meta">{doc.category}</p>
        <h1>{doc.title}</h1>
        <p>{doc.summary}</p>
        <hr />
        <MdxContent code={doc.body.code} />
      </article>

      <aside className="docs-toc">
        <DocsToc toc={toc} />
      </aside>
    </div>
  )
}
