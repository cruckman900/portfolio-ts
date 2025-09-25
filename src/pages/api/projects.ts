import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const filePath = path.join(process.cwd(), 'src\\data', 'projects.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const projects = JSON.parse(fileData);
        return res.status(200).json(projects);
    }

    if (req.method === 'POST') {
        const updatedData = req.body;
        fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
        return res.status(200).json({ message: 'Saved successfully' });
    }

    res.status(405).end() // Method Not Allowed
}