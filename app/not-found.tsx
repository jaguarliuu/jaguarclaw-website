import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="stack-md page-head">
      <p className="eyebrow">404</p>
      <h1>Page Not Found</h1>
      <p>The requested document or article is not available in this version.</p>
      <Link href="/" className="button button-secondary">
        Back to Home
      </Link>
    </div>
  )
}
