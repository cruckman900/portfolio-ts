// pages/admin/projects.tsx
import Layout from '@/components/Layout';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ProjectEditor = dynamic(() => import('../../components/ProjectEditor'), {
  ssr: false,
});

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Project Editor | Admin</title>
      </Head>
      <>
        <ProjectEditor />
      </>
    </>
  );
}

// Define a custom layout for this page
ProjectsPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
};