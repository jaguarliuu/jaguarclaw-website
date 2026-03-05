import Link from 'next/link'
import { getDocs } from '@/lib/content'

export default function DocsIndexPage() {
  const docs = getDocs()

  // 按分类分组
  const grouped = docs.reduce((acc, doc) => {
    const category = doc.category
    if (!acc[category]) acc[category] = []
    acc[category].push(doc)
    return acc
  }, {} as Record<string, typeof docs>)

  return (
    <div>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <p style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '16px'
        }}>
          文档
        </p>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '16px',
          letterSpacing: '-0.02em'
        }}>
          JaguarClaw 文档
        </h1>
        <p style={{
          color: 'var(--text-muted)',
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          从这里开始，了解 JaguarClaw 的所有功能
        </p>
      </header>

      {/* Quick Links */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px',
        marginBottom: '60px'
      }}>
        <Link href="/docs/introduction" style={{
          padding: '24px',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-elevated)',
          transition: 'all var(--transition-base)'
        }}>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '8px'
          }}>
            介绍 →
          </h3>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)'
          }}>
            了解 JaguarClaw 是什么，能做什么
          </p>
        </Link>

        <Link href="/docs/quick-start" style={{
          padding: '24px',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-elevated)',
          transition: 'all var(--transition-base)'
        }}>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '8px'
          }}>
            快速开始 →
          </h3>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)'
          }}>
            下载、安装、运行你的第一个任务
          </p>
        </Link>

        <a href="https://github.com/jaguarliuu/jaguarclaw" target="_blank" rel="noreferrer" style={{
          padding: '24px',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-elevated)',
          transition: 'all var(--transition-base)'
        }}>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '8px'
          }}>
            GitHub →
          </h3>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)'
          }}>
            查看源码、提交 Issue、参与贡献
          </p>
        </a>
      </section>

      {/* Grouped Docs */}
      {Object.entries(grouped).map(([category, categoryDocs]) => (
        <section key={category} style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '20px'
          }}>
            {category}
          </h2>
          <div style={{
            display: 'grid',
            gap: '12px'
          }}>
            {categoryDocs.map((doc) => (
              <Link
                key={doc._id}
                href={doc.url as never}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-elevated)',
                  transition: 'all var(--transition-base)'
                }}
              >
                <div>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    {doc.title}
                  </h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)'
                  }}>
                    {doc.summary}
                  </p>
                </div>
                <span style={{
                  color: 'var(--text-subtle)',
                  fontSize: '1.2rem'
                }}>→</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
