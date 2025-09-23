import { useEffect, useState } from 'react';
import type { Resume } from '../types/resume';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// import Section from '../components/Section';
// import Experience from '../components/Experience';
// import Projects from '../components/Projects';
import Head from 'next/head';
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
        <>
        <Head>
            <title>{resume.name} - Resume</title>
            <meta name="description" content={resume.tagline} />
            <meta property="og:title" content={`${resume.name} - Resume`} />
            <meta property="og:type" content="WebPage" />
            <link
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
                crossOrigin='anonymous'
                referrerPolicy='no-referrer'
            />
            <script
                type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Christopher Ruckman Resume",
                            "description": "Multidisciplinary engineer, author, and legal advocate"
                        })
                    }}
            />
        </Head> 

        <div className='container'>
            <div className="sidebar-container">
                <Header icon={resume.icon} name={resume.name} tagline={resume.tagline} contact={resume.contact} />
                <Sidebar skills={resume.skills} education={resume.education} />
            </div>
            <div className="content-container">LA LA LA</div>
        </div>
        </>
    )
}