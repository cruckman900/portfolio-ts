import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <div className={styles.socialLinks}>
                    <Link className={styles.link} href="https://github.com/cruckman"><i className="fa-brands fa-github"></i>GitHub</Link>
                    &nbsp; | &nbsp;
                    <Link className={styles.link} href="/contact"><i className="fa-solid fa-envelope"></i>Contact</Link>
                </div>
                <div className={styles.footerText}><i className="fa-solid fa-copyright"></i>{new Date().getFullYear()} LinearDescent</div>
            </div>
        </footer>
    )
}

export default Footer
