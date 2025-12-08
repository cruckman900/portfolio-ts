// pages/api/get-post.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query

    if (!slug || typeof slug !== 'string') {
        return res.status(400).json({ error: 'Missing or invalid slug' })
    }

    try {
        const rows = await sql`SELECT * FROM blog_posts WHERE slug = ${slug}`
        if (!rows || rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' })
        }

        res.status(200).json(rows[0])
    } catch (err) {
        // TODO: alternative to console.error logging
        // console.error('Database error:', err)
        res.status(500).json({ error: `Database error: ${err}` })
    }
}
