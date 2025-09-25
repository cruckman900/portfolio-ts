import { useState, useEffect } from 'react';
import type { Project } from '@/types/project';
import ProjectEditor from '@/components/ProjectEditor';
// import ProjectPreview from '@Components/ProjectPreview';
import { readProjects, writeProjects } from '@/lib/fs';

const AdminProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selected, setSelected] = useState<Project | null>(null);

    useEffect(() => {
        const load = async () => {
            const data = await readProjects();
            setProjects(data);
        };
        load();
    }, []);

    const handleSave = async (updatedProject: Project) => {
        const updated = projects.map(p => p.id === updatedProject.id ? updatedProject : p);
        setProjects(updated);
        await writeProjects(updated);
    };

    return (
        <div className="admin-projects">
            <aside>
                {projects.map(p => (
                    <button key={p.id} onClick={() => setSelected(p)}>{p.title}</button>
                ))}
            </aside>
            <main>
                {selected && (
                    <>
                        <ProjectEditor project={selected} onSave={handleSave} />
                        {/* <ProjectPreview project={selected} /> */}
                    </>
                )}
            </main>
        </div>
    );
}

export default AdminProjects;