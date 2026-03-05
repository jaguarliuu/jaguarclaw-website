export type FeedbackType = 'bug' | 'feature' | 'question' | 'other'

export type FeedbackInput = {
  name?: string
  email?: string
  type?: string
  message?: string
}

type FeedbackIssuePayload = {
  title: string
  body: string
  labels: string[]
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const validTypes: FeedbackType[] = ['bug', 'feature', 'question', 'other']

export function validateFeedbackInput(input: FeedbackInput | Record<string, unknown>) {
  const errors: string[] = []
  const name = typeof input.name === 'string' ? input.name : ''
  const email = typeof input.email === 'string' ? input.email : ''
  const type = typeof input.type === 'string' ? input.type : ''
  const message = typeof input.message === 'string' ? input.message : ''

  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters.')
  }

  if (!email || !emailPattern.test(email)) {
    errors.push('Email is invalid.')
  }

  if (!type || !validTypes.includes(type as FeedbackType)) {
    errors.push('Type is invalid.')
  }

  if (!message || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters.')
  }

  return {
    ok: errors.length === 0,
    errors
  }
}

export function buildFeedbackIssuePayload(input: FeedbackInput): FeedbackIssuePayload {
  const normalizedType = String(input.type ?? 'other').toLowerCase() as FeedbackType
  const upperType = normalizedType.toUpperCase()
  const headline = (input.message ?? 'Feedback').trim().slice(0, 72)

  const title = `[${upperType}] ${headline}`
  const body = [
    `Reporter: ${input.name ?? 'Unknown'}`,
    `Email: ${input.email ?? 'Unknown'}`,
    `Type: ${normalizedType}`,
    '',
    'Details:',
    `${input.message ?? ''}`
  ].join('\n')

  return {
    title,
    body,
    labels: ['feedback', `type:${normalizedType}`]
  }
}

export function buildFeedbackIssueUrl(baseUrl: string, input: FeedbackInput) {
  const issue = buildFeedbackIssuePayload(input)
  const url = new URL(baseUrl)
  url.searchParams.set('title', issue.title)
  url.searchParams.set('body', issue.body)
  return url.toString()
}
