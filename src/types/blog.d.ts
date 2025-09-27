// types/blog.d.ts
import { z } from 'zod';

export const BlogPostSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  category: z.string(),
  excerpt: z.string().optional(),
  content_json: z.string(),
  author: z.string().optional(),
  tags: z.string().optional(),
  published_at: z.string(),
  updated_at: z.string().optional(),
  archived: z.boolean(),
});

export type BlogPost = z.infer<typeof BlogPostSchema>;

export type BlogPostRow = {
  id: number;
  slug: string;
  title: string;
  category: string;
  excerpt?: string;
  content_json: string;
  author?: string;
  tags?: string;
  published_at: string;
  updated_at?: string;
  archived: boolean;
};
