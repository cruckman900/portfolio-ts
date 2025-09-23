import Layout from "@/components/Layout";
import Link from "next/link";

export default function Projects() {
    return (
        <>
        <nav>
            <Link href="/">Back to Resume</Link>
        </nav>
        <div>Hello world!</div>
        </>
    );
}

// Define a custom layout for this page
Projects.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
};