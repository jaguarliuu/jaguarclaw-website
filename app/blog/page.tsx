import { Suspense } from 'react'
import { BlogIndexClient } from '@/components/blog-index-client'
import { getBlogPosts, getBlogTags } from '@/lib/content'

export default function BlogIndexPage() {
  const posts = getBlogPosts()
  const tags = getBlogTags()

  return (
    <div className="stack-md">
      <header className="page-head">
        <p className="eyebrow">BLOG</p>
        <h1>Design & Engineering Journal</h1>
      </header>

      <Suspense fallback={<p className="muted-line">Loading posts...</p>}>
        <BlogIndexClient posts={posts} tags={tags} />
      </Suspense>
    </div>
  )
}
