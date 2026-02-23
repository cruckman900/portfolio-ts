// import { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout"
import styles from "./index.module.scss"

export default function Index() {
    return (
        <div className={styles.index}>
            <section className={styles.homepageIntro}>
                <p className={styles.blurb}>
                    From the edge of Rayland, Ohio, I build systems that scale, communicate, and endure. My work spans enterprise software, published books, mobile architecture, and digital platforms designed to empower contributors and clarify complexity. Whether I’m writing code, composing music, or designing interfaces, I treat every layer as an opportunity to teach, connect, and build something that lasts.
                </p>
            </section>

            <section className={styles.homepageModules}>
                {/* <a href="/books" className={styles.cardLink}> */}
                <div className={styles.module}>
                    <h2>📚 Books</h2>
                    <p>
                        Raw, unflinching memoirs and poetic manifestos. My writing explores schizophrenia, addiction, and resilience—turning personal wreckage into public signal. <span className="tagline">Failure at Fifty</span> is just the beginning.
                    </p>
                </div>
                {/* </a> */}

                <div className={styles.module}>
                    <h2>🎸 Guitar Music</h2>
                    <p>
                        Original compositions and ambient guitar sketches built around tone, texture, and restraint. Audio samples, tablature, and live recordings coming soon.
                    </p>
                </div>

                <div className={styles.module}>
                    <h2>🎨 Artwork</h2>
                    <p>
                        Digital artwork, cover designs, and system‑driven visuals. I work in Blender and Photoshop to produce precise, expressive graphics that complement my software and writing projects.
                    </p>
                </div>

                <a href="/project" className={styles.cardLink}>
                    <div className={styles.module}>
                        <h2>💻 Code & Platforms</h2>
                        <p>
                            Full-stack engineering meets poetic architecture. I build modular, scalable systems with React, Next.js, Node, .NET, and Native Mobile apps—designed to feel alive, responsive, and expressive.
                        </p>
                    </div>
                </a>
            </section>
        </div>
    )
}

// Define a custom layout for this page
Index.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
}
