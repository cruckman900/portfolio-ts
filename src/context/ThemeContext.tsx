// context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react'

interface ThemeContextType {
    theme: string;
    setTheme: (val: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setThemeState] = useState('light')

    const updateTheme = (val: string) => {
        // console.log('ThemeContext.tsx -- Setting theme to: before setting state', val);
        setThemeState(val)
        localStorage.setItem('theme', val)
        document.documentElement.setAttribute('data-theme', val)
        window.dispatchEvent(new Event('themeChange'))
        // console.log('ThemeContext.tsx -- after etting attribute data-theme to: before setting state', val);
    }

    useEffect(() => {
        const stored = localStorage.getItem('theme')
        if (stored) {
            // console.log('ThemeContext.tsx -- useEffect getItem from localStorage', stored)
            updateTheme(stored)
        }
    }, [])

    // useEffect(() => {
    //     console.log('ThemeContext.tsx -- theme state changed to', theme);
    // })

    return (
        <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
