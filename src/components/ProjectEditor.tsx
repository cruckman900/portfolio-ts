// components/ProjectEditor.tsx
import { useState, useEffect } from 'react';
import styles from './ProjectEditor.module.scss';
import ProjectForm from '../components/admin/forms/ProjectForm';
import type { Project } from '../types/project';

export default function ProjectEditor() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div className={styles.editorContainer}>
            <header className={styles.header}>
                <span>🧬 Editing: /data/projects.json</span>
            </header>

            <aside className={styles.sidebar}>
                <h2>⚠️ Project Controls</h2>
                <ul>
                    <li>Live Preview</li>
                    <li>Legacy Level</li>
                    <li>Save/Sync</li>
                </ul>
            </aside>

            <main className={styles.mainContent}>
                <section>
                    {projects.map((project, index) => (
                        <ProjectForm
                            key={index}
                            initialData={project}
                            onSave={updated => {
                                const newProjects = [...projects];
                                newProjects[index] = updated;
                                setProjects(newProjects);
                                fetch('/api/projects', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(newProjects),
                                });
                            }}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}
