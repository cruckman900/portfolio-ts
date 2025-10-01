// components//Card.tsx
import React from 'react'
import styles from './Card.module.scss'

interface CardProps {
    className?: string
    children: React.ReactNode
    onClick?: () => void
    isSelected?: boolean
}

export default function Card({ className, children, onClick, isSelected }: CardProps) {
    return (
        <div
            className={`${className} ${styles.card} ${isSelected ? styles.selected : ''}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
