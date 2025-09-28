import React, { ReactNode, useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import "@/styles/layout/layout.scss";

type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return null; // Or a branded loading screen *****
    }

    return (
        <>
            <Head>
                <title>LinearDescent | Poetic Survival Through Code, Art & Memoir</title>
                <meta key="layout description" name="description" content="Poetic survival platform from Rayland, Ohio—memoirs, glitch art, ambient guitar, and expressive full-stack engineering." />
                <link rel="canonical" href="https://lineardescent.netlify.app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Favicon */}
                <link rel="icon" type="image/png" href="/favicon.png" />

                {/* Open Graph */}
                <meta property="og:title" content="LinearDescent | Poetic Survival Through Code, Art & Memoir" />
                <meta property="og:description" content="Memoirs, glitch art, ambient guitar, and expressive full-stack engineering from Rayland, Ohio." />
                <meta property="og:url" content="https://lineardescent.netlify.app" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://lineardescent.netlify.app/og-image.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinearDescent | Poetic Survival Through Code, Art & Memoir" />
                <meta name="twitter:description" content="Memoirs, glitch art, ambient guitar, and expressive full-stack engineering from Rayland, Ohio." />
                <meta name="twitter:image" content="https://lineardescent.netlify.app/og-image.png" />
            </Head>
            <div className='container'>
                <header className='header'><Navbar className="navbar" /></header>
                <main className='content'>{children}</main>
                <footer className='footer'><Footer /></footer>
            </div>
        </>
    )
}

export default Layout;