import Head from 'next/head';
import TwoPanelLayout from '@/components/layout/TwoPanelLayout';
import Layout from "@/components/layout/Layout";
import ResumeHeader from '@/components/Page/Resume/ResumeHeader';
import Section from '@/components/ui/Section';
import Achievements from '@/components/Page/Resume/Achievements';
import Experience from '@/components/Page/Resume/Experience';
import ProjectList from '@/components/Page/Resume/ProjectList';
import resumeData from '@/data/resume.json';
export default function ResumePage() {
    const leftPanel = (
        <ResumeHeader name={resumeData.name} tagline={resumeData.tagline} contact={resumeData.contact} />
        // <Sidebar
        //     skills={resumeData.skills}
        //     education={resumeData.education}
        // >
        // </Sidebar>
    );

    const rightPanel = (
        <main>
            <Section title="Professional Summary" icon="fas fa-user">
                <p>{resumeData.summary}</p>
            </Section>
            <Section title="Selected Achievements" icon="fas fa-star">
                <Achievements achievements={resumeData.achievements} />
            </Section>
            <Section title="Professional Experience" icon="fas fa-briefcase">
                <Experience experience={resumeData.experience} />
            </Section>
            <Section title="Personal Projects" icon="fas fa-code">
                <ProjectList projectsList={resumeData.projects} />
            </Section>
        </main>
    );

    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <TwoPanelLayout left={leftPanel} right={rightPanel} />
        </>
    )
}

// Define a custom layout for this page
ResumePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
};
