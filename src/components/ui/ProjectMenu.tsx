// components/ui/ProjectMenu.tsx
import Link from 'next/link'
import projects from '@/data/projects.json'
import styles from './ProjectMenu.module.scss'

export default function ProjectMenu() {
    return (
        <nav className={styles.menu}>
            <h2>Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.slug}>
                        <Link href={`/project/${project.slug}`}><i className={project.icon}></i>{project.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
