// pages/api/verify.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = req.method === 'POST' ? req.body.token : req.query.token

    if (token === process.env.ADMIN_TOKEN) {
        return res.status(200).json({ message: 'Authorized' })
    }

    return res.status(401).json({ error: 'Unauthorized' })
}
