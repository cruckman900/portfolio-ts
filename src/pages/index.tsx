import { useEffect, useState } from 'react';
import type { Resume } from '../types/resume';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Section from '../components/Section';
import Achievements from '@/components/Achievements';
// import Experience from '../components/Experience';
// import Projects from '../components/Projects';
import '../styles/main.scss';

export default function Home() {
    const [resume, setResume] = useState<Resume | null>(null);

    useEffect(() => {
        fetch('/resume.json')
            .then(res => res.json())
            .then(data => setResume(data));
    }, []);

    if (!resume) return <div>Loading...</div>;

    return (
        <div className='container'>
            <div className="sidebar-container">
                <aside>
                    <Header icon={resume.icon} name={resume.name} tagline={resume.tagline} contact={resume.contact} />
                    <Sidebar skills={resume.skills} education={resume.education} />
                </aside>
            </div>
            <div className="content-container">
                <main>
                    <Section class_from_parent="" title="Professional Summary" icon="fas fa-user">
                        <p>{resume.summary}</p>
                    </Section>
                    <Section class_from_parent="" title="Selected Achievements" icon="fas fa-star">
                        <Achievements achievements={resume.achievements} />
                    </Section>
                </main>
            </div>
        </div>
    )
}