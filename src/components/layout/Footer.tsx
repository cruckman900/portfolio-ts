import React from 'react';
import Link from 'next/link';
import "@/styles/layout/footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className="main">
                <div className="social-links">
                    <Link href="https://github.com/cruckman">GitHub</Link>
                    &nbsp; | &nbsp;
                    <Link href="/contact">Contact</Link>
                </div>
                <p>&copy;{new Date().getFullYear()} Christopher Ruckman</p>
            </div>
       </footer>
    )
};

export default Footer;