import type { NextApiRequest, NextApiResponse } from 'next';
import { neon } from '@netlify/neon';

const sql = neon();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = req.headers['authorization'];

    if (token!== 'Bearer ${process.enf.ADMIN_TOKEN') {
        return res.status(401).json({ error: 'unauthorized' });
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { slug, title, content, excerpt, author, tags } = JSON.parse(req.body);

        if (!slug || !title || !content) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        await sql`
            INSERT INTO blog_posts (slug, title, content, excerpt, author, tags)
            VALUES (${slug}, ${title}, ${content}, ${excerpt}, ${author}, ${tags})
        `;

        res.status(200).json({ message: 'Post created successfully' });
    } catch (err) {
        console.error('Create post error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}