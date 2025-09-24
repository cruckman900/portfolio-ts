import React from 'react';
import "../styles/footer.scss";

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <span>&copy;{new Date().getFullYear()} Christopher Ruckman</span>
        </div>
    )
};

export default Footer;