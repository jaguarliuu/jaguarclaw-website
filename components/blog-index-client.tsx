'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

type BlogItem = {
  _id: string
  title: string
  summary: string
  publishedAt: string
  tags: string[]
  url: string
}

type Props = {
  posts: BlogItem[]
  tags: string[]
}

export function BlogIndexClient({ posts, tags }: Props) {
  const searchParams = useSearchParams()
  const selectedTag = searchParams.get('tag')
  const filtered = selectedTag ? posts.filter((post) => post.tags.includes(selectedTag)) : posts

  return (
    <>
      <div className="tag-row">
        <Link href="/blog" className={!selectedTag ? 'tag-chip active' : 'tag-chip'}>
          All
        </Link>
        {tags.map((tag) => (
          <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`} className={selectedTag === tag ? 'tag-chip active' : 'tag-chip'}>
            {tag}
          </Link>
        ))}
      </div>

      <div className="card-list">
        {filtered.map((post) => (
          <article key={post._id} className="content-card">
            <p className="meta">
              {new Date(post.publishedAt).toLocaleDateString('en-US')} · {post.tags.join(' / ')}
            </p>
            <h2>
              <Link href={post.url as never}>{post.title}</Link>
            </h2>
            <p>{post.summary}</p>
          </article>
        ))}
      </div>
    </>
  )
}

