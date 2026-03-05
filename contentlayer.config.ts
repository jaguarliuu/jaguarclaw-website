import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    category: { type: 'string', required: true },
    order: { type: 'number', required: true },
    updatedAt: { type: 'date', required: true }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/docs/${doc.slug}`
    }
  }
}))

const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    updatedAt: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    author: { type: 'string', required: true },
    cover: { type: 'string', required: false },
    draft: { type: 'boolean', required: false, default: false }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post.slug}`
    }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Doc, BlogPost],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark-high-contrast',
          keepBackground: false
        }
      ]
    ]
  }
})
