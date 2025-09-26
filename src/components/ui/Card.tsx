// components//Card.tsx
import React from 'react';
import styles from './Card.module.scss'

interface CardProps {
    children: React.ReactNode;
    onClick?: () => void;
    isSelected?: boolean;
}

export default function Card({ children, onClick, isSelected }: CardProps) {
    return (
        <div
            className={`${styles.card} ${isSelected ? styles.selected : ''}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}