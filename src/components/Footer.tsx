import React from 'react';
import "../styles/footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <p>&copy;{new Date().getFullYear()} Christopher Ruckman</p>
            <div className="social-links">
                <a href="https://github.com/cruckman">GitHub</a>
                &nbsp; | &nbsp;
                <a href="/contact">Contact</a>
            </div>
       </footer>
    )
};

export default Footer;