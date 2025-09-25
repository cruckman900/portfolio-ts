// pages/projects.tsx
import { useEffect, useState } from 'react';
import ProjectGrid from '../components/ui/ProjectGrid';
import type { Project } from '../types/project';
import Layout from '@/components/Layout';

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        console.log("projects", projects);
    }, [projects]);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => {
                const visibleProjects = data.filter(
                    (p: Project) => p.status !== 'archived'
                );
                setProjects(visibleProjects);
            });
    }, []);

    return (
        <main>
            <h1 style={{ color: '#ff3c00', padding: '2rem' }}>
                ☣️ Legacy Projects
            </h1>
            <ProjectGrid projects={projects} />
        </main>
    );
}

// Define a custom layout for this page
ProjectsPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
};