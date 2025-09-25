import ImpactBadge from '../ImpactBadge';
import LegacyLevelBadge from '../LegacyLevelBadge';
import PreviewPanel from './PreviewPanel';
import Image from 'next/image';
import type { Project } from '@/types/project';
import styles from '../../styles/ui/Projects.module.scss';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { title, summary, tags, impact, legacyLevel, animations, repo, cover } = project;

    return (
        <div className={`${styles.card} ${styles[`impact-${impact}`]}`}>
            <div className={styles.header}>
                <h3>{title}</h3>
                <ImpactBadge impact={impact} />
                <LegacyLevelBadge legacyLevel={legacyLevel} />
            </div>

            <PreviewPanel animation={animations[0]} />

            <p className={styles.summary}>{summary}</p>

            <div className={styles.tags}>
                {tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                ))}
            </div>

            {repo && (
                <a href={repo} target="_blank" rel="noopener noreferrer" className={styles.repo}>
                    🔗 View Repo
                </a>
            )}

            {cover && (
                <Image src={cover} alt={`${title} cover`} width="100" height="100" className={styles.cover} />
            )}
        </div>
    )
}