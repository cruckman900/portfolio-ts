// pages/api/verify.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { parse } from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const cookies = parse(req.headers.cookie || '');
    const token = cookies.admin_token;

    if (token === process.env.ADMIN_TOKEN) {
        return res.status(200).json({ message: 'Authorized' });
    }

    return res.status(401).json({ error: 'Unauthorized' });
}
