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

  // 找到上一篇和下一篇
  const allDocs = getDocs()
  const currentIndex = allDocs.findIndex(d => d.slug === doc.slug)
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null

  return (
    <div className="docs-layout">
      {/* Left Sidebar */}
      <aside className="docs-nav">
        {navGroups.map((group) => (
          <div key={group.category} className="docs-nav-section">
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
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <article className="prose-wrapper">
        {/* Breadcrumb */}
        <nav style={{
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          marginBottom: '24px'
        }}>
          <Link href="/docs" style={{ color: 'var(--text-muted)' }}>文档</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--text-secondary)' }}>{doc.category}</span>
        </nav>

        {/* Header */}
        <header style={{ marginBottom: '32px' }}>
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-subtle)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '12px'
          }}>
            {doc.category}
          </p>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '16px'
          }}>
            {doc.title}
          </h1>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6
          }}>
            {doc.summary}
          </p>
        </header>

        {/* Divider */}
        <hr style={{
          border: 'none',
          borderTop: '1px solid var(--border-subtle)',
          margin: '32px 0'
        }} />

        {/* Content */}
        <MdxContent code={doc.body.code} />

        {/* Navigation */}
        <hr style={{
          border: 'none',
          borderTop: '1px solid var(--border-subtle)',
          margin: '48px 0 24px'
        }} />
        <nav style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px'
        }}>
          {prevDoc ? (
            <Link href={prevDoc.url as never} style={{
              padding: '16px',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)'
            }}>
              <p style={{
                fontSize: '0.75rem',
                color: 'var(--text-subtle)',
                marginBottom: '4px'
              }}>← 上一篇</p>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-primary)',
                fontWeight: 500
              }}>{prevDoc.title}</p>
            </Link>
          ) : <div />}
          {nextDoc && (
            <Link href={nextDoc.url as never} style={{
              padding: '16px',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)',
              textAlign: 'right'
            }}>
              <p style={{
                fontSize: '0.75rem',
                color: 'var(--text-subtle)',
                marginBottom: '4px'
              }}>下一篇 →</p>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-primary)',
                fontWeight: 500
              }}>{nextDoc.title}</p>
            </Link>
          )}
        </nav>
      </article>

      {/* Right TOC */}
      <aside className="docs-toc">
        <DocsToc toc={toc} />
      </aside>
    </div>
  )
}
