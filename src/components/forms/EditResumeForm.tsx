import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client/react';
import { UPDATE_ENTRY } from '@/graphql/mutations';
import { ResumeEntry, ResumeEntryInput } from '@/types/graphql';
import "../../styles/forms/EditResumeForm.scss";

interface EditResumeFormProps {
    entryId: string;
}

export default function EditResumeForm({ entryId }: EditResumeFormProps) {
    const [entry, setEntry] = useState<ResumeEntry | null>(null);
    const { register, handleSubmit, reset } = useForm<ResumeEntryInput>();
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
            <input {...register('title')} placeholder="Title" className="input" />
            <input {...register('subtitle')} placeholder="Subtitle" className="input" />
            <textarea {...register('description')} placeholder="Description" className="textarea" />
            <input {...register('startDate')} placeholder="Start Date" className="input" />
            <input {...register('endDate')} placeholder="End Date" className="input" />
            <input {...register('tags')} placeholder="Tags (comma-separated)" className="input" />
            <input type="number" {...register('order')} placeholder="Order" className="input" />

            <button type="submit" disabled={loading} className="btn">
                {loading ? 'Saving...' : 'Save Changes'}
            </button>

            {error && <p className="error">Error: {error.message}</p>}
        </form>
    )
}