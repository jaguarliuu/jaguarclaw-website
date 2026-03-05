import Link from 'next/link'
import { getDocs } from '@/lib/content'

export default function DocsIndexPage() {
  const docs = getDocs()

  return (
    <div className="stack-md">
      <header className="page-head">
        <p className="eyebrow">DOCUMENTATION</p>
        <h1>JaguarClaw Docs</h1>
      </header>

      <div className="card-list">
        {docs.map((doc) => (
          <article key={doc._id} className="content-card">
            <div>
              <p className="meta">{doc.category}</p>
              <h2>
                <Link href={doc.url as never}>{doc.title}</Link>
              </h2>
              <p>{doc.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
