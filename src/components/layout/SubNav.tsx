import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import styles from './SubNav.module.scss';

export default function SubNav() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored) setTheme(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const handleThemeChange = (val: string) => {
        setTheme(val);
        document.documentElement.setAttribute('data-theme', val); // ✅ Apply theme
    };

    return (
        <div className={styles.container}>
            <Breadcrumbs />
            <ThemeSwitcher value={theme} onChange={handleThemeChange} />
        </div>
    );
}
