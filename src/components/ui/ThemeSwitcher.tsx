import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('brownstone');

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
        <select style={{ position: "absolute", right: "2rem", padding: "0.25rem"}} value={theme} onChange={handleChange}>
            <option value="light">☀️Light</option>
            <option value="dark">🌑Dark</option>
            <option value="hazard">⚠️Hazard</option>
            <option value="brownstone">🟤Brownstone</option>
            <option value="midnight">🌌Midnight Blue</option>
            <option value="slate">🪨Slate</option>
            <option value="purple">🔮Purple Ember</option>
            <option value="pink">🌸Pink Bloom</option>
            <option value="green">🌿Verdant Green</option>
            <option value="red">🔴Crimson Core</option>
        </select>
    );
};

export default ThemeSwitcher;