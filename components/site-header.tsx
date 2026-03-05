import Link from 'next/link'

const navItems = [
  { label: 'Product', href: '/' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
  { label: 'Feedback', href: '/feedback' }
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand" aria-label="JaguarClaw Home">
          JaguarClaw
        </Link>
        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href as never}>
              {item.label}
            </Link>
          ))}
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
