// pages/api/create-post.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { neon } from '@netlify/neon'

const sql = neon()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const token = req.headers.authorization?.replace('Bearer ', '')
  if (token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { slug, title, content_json, excerpt, author, tags } = req.body

  if (!slug || !title || !content_json) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await sql`
      INSERT INTO blog_posts (slug, title, content_json, excerpt, author, tags)
      VALUES (${slug}, ${title}, ${content_json}, ${excerpt}, ${author}, ${tags})
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        content_json = EXCLUDED.content_json,
        excerpt = EXCLUDED.excerpt,
        author = EXCLUDED.author,
        tags = EXCLUDED.tags,
        updated_at = CURRENT_TIMESTAMP
    `
    res.status(200).json({ message: 'Post saved' })
  } catch (err) {
    // console.error(err)
    res.status(500).json({ error: `Database error: ${err}` })
  }
}
