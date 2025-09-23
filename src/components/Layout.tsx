import React, { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
        <Head>
            <title>Christopher Ruckman - Resume</title>
            <meta name="description" content="Multidisciplinary engineer, author, and legal advocate" />
            <meta property="og:title" content="Christopher Ruckman - Resume" />
            <meta property="og:type" content="WebPage" />
            <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
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

        <div>
            <main>{children}</main>
        </div>
        </>
    )
}

export default Layout;