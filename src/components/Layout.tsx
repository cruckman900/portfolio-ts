import React, { ReactNode, useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import "../styles/layout.scss";

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

    const links = [
        {url: "/", label: "home", icon: "fas fa-house"},
        {url: "/resume", label: "resume", icon: "fas fa-file"},
        {url: "/projects", label: "projects", icon: "fas fa-code"}
    ];

    return (
        <>
        <Head>
            <title>LinearDescent</title>
        </Head>

        <div className='container'>
            <header className='header'><Navbar className="navbar" navbarlinks={links} /></header>
            <main className='content'>{children}</main>
            <footer className='footer'><Footer /></footer>
        </div>
        </>
    )
}

export default Layout;