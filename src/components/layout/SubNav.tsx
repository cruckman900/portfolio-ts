import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import styles from "./SubNav.module.scss";

export default function SubNav() {
    return (
        <div className={styles.container}>
            <Breadcrumbs />
            <ThemeSwitcher />
        </div>
    );
};
