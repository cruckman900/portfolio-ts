import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');

    // Load theme from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved) {
            setTheme(saved);
            document.documentElement.setAttribute('data-theme', saved);
        }
    }, []);

    // Update theme and persist
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        setTheme(selected);
        document.documentElement.setAttribute('data-theme', selected);
        localStorage.setItem('theme', selected);
    };

    return (
        <select className='switcher' value={theme} onChange={handleChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="hazard">Hazard</option>
        </select>
    );
};

export default ThemeSwitcher;