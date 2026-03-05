import Link from 'next/link'

const footerLinks = {
  product: [
    { label: '功能特性', href: '/#features' },
    { label: '快速开始', href: '/#quickstart' },
    { label: '更新日志', href: 'https://github.com/jaguarliuu/jaguarclaw/releases', external: true }
  ],
  resources: [
    { label: '文档', href: '/docs' },
    { label: '博客', href: '/blog' },
    { label: '反馈', href: '/feedback' }
  ],
  community: [
    { label: 'GitHub', href: 'https://github.com/jaguarliuu/jaguarclaw', external: true },
    { label: '问题反馈', href: 'https://github.com/jaguarliuu/jaguarclaw/issues', external: true }
  ]
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>JaguarClaw</h4>
            <p>企业级桌面 AI 助手</p>
            <p style={{ marginTop: '8px' }}>思考 · 执行 · 记忆</p>
          </div>
          
          <div className="footer-section">
            <h4>产品</h4>
            {footerLinks.product.map((link) => (
              link.external ? (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              )
            ))}
          </div>
          
          <div className="footer-section">
            <h4>资源</h4>
            {footerLinks.resources.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="footer-section">
            <h4>社区</h4>
            {footerLinks.community.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} JaguarClaw. MIT License.</span>
          <span>Made with ☕ by jaguarliuu</span>
        </div>
      </div>
    </footer>
  )
}
