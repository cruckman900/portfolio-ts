// ThemeSwitcher.tsx
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { themeOptions } from '@/data/themeOptions';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ThemeSwitcher.module.scss';

export default function ThemeSwitcher() {
    const { theme, setTheme} = useTheme();
    const [open, setOpen] = useState(false);
    const current = themeOptions.find(opt => opt.value === theme);

    return (
        <div className={styles.wrapper}>
            <button
                className={styles.trigger}
                onClick={() => {
                    setOpen(prev => !prev);
                }}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span className={styles.icon}>{current?.icon}</span>
                <span className={styles.name}>{current?.name}</span>
                <motion.span
                    className={styles.arrow}
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    ▾
                </motion.span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        className={styles.dropdown}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        role="listbox"
                    >
                        {themeOptions.map(opt => (
                            <motion.li
                                key={opt.value}
                                className={styles.item}
                                onClick={() => {
                                    setTheme(opt.value);
                                    console.log('opt.value', opt.value);
                                    setOpen(false);
                                }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className={styles.icon}>{opt.icon}</span>
                                <span className={styles.name}>{opt.name}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
