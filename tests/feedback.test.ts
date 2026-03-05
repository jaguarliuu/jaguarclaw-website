import { describe, expect, it } from 'vitest'
import {
  buildFeedbackIssuePayload,
  buildFeedbackIssueUrl,
  validateFeedbackInput
} from '@/lib/feedback'

describe('validateFeedbackInput', () => {
  it('rejects invalid payload', () => {
    const result = validateFeedbackInput({ email: 'bad', message: '' })
    expect(result.ok).toBe(false)
    expect(result.errors.length).toBeGreaterThan(0)
  })

  it('accepts valid payload', () => {
    const result = validateFeedbackInput({
      name: 'Alice',
      email: 'alice@example.com',
      type: 'bug',
      message: 'Steps to reproduce...'
    })
    expect(result.ok).toBe(true)
    expect(result.errors).toEqual([])
  })

  it('builds GitHub issue prefill url from feedback payload', () => {
    const url = buildFeedbackIssueUrl(
      'https://github.com/jaguarliuu/jaguarclaw/issues/new',
      {
        name: 'Alice',
        email: 'alice@example.com',
        type: 'bug',
        message: 'Steps to reproduce...'
      }
    )

    expect(url).toContain('title=%5BBUG%5D')
    expect(url).toContain('Alice')
    expect(url).toContain('alice%40example.com')
  })

  it('builds issue payload for GitHub API', () => {
    const payload = buildFeedbackIssuePayload({
      name: 'Alice',
      email: 'alice@example.com',
      type: 'feature',
      message: 'Please add timeline view for runtime steps.'
    })

    expect(payload.title).toContain('[FEATURE]')
    expect(payload.body).toContain('Reporter: Alice')
    expect(payload.labels).toEqual(['feedback', 'type:feature'])
  })
})
