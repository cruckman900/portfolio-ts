import React, { ReactNode, useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './Layout.module.scss'
import "@/styles/layout/layout.scss"

type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    const { theme } = useTheme()
    const [heroText, setHeroText] = useState('')

    const [isHydrated, setIsHydrated] = useState(false)

    function getHeroText(theme: string): string {
        switch (theme) {
            case 'light':
                return 'Life is a melody. Alone, you are a single chord. Surrounded by others, you become orchestrated.'
            case 'dark':
                return 'Only when faced with shadow, do you find light.'
            case 'hazard':
                return 'Tread with caution, this life you live. It holds grudges.'
            case 'brownstone':
                return 'Let the thoughts that betray you feel the sting of swift justice.'
            case 'midnight':
                return 'Even in silence, whispers are screams.'
            case 'red':
                return 'Dare not to dare. Life is fast, it\'s unforgiving, and it\'s over as fast as it began.'
            case 'slate':
                return 'Built with a spine as unforgiving as granite, all movement, should be a movement forward.'
            case 'purple':
                return 'Embers glow with memory and fire.'
            case 'pink':
                return 'Softness is strength. Kindness is rebellion.'
            case 'green':
                return 'When even your own thoughts seem alien, understand that all truth comes with question.'
            default:
                return 'Transform adversity into code, verse, and advocacy.'
        }
    }

    useEffect(() => {
        const txt = getHeroText(theme)
        setHeroText(txt)
    }, [theme])

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    if (!isHydrated) {
        return null // Or a branded loading screen *****
    }

    return (
        <>
            <Head>
                <title>LinearDescent | Poetic Survival Through Code, Art & Memoir</title>
            </Head>
            <div className='container'>
                <header className='header'><Navbar className="navbar" /></header>
                <section data-theme={theme} className={styles.content}>
                    <div className={styles.heroImage}>
                        <div className={styles.leftSpacer}></div>
                        <div className={styles.heroText}>
                            <span>{heroText}</span>
                        </div>
                    </div>
                    <main className='content'>{children}</main>
                </section>
                <div className='footer'><Footer /></div>
            </div>
        </>
    )
}

export default Layout
