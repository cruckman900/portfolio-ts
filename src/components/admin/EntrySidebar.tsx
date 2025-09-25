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
        // <aside className="w-64 bg-black text-yellow-400 p-4 border-r border-yellow-600">
        <aside className="entry-sidebar">
            <select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="select"
            >
                <option value="Experience">Experience</option>
                <option value="Skills">Skills</option>
                <option value="Projects">Projects</option>
            </select>

            {/* Header Section */}
            <div className='header'>System Status</div>

            <div className="content">
                {/* Navigation Section */}
                <nav className='nav'>
                    <a href="#overview">Overview</a>
                    <a href="#logs">Logs</a>
                    <a href="#alerts">Alerts</a>
                    <a href="#settings">Settings</a>
                </nav>

                {loading && <p>Loading...</p>}
                {error && <p>Error loading entries</p>}

                {Array.isArray(data?.resume) &&
                    <ul className="list">
                        {data?.resume.map((entry) => (
                            <li key={entry.id} className="item">
                                <div className="item-title">{entry.title}</div>
                                <div className="item-subtitle">{entry.subtitle}</div>
                                <Link href={`/admin/edit/${entry.id}`}>
                                    <button className="edit-button">
                                        Edit
                                    </button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </aside>
    );
}
