// components/ui/ProjectMenu.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'
import projects from '@/data/projects.json'
import styles from './ProjectMenu.module.scss'

export default function ProjectMenu() {
    const router = useRouter()

    return (
        <nav className={styles.menu}>
            <h2>Projects</h2>
            <ul>
                {projects.map(project => {
                    const href = `/project/${project.slug}`
                    const isActive =
                        router.asPath === href || router.asPath.startsWith(`${href}/`)

                    return (
                        <li key={project.slug}>
                            {isActive ? (
                                <span className={styles.active}>
                                    <i className={project.icon}></i>{project.title}
                                </span>
                            ) : (
                                <Link href={href}>
                                    <i className={project.icon}></i>{project.title}
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
