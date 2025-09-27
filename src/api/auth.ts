// pages/api/auth.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { token } = req.body;

    if (token === process.env.ADMIN_TOKEN) {
        const cookie = serialize('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 24, // 1 day
        });

        res.setHeader('Set-Cookie', cookie);
        return res.status(200).json({ message: 'Authenticated' });
    }

    return res.status(401).json({ error: 'Invalid token' });
}