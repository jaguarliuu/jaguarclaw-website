import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

export const metadata: Metadata = {
  title: 'JaguarClaw',
  description: 'Enterprise-grade official website, docs, and blog for JaguarClaw.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="site-bg" aria-hidden="true" />
        <SiteHeader />
        <main className="container main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
