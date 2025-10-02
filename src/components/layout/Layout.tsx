import React, { ReactNode, useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './Layout.module.scss'
import { GoogleAnalytics } from '@next/third-parties/google'
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
                return 'Illuminate the path. Code with clarity.'
            case 'dark':
                return 'In shadows we forge resilience.'
            case 'hazard':
                return 'Warning is not weakness-it\'s wisdom wrapped in urgency.'
            case 'brownstone':
                return 'Let the thoughts that betray you feel the sting of swift justice.'
            case 'midnight':
                return 'Even in silence, the stars whisper resilience.'
            case 'red':
                return 'Warning is a gift. Speak boldly.'
            case 'slate':
                return 'Stone still speaks. Build with grit.'
            case 'purple':
                return 'Embers glow with memory and fire.'
            case 'pink':
                return 'Softness is strength. Kindness is rebellion.'
            case 'green':
                return 'Growth begins underground-quiet, patient, unstobbable.'
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
                <link rel="preload" as="image" href="/images/hero_midnight.png" />
                <link rel="preload" as="image" href="/images/hero_red.png" />
                <link rel="preload" as="image" href="/images/hero_green.png" />
                <link rel="preload" as="image" href="/images/hero_pink.png" />
                <link rel="preload" as="image" href="/images/hero_brownstone.png" />
                <link rel="preload" as="image" href="/images/hero_dark.png" />
            </Head>
            <div className='container'>
                <header className='header'><Navbar className="navbar" /></header>
                <section data-theme={theme} className={styles.content}>
                    <div className={styles.heroImage}>
                        <div className='leftSpacer'></div>
                        <div className='heroText'>
                            <p>{heroText}</p>
                        </div>
                    </div>
                    <main className='content'>{children}</main>
                </section>
                {/* <footer className='footer'><Footer /></footer> */}
                <div className='footer'><Footer /></div>
            </div>
            <GoogleAnalytics gaId="GTM-WV9C9HMF" />
        </>
    )
}

export default Layout
