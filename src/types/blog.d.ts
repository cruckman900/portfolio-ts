// types/blog.d.ts
import { z } from 'zod';

export const BlogPostSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  excerpt: z.string().optional(),
  content_json: z.string(),
  author: z.string().optional(),
  tags: z.string().optional(),
  published_at: z.string(),
  updated_at: z.string().optional(),
});

export type BlogPost = z.infer<typeof BlogPostSchema>;

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  content_json: string;
  author?: string;
  tags?: string;
  published_at: string;
  updated_at?: string;
};

export type BlogPostRow = {
  id: number;
  slug: string;
  title: string;
  content_json: string;
  published_at: string;
  excerpt?: string;
  author?: string;
  tags?: string;
  updated_at?: string;
};
