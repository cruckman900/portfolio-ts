// pages/projects.tsx
import { useEffect, useState } from 'react';
import ProjectGrid from '../components/ui/ProjectGrid';
import type { Project } from '../types/project';

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);

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
            <h1 style={{ color: '#ff3c00', fontFamily: 'Share Tech Mono', padding: '2rem' }}>
                ☣️ Legacy Projects
            </h1>
            <ProjectGrid projects={projects} />
        </main>
    );
}