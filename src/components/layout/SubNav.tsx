// import React, { useState, useEffect } from 'react';
// import { useTheme } from '@/context/ThemeContext';
import ThemeSwitcher from '../ui/ThemeSwitcher'
import Breadcrumbs from '../ui/Breadcrumbs'
import styles from './SubNav.module.scss'

export default function SubNav() {
    return (
        <div className={styles.container}>
            <Breadcrumbs />
            <div className={styles.print}>
                <button className="print-button" onClick={() => window.print()}>Print Page</button>
            </div>
            <ThemeSwitcher />
        </div>
    )
}
