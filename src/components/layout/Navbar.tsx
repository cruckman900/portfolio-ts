'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { NavBarLink } from '@/types/resume';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import "@/styles/layout/navbar.scss";

interface Props {
    className: string;
    navbarlinks: NavBarLink[];
}

const Navbar: React.FC<Props> = ({ className, navbarlinks }) => {
    const router = useRouter();

    const [toggleHamburger, setToggleHamburger] = useState(false);

    const handleToggle = () => {
        setTimeout(() => {
            setToggleHamburger(!toggleHamburger);
        }, 100);
    };
    
    return (
        <>
        <nav className={className}>
            <div className="brand">
                <i className="fas fa-dragon"></i>
                <span>LinearDescent</span>
                <span className="hamburger" onClick={handleToggle}>
                    {toggleHamburger ? <i className="fas fa-x"></i> :
                    <i className="fas fa-bars"></i>}
                </span>
            </div>
            {navbarlinks.map((nav, i) => (
                <div className="link" key={i}>
                    {router.asPath == nav.url ?
                        <span className="link-text-active">{nav.label}</span> :
                        <Link className='link-text' href={nav.url}>{nav.label}</Link>
                    }
                </div>
                )
            )}
            <ThemeSwitcher />
        </nav>
        {toggleHamburger && <div className='mobile-menu'>
            {navbarlinks.map((nav, i) => (
                <div className="link" key={i}>
                    {router.asPath == nav.url ?
                        <span className="link-text-active"><i className={nav.icon}></i>{nav.label}</span> :
                        <Link className='link-text' href={nav.url} onClick={handleToggle}><i className={nav.icon}></i>{nav.label}</Link>
                    }
                </div>
                )
            )}
        </div>}
        </>
    )
};

export default Navbar;