import React, { useState } from 'react';
import SubNav from './SubNav';
import Hamburger from '../ui/Hamburger';
import NavLinks from '@/components/ui/NavLinks';

export default function Navbar({ className }: { className?: string }) {
    const [toggleHamburger, setToggleHamburger] = useState(false);
    const handleToggle = () => setToggleHamburger(prev => !prev);

    return (
        <>
            <nav className={className}>
                <div className="brand">
                    <i className="fas fa-biohazard"></i>
                    <span>LinearDescent</span>
                </div>

                <div className="hamburger" onClick={handleToggle}>
                    <Hamburger isOpen={toggleHamburger} onClick={handleToggle} />
                </div>

                <NavLinks />
            </nav>

            <SubNav />

            {toggleHamburger && (
                <div className="mobile-menu">
                    <NavLinks onClick={handleToggle} />
                </div>
            )}
        </>
    );
}
