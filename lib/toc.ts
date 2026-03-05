export type TocItem = {
  title: string
  anchor: string
}

const headingPattern = /^##\s+(.+)$/gm

export function slugifyHeading(input: string) {
  return input
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export function parseTocFromRawMdx(raw: string): TocItem[] {
  return [...raw.matchAll(headingPattern)].map((match) => {
    const title = match[1].trim()
    return { title, anchor: slugifyHeading(title) }
  })
}

