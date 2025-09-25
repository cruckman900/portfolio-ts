// pages/api/seed-resume.ts
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import ResumeEntry from "@/models/ResumeEntry";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();

    const entries = [
    { section: 'Experience', title: 'Software Engineer', subtitle: 'Wayfair', order: 1 },
    { section: 'Education', title: 'BS in Computer Science', subtitle: 'Wheeling Jesuit University', order: 1 },
    // Add more entries here
    ];

    await ResumeEntry.insertMany(entries);
    res.status(200).json({ message: 'Seeded resume entries'});
}