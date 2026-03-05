import Link from 'next/link'

const features = [
  {
    icon: '🧠',
    title: 'ReAct 智能引擎',
    titleEn: 'ReAct Engine',
    description: '思考 → 行动 → 观察，循环迭代直到任务完成。不是简单的问答，而是真正的问题解决。'
  },
  {
    icon: '🛠️',
    title: '安全工具执行',
    titleEn: 'Safe Tool Execution',
    description: '文件操作、Shell 命令、网页搜索，内置安全策略，危险操作需要你确认。'
  },
  {
    icon: '💾',
    title: '长期记忆',
    titleEn: 'Long-term Memory',
    description: '跨会话记忆，语义搜索 recall，重要信息自动保存。昨天说的话，今天还记得。'
  },
  {
    icon: '🔗',
    title: 'MCP 协议支持',
    titleEn: 'MCP Protocol',
    description: '连接 GitHub、Slack、数据库等外部工具，无限扩展能力边界。'
  }
]

const quickStarts = [
  {
    title: '桌面应用',
    subtitle: '推荐方式',
    description: '下载安装包，开箱即用',
    cta: '下载',
    ctaLink: 'https://github.com/jaguarliuu/jaguarclaw/releases',
    isExternal: true
  },
  {
    title: 'Docker 部署',
    subtitle: '服务器部署',
    description: '一键启动，适合团队使用',
    code: 'docker-compose up -d',
    cta: '查看文档',
    ctaLink: '/docs'
  },
  {
    title: '源码构建',
    subtitle: '开发者模式',
    description: 'Java 24+ Node 20+，本地开发调试',
    cta: '快速开始',
    ctaLink: '/docs'
  }
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <p className="hero-eyebrow animate-in">JaguarClaw · Enterprise AI Assistant</p>
        <h1 className="animate-in delay-1">
          让 AI 真正为你工作
        </h1>
        <p className="hero-subtitle animate-in delay-2">
          企业级桌面 AI 助手。不只是回答问题 —— 它会思考、会执行、会记忆。<br />
          在你的机器上运行，数据永不离开你的网络。
        </p>
        <div className="hero-cta animate-in delay-3">
          <a 
            href="https://github.com/jaguarliuu/jaguarclaw/releases" 
            target="_blank" 
            rel="noreferrer"
            className="btn btn-primary"
          >
            立即下载
          </a>
          <Link href="/docs" className="btn btn-secondary">
            查看文档
          </Link>
          <a 
            href="https://github.com/jaguarliuu/jaguarclaw" 
            target="_blank" 
            rel="noreferrer"
            className="btn btn-secondary"
          >
            GitHub →
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="section-header">
          <h2>核心能力</h2>
          <p>不只是聊天框。是一个能真正干活的 AI Agent。</p>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <article 
              key={feature.titleEn} 
              className="feature-card animate-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <div className="section-header">
          <h2>它是怎么工作的？</h2>
          <p>ReAct 循环：推理与行动交替</p>
        </div>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          padding: '40px',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--bg-elevated)'
        }}>
          <p style={{ 
            color: 'var(--text-muted)', 
            marginBottom: '24px',
            fontSize: '0.9rem'
          }}>
            <span style={{ color: 'var(--text-secondary)' }}>用户:</span> &ldquo;分析今天的错误日志，生成摘要报告&rdquo;
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '16px', 
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem'
          }}>
            <span style={{ 
              padding: '8px 16px', 
              background: 'var(--bg-surface)', 
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)'
            }}>
              Think 思考
            </span>
            <span style={{ color: 'var(--text-subtle)' }}>→</span>
            <span style={{ 
              padding: '8px 16px', 
              background: 'var(--bg-surface)', 
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)'
            }}>
              Act 执行
            </span>
            <span style={{ color: 'var(--text-subtle)' }}>→</span>
            <span style={{ 
              padding: '8px 16px', 
              background: 'var(--bg-surface)', 
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)'
            }}>
              Observe 观察
            </span>
            <span style={{ color: 'var(--text-subtle)' }}>→</span>
            <span style={{ 
              padding: '8px 16px', 
              background: 'var(--bg-surface)', 
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-subtle)'
            }}>
              ...循环...
            </span>
            <span style={{ color: 'var(--text-subtle)' }}>→</span>
            <span style={{ 
              padding: '8px 16px', 
              background: 'var(--text-primary)', 
              borderRadius: 'var(--radius-sm)',
              color: 'var(--bg-base)',
              fontWeight: 500
            }}>
              Done 完成
            </span>
          </div>
          
          <p style={{ 
            color: 'var(--text-muted)', 
            marginTop: '24px',
            fontSize: '0.9rem'
          }}>
            <span style={{ color: 'var(--text-secondary)' }}>JaguarClaw:</span> &ldquo;我已创建 report.md，包含 3 类错误的摘要...&rdquo;
          </p>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="section">
        <div className="section-header">
          <h2>快速开始</h2>
          <p>三种方式，任你选择</p>
        </div>
        <div className="start-grid">
          {quickStarts.map((item, index) => (
            <article 
              key={item.title} 
              className="start-card animate-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <p style={{ 
                fontSize: '0.75rem', 
                color: 'var(--text-subtle)', 
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}>
                {item.subtitle}
              </p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.code && (
                <pre>
                  <code>{item.code}</code>
                </pre>
              )}
              {item.isExternal ? (
                <a 
                  href={item.ctaLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  {item.cta}
                </a>
              ) : (
                <Link href={item.ctaLink} className="btn btn-secondary">
                  {item.cta}
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Supported LLMs Section */}
      <section className="section">
        <div className="section-header">
          <h2>支持的 LLM</h2>
          <p>自带模型，接入任意 OpenAI 兼容 API</p>
        </div>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '12px', 
          justifyContent: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {['DeepSeek', 'Qwen', 'OpenAI', 'Claude', 'GLM', 'Ollama', '...更多'].map((llm) => (
            <span 
              key={llm}
              style={{
                padding: '8px 20px',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                background: 'var(--bg-elevated)'
              }}
            >
              {llm}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
          fontWeight: 700, 
          color: 'var(--text-primary)',
          marginBottom: '24px'
        }}>
          准备好开始了吗？
        </h2>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="https://github.com/jaguarliuu/jaguarclaw/releases" 
            target="_blank" 
            rel="noreferrer"
            className="btn btn-primary"
          >
            下载 JaguarClaw
          </a>
          <Link href="/docs" className="btn btn-secondary">
            阅读文档
          </Link>
        </div>
      </section>
    </div>
  )
}
