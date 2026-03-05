import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

export const metadata: Metadata = {
  title: 'JaguarClaw - 企业级桌面 AI 助手',
  description: 'JaguarClaw 是企业级桌面 AI 助手，会思考、会执行、会记忆。支持 ReAct 引擎、工具执行、长期记忆、MCP 协议。',
  keywords: ['AI', 'AI Assistant', 'Desktop App', 'ReAct', 'Agent', 'LLM', 'OpenAI', 'DeepSeek'],
  authors: [{ name: 'jaguarliuu' }],
  openGraph: {
    title: 'JaguarClaw - 企业级桌面 AI 助手',
    description: '让 AI 真正为你工作。不只是回答问题 —— 它会思考、会执行、会记忆。',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JaguarClaw - 企业级桌面 AI 助手',
    description: '让 AI 真正为你工作',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="site-bg" aria-hidden="true">
          <div className="light-arc" />
          <div className="glow-orb orb-1" />
          <div className="glow-orb orb-2" />
        </div>
        <SiteHeader />
        <main className="container main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
