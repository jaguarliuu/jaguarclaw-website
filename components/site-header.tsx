import Link from 'next/link'

const navItems = [
  { label: '首页', href: '/' },
  { label: '文档', href: '/docs' },
  { label: '博客', href: '/blog' },
  { label: '反馈', href: '/feedback' }
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand">
          JaguarClaw
        </Link>
        <nav className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a 
            href="https://github.com/jaguarliuu/jaguarclaw" 
            target="_blank" 
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
