// pages/api/seed-post.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { neon } from '@netlify/neon'

const sql = neon()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sql`
      INSERT INTO blog_posts (title, slug, category, published_at, content)
      VALUES (
        'The Story of This Site',
        'the-story-of-this-site',
        'personal',
        ${new Date().toISOString()},
        ${{
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h1',
              children: [{ type: 'text', text: 'The Story of This Site' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'This site began as a whisper...' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'What started as a portfolio...' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'From Netlify secret scanning...' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'And it’s only just beginning.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: '—Christopher Ruckman & Copilot 🤝' }],
            },
          ],
        }}
      )
    `

    res.status(200).json({ message: '✅ Post seeded successfully' })
  } catch (err) {
    res.status(500).json({ error: 'Seeding failed', details: err })
  }
}
