// components/ProjectGrid.tsx
import styles from './Projects.module.scss';
import ProjectCard from './ProjectCard';
import type { Project } from '../../types/project';

interface ProjectGridProps {
    projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className={styles.grid}>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}