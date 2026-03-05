export type BlogLike = {
  slug: string
  tags: string[]
}

export function getAdjacentPosts<T extends BlogLike>(posts: T[], currentSlug: string) {
  const index = posts.findIndex((post) => post.slug === currentSlug)
  if (index < 0) {
    return { newer: undefined, older: undefined } as const
  }

  return {
    newer: posts[index - 1],
    older: posts[index + 1]
  } as const
}

export function getRelatedPosts<T extends BlogLike>(posts: T[], currentPost: T, limit = 3): T[] {
  const currentTags = new Set(currentPost.tags)

  return posts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => ({
      post,
      score: post.tags.filter((tag) => currentTags.has(tag)).length
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post)
}

