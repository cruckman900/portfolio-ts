import type { NextApiRequest, NextApiResponse } from "next"
import { BlogPostRow } from '@/types/blog'
import { neon } from '@netlify/neon'

const sql = neon()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<BlogPostRow[]>
) {
    const result = await sql`SELECT * FROM blog_posts ORDER BY published_at DESC`

    // Cast result to BlogPostRow[]
    const posts: BlogPostRow[] = result as BlogPostRow[]

    res.status(200).json(posts)
}
