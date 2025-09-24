import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import "../styles/layout.scss";

type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    const links = [
        {url: "/", label: "home"},
        {url: "/resume", label: "resume"},
        {url: "/projects", label: "projects"}
    ];

    return (
        <>
        <Head>
            <title>Christopher Ruckman - Resume</title>
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