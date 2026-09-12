// import { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout"
import styles from "./index.module.scss"
import { motion } from 'framer-motion'

const modules = [
    {
        icon: '📚',
        title: 'Books',
        href: '/books',
        body: (
            <>
                Raw, unflinching memoirs and poetic manifestos. My writing explores schizophrenia, addiction, and resilience—turning personal wreckage into public signal. <span className={styles.tagline}>Failure at Fifty</span> is just the beginning.
            </>
        ),
    },
    {
        icon: '🎸',
        title: 'Guitar Music',
        body: (
            <>
                Original compositions and ambient guitar sketches built around tone, texture, and restraint. Audio samples, tablature, and live recordings coming soon.
            </>
        ),
    },
    {
        icon: '🎨',
        title: 'Artwork',
        body: (
            <>
                Digital artwork, cover designs, and system‑driven visuals. I work in Blender and Photoshop to produce precise, expressive graphics that complement my software and writing projects.
            </>
        ),
    },
    {
        icon: '💻',
        title: 'Code & Platforms',
        href: '/project',
        body: (
            <>
                Full-stack engineering meets poetic architecture. I build modular, scalable systems with React, Next.js, Node, .NET, and Native Mobile apps—designed to feel alive, responsive, and expressive.
            </>
        ),
    },
]

export default function Index() {
    return (
        <div className={`${styles.index} page-container`}>
            <motion.section
                className={styles.homepageIntro}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <p className={styles.blurb}>
                    From the edge of Rayland, Ohio, I build systems that scale, communicate, and endure. My work spans enterprise software, published books, mobile architecture, and digital platforms designed to empower contributors and clarify complexity. Whether I’m writing code, composing music, or designing interfaces, I treat every layer as an opportunity to teach, connect, and build something that lasts.
                </p>
            </motion.section>

            <section className={styles.homepageModules}>
                {modules.map((mod, i) => {
                    const card = (
                        <motion.div
                            className={styles.module}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
                            whileHover={{ y: -6 }}
                        >
                            <span className={styles.moduleIcon}>{mod.icon}</span>
                            <h2>{mod.title}</h2>
                            <p>{mod.body}</p>
                        </motion.div>
                    )

                    return mod.href ? (
                        <a href={mod.href} className={styles.cardLink} key={mod.title}>
                            {card}
                        </a>
                    ) : (
                        <div key={mod.title}>{card}</div>
                    )
                })}
            </section>
        </div>
    )
}

// Define a custom layout for this page
Index.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
}
