import Head from 'next/head'
import TwoPanelLayout from '@/components/layout/TwoPanelLayout'
import Layout from "@/components/layout/Layout"
import Section from '@/components/ui/Section'
import resumeData from '@/data/resume.json'
import styles from './resume.module.scss'

export default function ResumePage() {
    const leftPanel = (
        <div className={styles.resume}>
            <Section>
                <div className={styles.resumeHeader}>
                    <h1 style={{ margin: 0, padding: 0 }}>{resumeData.name}</h1>
                    <p className={styles.tagline}>{resumeData.tagline}</p>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i>{resumeData.contact.location}</li>
                        <li><i className="fas fa-envelope"></i><a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a></li>
                        <li><i className="fas fa-phone"></i><a href={`tel:+1${resumeData.contact.phone.replace(/[\s()-]/g, "")}`}>{resumeData.contact.phone}</a></li>
                        <li><i className="fas fa-globe"></i><a href={resumeData.contact.website} target='_blank'>{resumeData.contact.website.substring(8)}</a></li>
                        <li><i className="fab fa-github"></i><a href={resumeData.contact.github} target='_blank'>{resumeData.contact.github.substring(8)}</a></li>
                    </ul>
                </div>
            </Section>
            <Section title="Core Competencies" icon="fas fa-key">
                <div className={styles.section}>
                    {resumeData.skills.map((skill, i) =>
                    (
                        <div key={i} className={`${styles.loopContainer} ${styles.noBreakInside}`}>
                            <h3>{skill.section}</h3>
                            <div>{skill.content}</div>
                        </div>
                    )
                    )}
                </div>
            </Section>

            <Section className={styles.pagebreakBefore} title="Education" icon="fas fa-graduation-cap">
                <div className={styles.section}>
                    {resumeData.education.map((edu, i) =>
                    (
                        <div key={i} className={styles.loopContainer}>
                            <div><i>{edu.dates}</i></div>
                            <div>{edu.degree}</div>
                            <h3><a href={edu.url} target='_blank'>{edu.school}</a></h3>
                        </div>
                    )
                    )}
                </div>
            </Section>
        </div>
    )

    const rightPanel = (
        <div className={styles.resume}>
            <Section title="Professional Summary" icon="fas fa-user">
                <p>{resumeData.summary}</p>
            </Section>
            <Section title="Selected Achievements" icon="fas fa-star">
                <div className={styles.section}>
                    {resumeData.achievements.map((ach, i) =>
                    (
                        <div key={i}>
                            <h3>{ach.category}</h3>
                            <ul>
                                {ach.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )
                    )}
                </div>
            </Section>
            <Section title="Professional Experience" icon="fas fa-briefcase">
                <div className={styles.section}>
                    {resumeData.experience.map((exp, i) =>
                    (
                        <article className={styles.noBreakInside} key={i}>
                            <h3>{exp.title} &mdash; {exp.company}</h3>
                            <div><i>{exp.dates}</i></div>
                            <ul>
                                {exp.details.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    )
                    )}
                </div>
            </Section>
        </div>
    )

    return (
        <div className={`${styles.container} ${styles.resume}`}>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <TwoPanelLayout left={leftPanel} right={rightPanel} />
            <Section title="Personal Projects" className={styles.projects} icon="fas fa-code">
                <div className={styles.section}>
                    {resumeData.projects.map((list, i) =>
                    (
                        <article key={i}>
                            <h3>{list.genre}</h3>
                            {list.projects.map((project, j) =>
                            (
                                <div key={j} className={styles.noBreakInside}>
                                    <i>{project.name}</i>
                                    <ul>
                                        {project.url && <li><strong>Live:</strong> <a href={project.url} target="_blank">{project.url.substring(8)}</a></li>}
                                        <li>{project.description}</li>
                                        <li><strong>Tech: </strong>{project.tech}</li>
                                        {project.repos.map((repo) => (
                                            <li key={repo.label}><strong>{repo.label}</strong> <a href={repo.url} target="_blank">{repo.url.substring(8)}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            )
                            )}
                        </article>
                    )
                    )}
                </div>
            </Section>
        </div>
    )
}

// Define a custom layout for this page
ResumePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
}
