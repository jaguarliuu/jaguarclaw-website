import { describe, expect, it } from 'vitest'
import { parseTocFromRawMdx } from '@/lib/toc'

describe('parseTocFromRawMdx', () => {
  it('extracts h2 headings and slugs', () => {
    const raw = `# Title\n\n## First Section\ntext\n\n## Second Section!\nmore`
    expect(parseTocFromRawMdx(raw)).toEqual([
      { title: 'First Section', anchor: 'first-section' },
      { title: 'Second Section!', anchor: 'second-section' }
    ])
  })
})
