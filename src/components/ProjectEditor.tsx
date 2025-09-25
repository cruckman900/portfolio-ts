/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import type { Project } from '@/types/project';

interface Props {
    project: Project;
    onSave: (updated: Project) => void;
}

const ProjectEditor = ({ project, onSave }: Props) => {
    const [form, setForm] = useState<Project>(project);

    const handleChange = (field: keyof Project, value: any) => {
        setForm(prev => ({ ...prev, [field]: value}));
    }

    const handleTagChange = (index: number, value: string) => {
        const updatedTags = [...form.tags];
        updatedTags[index] = value;
        setForm(prev => ({ ...prev, tags: updatedTags }));
    };

    const handleAnimationToggle = (animation:string) => {
        const exists = form.animations.includes(animation as any);
        const updated = exists
            ? form.animations.filter(a => a !== animation)
            : [...form.animations, animation as any];
        setForm(prev => ({ ...prev, animations: updated }));
    };

    const handleSave = () => {
        onSave(form);
    };

    return (
        <div className="project-editor">
            <h2>Edit Project: {form.title}</h2>

            <label>Title</label>
            <input
                type="text"
                value={form.title}
                onChange={e => handleChange('title', e.target.value)}
            />

            <label>Summary</label>
            <textarea
                value={form.summary}
                onChange={e => handleChange('summary', e.target.value)}
            />

            <label>Type</label>
            <select
                value={form.type}
                onChange={e => handleChange('type', e.target.value)}
            >
                <option value="legal">Legal</option>
                <option value="creative">Creative</option>
                <option value="technical">Technical</option>
            </select>

            <label>Status</label>
            <select
                value={form.status}
                onChange={e => handleChange('status', e.target.value)}
            >
                <option value="active">Active</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
            </select>

            <label>Impact</label>
            <select
                value={form.impact}
                onChange={e => handleChange('impact', e.target.value)}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <label>Tags</label>
            {form.tags.map((tag, i) => (
                <input
                    key={i}
                    type="text"
                    value={tag}
                    onChange={e => handleTagChange(i, e.target.value)}
                />
            ))}

            <label>Animations</label>
            {['glitch', 'fade', 'pulse', 'wave'].map(anim => (
                <label key={anim}>
                    <input
                        type="checkbox"
                        checked={form.animations.includes(anim as any)}
                        onChange={() => handleAnimationToggle(anim)}
                    />
                    {anim}
                </label>
            ))}

            <label>Repo URL</label>
            <input
                type="text"
                value={form.repo ?? ''}
                onChange={e => handleChange('repo', e.target.value)}
            />

            <label>Cover Image Path</label>
            <input
                type="text"
                value={form.cover ?? ''}
                onChange={e => handleChange('cover', e.target.value)}
            />

            <button onClick={handleSave}>💾 Save Project</button>
        </div>
    );
}

export default ProjectEditor;