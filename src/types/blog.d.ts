import { z } from 'zod'

export const BlogPostSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  category: z.string(),
  excerpt: z.string().optional(),
  content: z.string(),
  author: z.string().optional(),
  tags: z.string().optional(),
  published_at: z.string(),
  updated_at: z.string().optional(),
  archived: z.boolean(),

  marketing: z
    .object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      openGraphImage: z.string().optional(),
      cta: z.string().optional(),
    })
    .optional(),
})

export type BlogPost = z.infer<typeof BlogPostSchema>

export type BlogPostRow = {
  id: number
  slug: string
  title: string
  category: string
  excerpt?: string
  content: string
  author?: string
  tags?: string
  published_at: string
  updated_at?: string
  archived: boolean

  marketing?: {
    metaTitle?: string
    metaDescription?: string
    openGraphImage?: string
    cta?: string
  }
}
