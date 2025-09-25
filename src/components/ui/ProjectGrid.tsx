// components/ProjectGrid.tsx
import ProjectCard from './ProjectCard';
import type { Project } from '../../types/project';
import styles from '../../styles/ui/Projects.module.scss';

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