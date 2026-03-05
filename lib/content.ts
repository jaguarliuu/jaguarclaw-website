import { allBlogPosts, allDocs } from 'contentlayer/generated'
import { getAdjacentPosts, getRelatedPosts } from '@/lib/blog-relations'
import { parseTocFromRawMdx } from '@/lib/toc'

const isPublished = (draft?: boolean) => draft !== true

export function getDocs() {
  return [...allDocs].sort((a, b) => {
    if (a.category === b.category) return a.order - b.order
    return a.category.localeCompare(b.category)
  })
}

export function getDocBySlug(slug: string) {
  return allDocs.find((doc) => doc.slug === slug)
}

export function getDocNavGroups() {
  const grouped = new Map<string, ReturnType<typeof getDocs>>()

  for (const doc of getDocs()) {
    const group = grouped.get(doc.category) ?? []
    group.push(doc)
    grouped.set(doc.category, group)
  }

  return [...grouped.entries()].map(([category, docs]) => ({
    category,
    docs
  }))
}

export function getDocToc(raw: string) {
  return parseTocFromRawMdx(raw)
}

export function getBlogPosts() {
  return [...allBlogPosts]
    .filter((post) => isPublished(post.draft))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getBlogPostBySlug(slug: string) {
  return allBlogPosts.find((post) => post.slug === slug && isPublished(post.draft))
}

export function getBlogTags() {
  const tagSet = new Set<string>()
  for (const post of getBlogPosts()) {
    for (const tag of post.tags) {
      tagSet.add(tag)
    }
  }
  return [...tagSet].sort((a, b) => a.localeCompare(b))
}

export function getBlogAdjacent(slug: string) {
  return getAdjacentPosts(getBlogPosts(), slug)
}

export function getBlogRelated(slug: string, limit = 3) {
  const posts = getBlogPosts()
  const current = posts.find((post) => post.slug === slug)
  if (!current) return []
  return getRelatedPosts(posts, current, limit)
}
