import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className="main">
                <div className="social-links">
                    <Link href="https://github.com/cruckman">GitHub</Link>
                    &nbsp; | &nbsp;
                    <Link href="/contact">Contact</Link>
                </div>
                <p>&copy; {new Date().getFullYear()} LinearDescent&mdash;What Rights?</p>
            </div>
        </footer>
    )
}

export default Footer
