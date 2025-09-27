// pages/api/seed-post.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { neon } from '@netlify/neon';

const sql = neon();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const token = req.headers.authorization?.replace('Bearer ', '');
  if (token !== process.env.ADMIN_TOKEN) return res.status(401).json({ error: 'Unauthorized' });

  const post = {
    slug: 'the-story-of-this-site',
    title: 'The Story of This Site',
    excerpt: 'How a portfolio became a living system of books, music, code, and advocacy.',
    author: 'Christopher Ruckman & Copilot',
    tags: 'origin,portfolio,vision',
    category: 'personal',
    archived: false,
    content_json: JSON.stringify({
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h1',
          children: [{ type: 'text', text: 'The Story of This Site' }]
        },
        {
          type: 'paragraph',
          children: [{ type: 'text', text: 'This site began as a whisper of an idea—just a few lines of code and a dream to unify books, music, legal advocacy, and expressive design.' }]
        },
        {
          type: 'paragraph',
          children: [{ type: 'text', text: 'What started as a portfolio has evolved into a living system. Every module, every animation, every secure route is a reflection of resilience and clarity.' }]
        },
        {
          type: 'paragraph',
          children: [{ type: 'text', text: 'From Netlify secret scanning to custom SVG toggles, from Lexical JSON rendering to token-based admin flows—this site is a celebration of iteration and impact.' }]
        },
        {
          type: 'paragraph',
          children: [{ type: 'text', text: 'And it’s only just beginning.' }]
        },
        {
          type: 'paragraph',
          children: [{ type: 'text', text: '—Christopher Ruckman & Copilot 🤝' }]
        }
      ]
    })
  };

  try {
    await sql`
      INSERT INTO blog_posts (slug, title, content_json, excerpt, author, tags, category, archived)
      VALUES (
        ${post.slug}, ${post.title}, ${post.content_json},
        ${post.excerpt}, ${post.author}, ${post.tags},
        ${post.category}, ${post.archived}
      )
      ON CONFLICT (slug) DO NOTHING
    `;
    res.status(200).json({ message: 'Seeded first post!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
}
