import { useState, useEffect } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useMutation } from '@apollo/client/react';
import { UPDATE_ENTRY } from '@/graphql/mutations';
import { ResumeEntry, ResumeEntryInput } from '@/types/graphql';
import "../../..//styles/forms/EditResumeForm.scss";
import '../../../styles/ui/ResponsibilitiesInput.scss';

import ExperienceForm from './EsperienceForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';

function renderSectionForm(section: string, form: UseFormReturn<ResumeEntryInput>) {
    switch (section) {
        case 'Experience': return <ExperienceForm form={form} />;
        case 'Skills': return <SkillsForm form={form} />;
        case 'Projects': return <ProjectsForm form={form} />;

        default: return <p>Unknown section type</p>;
    }
}

interface EditResumeFormProps {
    entryId: string;
}

export default function EditResumeForm({ entryId }: EditResumeFormProps) {
    const [entry, setEntry] = useState<ResumeEntry | null>(null);

    const form = useForm<ResumeEntryInput>();
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<ResumeEntryInput>();

    const [updateEntry, { loading, error }] = useMutation(UPDATE_ENTRY);

    useEffect(() => {
        fetch(`/api/resume/${entryId}`)
            .then((res) => res.json())
            .then((data) => {
                setEntry(data);
                reset(data); // reinitialize form with fetched data
            });
    }, [entryId, reset]);

    const onSubmit = async (data: ResumeEntryInput) => {
        const transformed = {
            ...data,
            tags: data.tags?.map(tag => tag.trim()).filter(Boolean),
        };
        await updateEntry({ variables: { id: entryId, input: transformed } });
        alert('updated!');
    };

    // if (!entry) return <p>Loading entry...</p>;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="edit-resume-form">
            <h2 className="form-section-label">Editing: {entry?.section}</h2>
            {entry && renderSectionForm(entry.section, form)}
            <input type="number" {...register('order')} placeholder="Order" className="input" />

            <button type="submit" disabled={loading} className="btn">
                {loading ? 'Saving...' : 'Save Changes'}
            </button>

            {error && <p className="error">Error: {error.message}</p>}
        </form>
    )
}