import fs from 'fs/promises';
import path from 'path';
import type { Project } from '@/types/project';

const filePath = path.join(process.cwd(), 'data', 'projects.json');

export const readProjects = async () => {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
};

export const writeProjects = async (projects: Project[]) => {
    const json = JSON.stringify(projects, null, 2);
    await fs.writeFile(filePath, json, 'utf-8');
}