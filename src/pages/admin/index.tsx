import EntrySidebar from "@/components/admin/EntrySidebar";
import '../../styles/components/AdminDashboard.scss';

export default function AdminDashboard() {
    return (
        <div className="flex min-h-screen">
            <EntrySidebar />
            <main className="flex-1 p-8">
                <h1 className="text-2xl font-bold mb-4">Select an entry to edit</h1>
                {/* Optional: preview or welcome message */}
            </main>
        </div>
    )
}