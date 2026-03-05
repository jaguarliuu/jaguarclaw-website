'use client'

import { FormEvent, useState } from 'react'
import { buildFeedbackIssueUrl } from '@/lib/feedback'

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export function FeedbackForm() {
  const [state, setState] = useState<SubmitState>('idle')
  const [message, setMessage] = useState('')
  const [issueUrl, setIssueUrl] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('submitting')
    setMessage('')
    setIssueUrl('')

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      type: String(formData.get('type') ?? ''),
      message: String(formData.get('message') ?? '')
    }

    const link = buildFeedbackIssueUrl(
      'https://github.com/jaguarliuu/jaguarclaw/issues/new',
      payload
    )

    event.currentTarget.reset()
    setState('success')
    setIssueUrl(link)
    setMessage('Feedback accepted. Open the pre-filled issue to finalize submission.')
  }

  return (
    <form className="feedback-form" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" type="text" required minLength={2} />
      </label>

      <label>
        Email
        <input name="email" type="email" required />
      </label>

      <label>
        Type
        <select name="type" defaultValue="bug">
          <option value="bug">Bug</option>
          <option value="feature">Feature</option>
          <option value="question">Question</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label>
        Message
        <textarea name="message" required minLength={10} rows={5} />
      </label>

      <button className="button button-primary" type="submit" disabled={state === 'submitting'}>
        {state === 'submitting' ? 'Submitting...' : 'Submit Feedback'}
      </button>

      {message ? <p className={state === 'error' ? 'form-message error' : 'form-message'}>{message}</p> : null}
      {state === 'success' && issueUrl ? (
        <a className="inline-link" href={issueUrl} target="_blank" rel="noreferrer">
          Open pre-filled GitHub issue
        </a>
      ) : null}
    </form>
  )
}
