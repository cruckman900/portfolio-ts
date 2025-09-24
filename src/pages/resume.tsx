import { useEffect, useState } from 'react';
import Head from 'next/head';
import type { Resume } from '../types/resume';
import ResumeHeader from '../components/ResumeHeader';
import Sidebar from '../components/Sidebar';
import Section from '../components/Section';
import Achievements from '@/components/Achievements';
import Experience from '../components/Experience';
// import Projects from '../components/Projects';
import Layout from '@/components/Layout';
import ProjectList from '@/components/ProjectList';
import '../styles/resume.scss';

export default function Home() {
    const [resume, setResume] = useState<Resume | null>(null);

    useEffect(() => {
        fetch('/resume.json')
            .then(res => res.json())
            .then(data => setResume(data));
    }, []);

    if (!resume) return <div>Loading...</div>;

    return (
        <>
        <Head>
            <meta name="robots" content="noindex" />
        </Head>
        <div className='flex-container'>
            <div className="sidebar-container">
                <aside>
                    <Sidebar skills={resume.skills} education={resume.education}>
                        <ResumeHeader icon={resume.icon} name={resume.name} tagline={resume.tagline} contact={resume.contact} />
                    </Sidebar>
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
                    <Section class_from_parent="pb-before" title="Professional Experience" icon="fas fa-briefcase">
                        <Experience experience={resume.experience} />
                    </Section>
                    <Section class_from_parent="" title="Personal Projects" icon="fas fa-code">
                        <ProjectList projectsList={resume.projects} />
                    </Section>
                </main>
            </div>
        </div>
        </>
    )
};

// Define a custom layout for this page
Home.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
};