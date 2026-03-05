import { describe, expect, it } from 'vitest'
import { getAdjacentPosts, getRelatedPosts } from '@/lib/blog-relations'

const posts = [
  { slug: 'newest', tags: ['runtime', 'design'] },
  { slug: 'middle', tags: ['design', 'docs'] },
  { slug: 'oldest', tags: ['ops'] }
]

describe('getAdjacentPosts', () => {
  it('returns newer and older neighbors in desc timeline', () => {
    expect(getAdjacentPosts(posts, 'middle')).toEqual({
      newer: posts[0],
      older: posts[2]
    })
  })
})

describe('getRelatedPosts', () => {
  it('prefers posts sharing tags and excludes current post', () => {
    const related = getRelatedPosts(posts, posts[1], 2)
    expect(related.map((p) => p.slug)).toEqual(['newest'])
  })
})
