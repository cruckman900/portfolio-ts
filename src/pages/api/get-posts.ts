// pages/api/get-posts.ts
import type { NextApiRequest, NextApiResponse } from "next"
import { BlogPostRow } from '@/types/blog'
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<BlogPostRow[]>
) {
    try {
        const result = await sql`SELECT * FROM blog_posts ORDER BY published_at DESC`

        // Cast result to BlogPostRow[]
        const posts: BlogPostRow[] = result as BlogPostRow[]

        res.status(200).json(posts)
    } catch (error) {
        console.error('Error fetching blog posts:', error)
        res.status(500).json([])
    }
}
