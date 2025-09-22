import { useEffect, useState } from 'react';
import type { Resume } from '../types/resume';
import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
// import Section from '../components/Section';
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
        <Header icon={resume.icon} name={resume.name} tagline={resume.tagline} contact={resume.contact} />
    )
}