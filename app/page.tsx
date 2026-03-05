import Link from 'next/link'

const features = [
  {
    title: 'Controlled Runtime',
    description: 'Secure execution boundaries, deterministic tooling, and auditable agent behavior.'
  },
  {
    title: 'Composable Workflows',
    description: 'Build, route, and observe multi-step automation with clear runtime state transitions.'
  },
  {
    title: 'Design-Driven Engineering',
    description: 'Documented architecture decisions backed by iterative implementation and postmortems.'
  }
]

export default function HomePage() {
  return (
    <div className="stack-lg">
      <section className="hero">
        <p className="eyebrow">JAGUARCLAW OFFICIAL</p>
        <h1>Enterprise AI Runtime Built for Engineering Teams</h1>
        <p className="hero-copy">
          JaguarClaw gives teams a robust foundation for controlled AI workflows, extensible tool execution,
          and production-ready observability.
        </p>
        <div className="hero-cta">
          <Link href="/docs" className="button button-primary">
            Start with Docs
          </Link>
          <Link href="/blog" className="button button-secondary">
            Read Design Blog
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Core Capabilities</h2>
          <p>Focused on reliability, traceability, and long-term maintainability.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-panel">
        <article>
          <h2>Quick Start</h2>
          <ol>
            <li>Read installation and architecture docs.</li>
            <li>Run local workspace and verify runtime status.</li>
            <li>Configure providers, tools, and safety policies.</li>
          </ol>
        </article>
        <article>
          <h2>Design Thinking</h2>
          <p>
            We publish architecture notes, trade-off analyses, and retrospectives in the blog to make
            decisions transparent and reusable.
          </p>
          <Link href="/feedback" className="inline-link">
            Share feedback or report issues
          </Link>
        </article>
      </section>
    </div>
  )
}
