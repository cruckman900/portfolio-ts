// pages/api/resume.ts
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import ResumeEntry from "@/models/ResumeEntry";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();
    const { section } = req.query;
    const entries = (await ResumeEntry.find({ section })).sort((a, b) => a.order - b.order );
    res.status(200).json({ resume: entries });
}