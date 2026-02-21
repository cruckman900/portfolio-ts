import React, { useState } from 'react'
import SubNav from './SubNav'
import Hamburger from '../ui/Hamburger'
import NavLinks from '@/components/ui/NavLinks'

export default function Navbar({ className }: { className?: string }) {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(prev => !prev)

    return (
        <>
            {/* DESKTOP NAV */}
            <nav className={`desktop-nav ${className ?? ''}`}>
                <div className="brand">
                    <i className="fas fa-biohazard"></i>
                    <span>LinearDescent</span>
                </div>

                <NavLinks />
            </nav>

            {/* MOBILE NAV HEADER */}
            <nav className="mobile-nav">
                <div className="brand">
                    <i className="fas fa-biohazard"></i>
                    <span>LinearDescent</span>
                </div>

                <div className="hamburger" onClick={toggle}>
                    <Hamburger isOpen={open} onClick={toggle} />
                </div>
            </nav>

            {/* MOBILE DRAWER */}
            {open && (
                <div className="mobile-menu">
                    <NavLinks onClick={toggle} />
                </div>
            )}

            <SubNav />
        </>
    )
}
