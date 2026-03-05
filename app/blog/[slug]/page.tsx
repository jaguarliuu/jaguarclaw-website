import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MdxContent } from '@/components/mdx-content'
import { getBlogAdjacent, getBlogPostBySlug, getBlogPosts, getBlogRelated } from '@/lib/content'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const related = getBlogRelated(slug, 3)
  const adjacent = getBlogAdjacent(slug)

  return (
    <div className="stack-md">
      <article className="prose-wrapper">
        <p className="meta">
          {new Date(post.publishedAt).toLocaleDateString('en-US')} · {post.author}
        </p>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <hr />
        <MdxContent code={post.body.code} />
      </article>

      <section className="split-panel">
        <article className="content-card">
          <h2>Navigate</h2>
          <div className="stack-sm">
            {adjacent.newer ? (
              <Link href={adjacent.newer.url as never} className="inline-link">
                Newer: {adjacent.newer.title}
              </Link>
            ) : (
              <p className="muted-line">Newer: none</p>
            )}
            {adjacent.older ? (
              <Link href={adjacent.older.url as never} className="inline-link">
                Older: {adjacent.older.title}
              </Link>
            ) : (
              <p className="muted-line">Older: none</p>
            )}
          </div>
        </article>

        <article className="content-card">
          <h2>Related Posts</h2>
          <div className="stack-sm">
            {related.length > 0 ? (
              related.map((item) => (
                <Link key={item._id} href={item.url as never} className="inline-link">
                  {item.title}
                </Link>
              ))
            ) : (
              <p className="muted-line">No related posts yet.</p>
            )}
          </div>
        </article>
      </section>
    </div>
  )
}
