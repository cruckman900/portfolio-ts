import Layout from "@/components/Layout";
import Link from "next/link";
import "../styles/index.scss";

export default function Projects() {
    return (
        <div className="index">
            <section>
                <h1>Failure at Fifty</h1>
                <p className="subtext">A legacy forged from warning, resilience, and code.</p>
                <Link href="/resume" className="cta-button">View Resume</Link>
                &nbsp; | &nbsp; 
                <Link href="/books" className="cta-button alt">Explore Books</Link>
            </section>
            <section className="about">
                <h2>Who I Am</h2>
                <p>
                    I&apos;m a full-stack engineer, legal researcher, and published author. I build modular systems that warn, uplift, and endure. Whether it&apos;s React components, courtroom documentation, or poetic series, every artifact I create is designed to survive scrutiny and inspire transformation.
                </p>
            </section>
            <section className="skills">
                <h2>Multidisciplinary Stack</h2>
                <div className="grid">
                    <div className="skill-card">React / Next.js</div>
                    <div className="skill-card">ASP.NET Core</div>
                    <div className="skill-card">Legal Advocacy</div>
                    <div className="skill-card">Poetic Publishing</div>
                    <div className="skill-card">Blender / Photoshop</div>
                    <div className="skill-card">SQL / Web API</div>
                </div>
            </section>
            <section className="featured">
            <h2>Featured Projects</h2>
            <div className="project-list">
                <div className="project-card">
                <h3>Failure at Fifty</h3>
                <p>A poetic warning system disguised as a book.</p>
                <Link href="/books/failure-at-fifty">Read More →</Link>
                </div>
                <div className="project-card">
                <h3>Legal Advocacy Platform</h3>
                <p>Exposing fraudulent lawsuits through documentation and alerts.</p>
                <Link href="/advocacy">Explore →</Link>
                </div>
                <div className="project-card">
                <h3>Modular Resume Site</h3>
                <p>Built with Next.js, TypeScript, and SASS. Fully responsive.</p>
                <Link href="/resume">View →</Link>
                </div>
            </div>
            </section>
        </div>
    );
}

// Define a custom layout for this page
Projects.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
};