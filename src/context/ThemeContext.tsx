// context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react'

interface ThemeContextType {
    theme: string;
    setTheme: (val: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: () => { },
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setThemeState] = useState('light')

    const updateTheme = (val: string) => {
        setThemeState(val)
        localStorage.setItem('theme', val)
        document.documentElement.setAttribute('data-theme', val)
        window.dispatchEvent(new Event('themeChange'))
    }

    useEffect(() => {
        const stored = localStorage.getItem('theme')
        if (stored) {
            updateTheme(stored)
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
