// /pages/api/resume/[section].ts
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import ResumeEntry from "@/models/ResumeEntry";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();
    const { section } = req.query;

    if (req.method === 'GET') {
        const entries = await ResumeEntry.find({ section }).sort({ order: 1 });
        res.status(200).json(entries);
    }
}