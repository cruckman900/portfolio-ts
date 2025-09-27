import Head from 'next/head';
import TwoPanelLayout from '@/components/layout/TwoPanelLayout';
import Layout from "@/components/layout/Layout";
import Section from '@/components/ui/Section';
import resumeData from '@/data/resume.json';
import styles from './resume.module.scss';

export default function ResumePage() {
    const leftPanel = (
        <>
            <Section>
                <div className={styles.resumeHeader}>
                    <h1>{resumeData.name}</h1>
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
                        <div key={i} className={styles.loopContainer}>
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
        </>
    );

    const rightPanel = (
        <>
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
            <Section className={styles.pagebreakBefore} title="Professional Experience" icon="fas fa-briefcase">
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
            <Section title="Personal Projects" icon="fas fa-code">
                <div className={styles.section}>
                    {resumeData.projects.map((list, i) =>
                    (
                        <article className={styles.noBreakInside} key={i}>
                            <h3>{list.genre}</h3>
                            {list.projects.map((project, j) =>
                            (
                                <div key={j}>
                                    <i>{project.name}</i>
                                    <ul>
                                        <li>{project.description}</li>
                                        <li><strong>Tech: </strong>{project.tech}</li>
                                    </ul>
                                </div>
                            )
                            )}
                        </article>
                    )
                    )}
                </div>
            </Section>
        </>
    );

    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <TwoPanelLayout left={leftPanel} right={rightPanel} />
        </>
    )
}

// Define a custom layout for this page
ResumePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
};
