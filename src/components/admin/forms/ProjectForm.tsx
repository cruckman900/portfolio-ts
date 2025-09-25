// components/ProjectForm.tsx
import { useState } from 'react';
import PreviewPanel from '@/components/ui/PreviewPanel';
import ImpactBadge from '@/components/ImpactBadge';
import LegacyLevelBadge from '@/components/LegacyLevelBadge';
import type { Project } from '../../../types/project';
import styles from '../../ProjectEditor.module.scss';

interface ProjectFormProps {
    initialData: Project;
    onSave: (updated: Project) => void;
}

export default function ProjectForm({ initialData, onSave }: ProjectFormProps) {
    const [formData, setFormData] = useState<Project>(initialData);
    const [hasError, setHasError] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const [showMeta, setShowMeta] = useState(true);
    const [showContent, setShowContent] = useState(true);
    const [showVisuals, setShowVisuals] = useState(true);


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setIsSaved(false);
        setHasError(false);
    };

    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            tags: e.target.value.split(',').map(tag => tag.trim()),
        }));
    };

    const handleAnimationsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            animations: e.target.value.split(',').map(anim => anim.trim() as Project['animations'][number]),
        }));
    };

    const handleSave = () => {
        if (!formData.title || !formData.type || !formData.status || !formData.impact) {
            setHasError(true);
            return;
        }
        onSave(formData);
        setIsSaved(true);
    };

    return (
        <form className={styles.formControl}>
            <h3 onClick={() => setShowContent(!showContent)}>📄 Content {showContent ? '▼' : '▶'}</h3>
            {showContent && (
                <>
                    <section>
                        <fieldset
                            data-impact={formData.impact}
                            className={`${styles.fieldset} ${formData.title ? styles.active : ''}`}
                        >
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </fieldset>

                        <fieldset className={`${styles.fieldset} ${formData.summary ? styles.active : ''}`}>
                            <label htmlFor="summary">Summary</label>
                            <textarea
                                id="summary"
                                name="summary"
                                value={formData.summary}
                                onChange={handleChange}
                            />
                        </fieldset>

                        <h3 onClick={() => setShowContent(!showContent)}>📄 Content {showContent ? '▼' : '▶'}</h3>
                        {showContent && (
                            <fieldset className={`${styles.fieldset} ${formData.tags.length ? styles.active : ''}`}>
                                <label htmlFor="tags">Tags (comma-separated)</label>
                                <input
                                    id="tags"
                                    name="tags"
                                    type="text"
                                    value={formData.tags.join(', ')}
                                    onChange={handleTagsChange}
                                />
                            </fieldset>
                        )}
                    </section>
                </>
            )}

            <h3 onClick={() => setShowMeta(!showMeta)}>🧠 Meta {showMeta ? '▼' : '▶'}</h3>
            {showMeta && (
                <>
                    <section>
                        <fieldset className={styles.fieldset}>
                            <label htmlFor="type">Type</label>
                            <select
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                            >
                                <option value="legal">Legal</option>
                                <option value="creative">Creative</option>
                                <option value="technical">Technical</option>
                            </select>
                        </fieldset>

                        <fieldset className={styles.fieldset}>
                            <label htmlFor="status">Status</label>
                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="active">Active</option>
                                <option value="published">Published</option>
                                <option value="archived">Archived</option>
                            </select>
                        </fieldset>

                        <fieldset className={styles.fieldset}>
                            <label htmlFor="impact">Impact</label>
                            <select
                                id="impact"
                                name="impact"
                                value={formData.impact}
                                onChange={handleChange}
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </fieldset>
                        <ImpactBadge impact={formData.impact} />

                        <fieldset className={styles.fieldset}>
                            <label htmlFor="legacyLevel">Legacy Level</label>
                            <select
                                id="legacyLevel"
                                name="legacyLevel"
                                value={formData.legacyLevel}
                                onChange={handleChange}
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="critical">Critical</option>
                            </select>
                        </fieldset>
                        <LegacyLevelBadge legacyLevel={formData.legacyLevel} />
                    </section>
                </>
            )}

            <h3 onClick={() => setShowVisuals(!showVisuals)}>🎨 Visuals {showVisuals ? '▼' : '▶'}</h3>
            {showVisuals && (
                <>
                    <section>
                        <fieldset className={`${styles.fieldset} ${formData.animations.length ? styles.active : ''}`}>
                            <label htmlFor="animations">Animations (comma-separated)</label>
                            <input
                                id="animations"
                                name="animations"
                                type="text"
                                value={formData.animations.join(', ')}
                                onChange={handleAnimationsChange}
                            />
                        </fieldset>
                        {formData.animations.length > 0 && (
                            <PreviewPanel animation={formData.animations[0]} />
                        )}

                        <fieldset className={`${styles.fieldset} ${formData.repo ? styles.active : ''}`}>
                            <label htmlFor="repo">Repo URL</label>
                            <input
                                id="repo"
                                name="repo"
                                type="text"
                                value={formData.repo ?? ''}
                                onChange={handleChange}
                            />
                        </fieldset>

                        <fieldset className={`${styles.fieldset} ${formData.cover ? styles.active : ''}`}>
                            <label htmlFor="cover">Cover Image URL</label>
                            <input
                                id="cover"
                                name="cover"
                                type="text"
                                value={formData.cover ?? ''}
                                onChange={handleChange}
                            />
                        </fieldset>
                    </section>
                </>
            )}

            <button type="button" onClick={handleSave}>Save Project</button>

            {hasError && <div className={styles.errorFeedback}>System breach detected</div>}
            {isSaved && <div className={styles.saveFeedback}>Data stabilized</div>}
        </form>
    );
}
