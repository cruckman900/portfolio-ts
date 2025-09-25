// pages/admin/edit/[id].tsx
import { useRouter } from 'next/router';
import AdminDashboard from '@/components/admin/AdminDashboard';
import EditResumeForm from '@/components/admin/forms/EditResumeForm';

export default function EditEntryPage() {
    const router = useRouter();
    const { id } = router.query;

    if (!id || typeof id !== 'string') return <p>Loading...</p>;

    return (
        <AdminDashboard>
            <EditResumeForm entryId={id} />
        </AdminDashboard>
    );
}
