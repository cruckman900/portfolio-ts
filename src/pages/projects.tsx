import Layout from "@/components/Layout";
import "../styles/projects.scss";

export default function Projects() {
    return (
        <>
        <div className="projects">Hello world!</div>
        <div><a href="www.google.com">Google</a></div>
        </>
    );
}

// Define a custom layout for this page
Projects.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout >{page}</Layout>
};