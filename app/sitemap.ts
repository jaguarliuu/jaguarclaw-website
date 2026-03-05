import type { MetadataRoute } from 'next'
import { getBlogPosts, getDocs } from '@/lib/content'

export const dynamic = 'force-static'

const SITE_URL = 'https://jaguarliuu.github.io/jaguarclaw-website'

export default function sitemap(): MetadataRoute.Sitemap {
  const docRoutes = getDocs().map((doc) => ({
    url: `${SITE_URL}${doc.url}`,
    lastModified: new Date(doc.updatedAt)
  }))

  const blogRoutes = getBlogPosts().map((post) => ({
    url: `${SITE_URL}${post.url}`,
    lastModified: new Date(post.updatedAt)
  }))

  return [{ url: SITE_URL, lastModified: new Date() }, ...docRoutes, ...blogRoutes]
}
