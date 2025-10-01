// components/TwoPanelLayout.tsx
import React from 'react'
import styles from './TwoPanelLayout.module.scss'

interface TwoPanelLayoutProps {
    className?: string
    left: React.ReactNode
    right: React.ReactNode
}

const TwoPanelLayout: React.FC<TwoPanelLayoutProps> = ({ className, left, right }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <aside>
                {left}
            </aside>
            <main>{right}</main>
        </div>
    );
};

export default TwoPanelLayout;
