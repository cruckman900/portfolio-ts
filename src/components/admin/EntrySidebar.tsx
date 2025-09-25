import { useQuery } from '@apollo/client/react';
import { GET_ENTRIES_BY_SECTION } from '@/graphql/queries';
import Link from 'next/link';
import { useState } from 'react';
import '../../styles/components/EntrySidebar.scss';

interface ResumeEntry {
    id: string;
    title: string;
    subtitle?: string;
    order?: number;
}

interface ResumeQueryResult {
    resume: ResumeEntry[];
}

export default function EntrySidebar() {
    const [section, setSection] = useState('Experience');
    const { data, loading, error } = useQuery<ResumeQueryResult>(GET_ENTRIES_BY_SECTION, {
        variables: { section },
    });

    return (
        <aside className="w-64 bg-black text-yellow-400 p-4 border-r border-yellow-600">
            <select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="bg-yellow-900 text-white p-2 wb-4 w-full"
            >
                <option value="Experience">Experience</option>
                <option value="Education">Education</option>
                <option value="Skills">Skills</option>
                <option value="Projects">Projects</option>
            </select>

            {loading && <p>Loading...</p>}
            {error && <p>Error loading entries</p>}

            <ul className="space-y-2">
                {data?.resume.map((entry) => (
                    <li key={entry.id} className="border-1-4 border-yellow-500 pl-2 hover:bg-yellow-800">
                        <div className="font-bold">{entry.title}</div>
                        <div className="text-sm italic">{entry.subtitle}</div>
                        <Link href={`/admin/edit/${entry.id}`}>
                            <button className="mt-1 text-xs bg-yellow-600 text-black px-2 py-1 hover:bg-yellow-400">
                                Edit
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
