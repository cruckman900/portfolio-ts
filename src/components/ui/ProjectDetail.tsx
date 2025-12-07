// components/ui/ProjectDetail.tsx
import projects from '@/data/projects.json'
import { useRouter } from 'next/router'
import styles from './ProjectDetail.module.scss'

export default function ProjectDetail() {
    const { query } = useRouter()
    const slug = query.slug as string
    const project = projects.find(p => p.slug === slug)

    if (!project) {
        return <p>Select a project from the menu.</p>
    }

    // Helper to render GitHub links
    const renderGithubLinks = (github: string | Record<string, string>) => {
        if (typeof github === 'string') {
            return (
                <li>
                    <strong>GitHub:</strong>{' '}
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        {github.replace(/^https?:\/\//, '')}
                    </a>
                </li>
            )
        }

        return (
            <>
                {Object.entries(github).map(([label, url]) => (
                    <li key={label}>
                        <strong>{label}:</strong>{' '}
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {url.replace(/^https?:\/\//, '')}
                        </a>
                    </li>
                ))}
            </>
        )
    }

    return (
        <article className={styles.detail}>
            <h1>
                <img src={project.image} />
                <span>{project.title}</span>
            </h1>
            <p>{project.description}</p>
            <ul>
                {project.url && (
                    <li>
                        <strong>Live:</strong>{' '}
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            {project.url}
                        </a>
                    </li>
                )}
                {project.github && renderGithubLinks(project.github)}
                <li>
                    <strong>Tech:</strong> {project.tech.join(', ')}
                </li>
            </ul>
        </article>
    )
}
