import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client/react';
import { UPDATE_ENTRY } from '@/graphql/mutations';
import { ResumeEntry, ResumeEntryInput } from '@/types/graphql';
import ResponsibilitiesInput from '../ui/ResponsibilitiesInput';
import "../../styles/forms/EditResumeForm.scss";
import '../../styles/ui/ResponsibilitiesInput.scss';

interface EditResumeFormProps {
    entryId: string;
}

export default function EditResumeForm({ entryId }: EditResumeFormProps) {
    const [entry, setEntry] = useState<ResumeEntry | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
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
            {entry?.section === 'Experience' && (
            <>
                <input {...register('title')} placeholder="Job Title" className="input" />
                <input {...register('subtitle')} placeholder="Company" className="input" />
                <ResponsibilitiesInput
                    value={watch('description') || ''}
                    onChange={(val) => setValue('description', val)}
                />
                <input {...register('startDate')} placeholder="Start Date" className="input" />
                <input {...register('endDate')} placeholder="End Date" className="input" />
            </>
            )}

            {entry?.section === 'Education' && (
            <>
                <input {...register('title')} placeholder="Degree" className="input" />
                <input {...register('subtitle')} placeholder="Institution" className="input" />
                <input {...register('startDate')} placeholder="Start Year" className="input" />
                <input {...register('endDate')} placeholder="End Year" className="input" />
            </>
            )}

            {entry?.section === 'Skills' && (
            <>
                <input {...register('title')} placeholder="Skill Category" className="input" />
                <input {...register('tags')} placeholder="Skills (comma-separated)" className="input" />
            </>
            )}

            {entry?.section === 'Projects' && (
            <>
                <input {...register('title')} placeholder="Project Name" className="input" />
                <textarea {...register('description')} placeholder="Project Description" className="textarea" />
                <input {...register('tags')} placeholder="Technologies (comma-separated)" className="input" />
            </>
            )}

            <button type="submit" disabled={loading} className="btn">
                {loading ? 'Saving...' : 'Save Changes'}
            </button>

            {error && <p className="error">Error: {error.message}</p>}
        </form>
    )
}