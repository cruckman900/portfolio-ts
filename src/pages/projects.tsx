import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import "../styles/projects.scss";

export default function Projects() {
    return (
        <div className="projects">Hello world!</div>
    );
}

// Define a custom layout for this page
Projects.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout >{page}</Layout>
};