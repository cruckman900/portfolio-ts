import ScreenshotGrid from './ScreenshotGrid'
import { Project, ProjectUrl, ProjectGithub, ScreenshotGroup } from '@/types/project'
import projects from '@/data/projects.json'
import { useRouter } from 'next/router'
import styles from './ProjectDetail.module.scss'

export default function ProjectDetail() {
    const { query } = useRouter()
    const slug = query.slug as string

    const typedProjects = projects as Project[]
    const project = typedProjects.find(p => p.slug === slug)

    if (!project) {
        return <p>Select a project from the menu.</p>
    }

    return (
        <article className={styles.detail}>
            {/* Title */}
            <h1>
                <img src={project.image} alt={project.title} />
                <span>{project.title}</span>
            </h1>

            {/* Description */}
            <p>{project.description}</p>

            {/* What I Built */}
            <section>
                <h2>What I Built</h2>
                <p>{project.whatIBuilt}</p>
            </section>

            {/* Highlights */}
            {project.highlights.length > 0 && (
                <section>
                    <h2>Highlights</h2>
                    <ul>
                        {project.highlights.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Challenges & Solutions */}
            {project.challengesAndSolutions.length > 0 && (
                <section>
                    <h2>Challenges & Solutions</h2>
                    <ul>
                        {project.challengesAndSolutions.map((cs, idx) => (
                            <li key={idx}>
                                <strong>Challenge:</strong> {cs.challenge}
                                <br />
                                <strong>Solution:</strong> {cs.solution}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* What I Learned */}
            {project.whatILearned.length > 0 && (
                <section>
                    <h2>What I Learned</h2>
                    <ul>
                        {project.whatILearned.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* URLs */}
            {project.url.length > 0 && (
                <section>
                    <h2>Live Links</h2>
                    <ul>
                        {project.url.map((entry: ProjectUrl, idx) => (
                            <li key={idx}>
                                <strong>{entry.label}:</strong>{' '}
                                <a href={entry.href} target="_blank" rel="noopener noreferrer">
                                    {entry.href.replace(/^https?:\/\//, '')}
                                </a>

                                {entry.username && (
                                    <div><strong>User:</strong> {entry.username}</div>
                                )}
                                {entry.password && (
                                    <div><strong>Pass:</strong> {entry.password}</div>
                                )}
                                {entry.notes && (
                                    <div><em>{entry.notes}</em></div>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* GitHub */}
            {project.github.length > 0 && (
                <section>
                    <h2>GitHub</h2>
                    <ul>
                        {project.github.map((repo: ProjectGithub, idx) => (
                            <li key={idx}>
                                <strong>{repo.label}:</strong>{' '}
                                <a href={repo.href} target="_blank" rel="noopener noreferrer">
                                    {repo.href.replace(/^https?:\/\//, '')}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Tech Stack */}
            <section>
                <h2>Tech Stack</h2>
                <ul>
                    {Object.entries(project.tech).map(([category, items]) => (
                        <li key={category}>
                            <strong>{category}:</strong> {items.join(', ')}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Screenshots */}
            {project.screenshots.length > 0 && (
                <section>
                    <h2>Screenshots</h2>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {project.screenshots.map((group: ScreenshotGroup, index) => {
                            const groupName = Object.keys(group)[0]
                            const items = group[groupName]

                            return (
                                <li key={index} style={{ marginBottom: "2rem" }}>
                                    <div style={{ fontStyle: 'italic' }}>{groupName}</div>
                                    <ScreenshotGrid screenshots={items} />
                                </li>
                            )
                        })}
                    </ul>
                </section>
            )}
        </article>
    )
}
