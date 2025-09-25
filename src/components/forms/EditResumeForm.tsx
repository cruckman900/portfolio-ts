import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client/react';
import { UPDATE_ENTRY } from '@/graphql/mutations';
import { ResumeEntry, ResumeEntryInput } from '@/types/graphql';

interface EditResumeFormProps {
    entry: ResumeEntry;
}

export default function EditResumeForm({ entry }: EditResumeFormProps) {
    const { register, handleSubmit } = useForm<ResumeEntryInput>({ defaultValues: entry });
    const [updateEntry, { loading, error }] = useMutation(UPDATE_ENTRY);

    const onSubmit = async (data: ResumeEntryInput) => {
        const transformed = {
            ...data,
            tags: data.tags?.map(tag => tag.trim()).filter(Boolean),
        };
        await updateEntry({ variables: { id: entry.id, input: transformed } });
        alert('updated!');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

            {error && <p className="text-red-500">Error: {error.message}</p>}
        </form>
    )
}