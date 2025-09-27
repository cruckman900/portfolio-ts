'use client';

import { motion } from 'framer-motion';

type Props = {
    isOpen: boolean;
    onClick: () => void;
};

export default function Hamburger({ isOpen, onClick }: Props) {
    return (
        <div
            className="hamburger"
            onClick={() => onClick}
            role="button"
            aria-label="Toggle menu"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onClick();
            }}
        >
            <motion.svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--accent)">
                <motion.rect fill="var(--accent)" stroke="var(--accent)"
                    x="4"
                    y="8"
                    width="24"
                    height="2"
                    rx="1"
                    animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.rect fill="var(--accent)" stroke="var(--accent)"
                    x="4"
                    y="14"
                    width="24"
                    height="2"
                    rx="1"
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.rect fill="var(--accent)" stroke="var(--accent)"
                    x="4"
                    y="20"
                    width="24"
                    height="2"
                    rx="1"
                    animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.svg>
        </div>);
}
