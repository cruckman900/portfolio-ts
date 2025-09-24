import React from 'react';
import { NavBarLink } from '@/types/resume';
import Link from 'next/link';
import "../styles/navbar.scss";

interface Props {
    className: string;
    navbarlinks: NavBarLink[];
}

const Navbar: React.FC<Props> = ({ className, navbarlinks }) => (
    <nav className={className}>
        <div className="brand">
            <i className="fas fa-dragon"></i>
            <span>Christopher Ruckman</span>
        </div>
        {navbarlinks.map((nav, i) => (
            <div className="link" key={i}>
                <Link className='link-text' href={nav.url}>{nav.label}</Link>
            </div>
        )
    )}
    </nav>
);

export default Navbar;