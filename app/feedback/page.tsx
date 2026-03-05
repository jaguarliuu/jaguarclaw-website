import { FeedbackForm } from '@/components/feedback-form'

export default function FeedbackPage() {
  return (
    <div className="stack-md">
      <header className="page-head">
        <p className="eyebrow">FEEDBACK</p>
        <h1>Report Issues or Share Suggestions</h1>
        <p>
          The primary channel is GitHub Issues. For enterprise use-cases, keep structured context in the ticket
          including environment, expected behavior, and impact.
        </p>
      </header>

      <section className="split-panel">
        <article className="content-card">
          <h2>Open GitHub Issue</h2>
          <p>Use templates for bug report, feature request, and design discussion.</p>
          <a className="button button-primary" href="https://github.com/jaguarliuu/jaguarclaw/issues/new/choose" target="_blank" rel="noreferrer">
            Go to Issues
          </a>
        </article>

        <article className="content-card">
          <h2>What to Include</h2>
          <ul>
            <li>Runtime version and operating system</li>
            <li>Reproduction steps and expected behavior</li>
            <li>Logs, screenshots, or minimal config sample</li>
          </ul>
        </article>
      </section>

      <section className="section">
        <article className="content-card">
          <h2>Submit From Website</h2>
          <p>Use this form when you want to share context quickly without leaving the site.</p>
          <FeedbackForm />
        </article>
      </section>
    </div>
  )
}
