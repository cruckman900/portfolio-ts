import Layout from "@/components/layout/Layout";
import "@/styles/page/index.scss";

export default function Index() {
    return (
        <div className="index">
            <section className="homepage-intro">
            <h1 className="glitch-title">LinearDescent</h1>
            <p className="bio-blurb">
                From the edge of Rayland, Ohio, I build warning systems in human form—writing, coding, composing, and designing to keep others from falling. My work spans biohazard-themed books, glitch-infused web platforms, guitar compositions, and digital artwork that pulses with survival and signal.
            </p>
            </section>

            <section className="homepage-modules">
            <div className="module books">
                <h2>📚 Books</h2>
                <p>
                Raw, unflinching memoirs and poetic manifestos. My writing explores schizophrenia, addiction, and resilience—turning personal wreckage into public signal. <span className="tagline">Failure at Fifty</span> is just the beginning.
                </p>
            </div>

            <div className="module music">
                <h2>🎸 Guitar Music</h2>
                <p>
                Original compositions and ambient sketches. My guitar work blends distortion, melancholy, and clarity—like a siren in fog. Coming soon: audio samples, tablature, and live recordings.
                </p>
            </div>

            <div className="module artwork">
                <h2>🎨 Artwork</h2>
                <p>
                Digital pieces, cover designs, and hazard-coded visuals. I use Blender, Photoshop, and glitch overlays to create expressive warnings and thematic illustrations.
                </p>
            </div>

            <div className="module code">
                <h2>💻 Code & Platforms</h2>
                <p>
                Full-stack engineering meets poetic architecture. I build modular, scalable systems with React, Next.js, Node, and .NET—designed to feel alive, responsive, and expressive.
                </p>
            </div>
            </section>
        </div>
    );
}

// Define a custom layout for this page
Index.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
};