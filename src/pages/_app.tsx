'use client'

import { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client/react'
import { ThemeProvider } from '@/context/ThemeContext'
import client from '@/lib/apolloClient'
import type { Page } from '../types/page'
import PageTransition from '@/components/ui/PageTransition'
import { Toaster } from 'react-hot-toast'
import '@/styles/bundle.scss'
import Layout from '@/components/layout/Layout'

type AppPropsWithLayout = AppProps & {
    Component: Page;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    useEffect(() => {
        const setHeight = () => {
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
        }
        setHeight()
        window.addEventListener('resize', setHeight)
        return () => window.removeEventListener('resize', setHeight)
    }, [])

    const [isHydrated, setIsHydrated] = useState(false)

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    // const getLayout = Component.getLayout ?? ((page) => page);

    return (
        // getLayout(
        <ThemeProvider>
            <ApolloProvider client={client}>
                {isHydrated ? (
                    <PageTransition>
                        <Layout>
                            <Toaster
                                position='top-right'
                                toastOptions={{
                                    style: {
                                        background: 'var{--surface)',
                                        color: 'var(--text)',
                                        border: 'solid 1px var{--border)'
                                    }
                                }}
                            />
                            <Component {...pageProps} />
                        </Layout>
                    </PageTransition>
                ) : null}
            </ApolloProvider>
        </ThemeProvider>
    )
    // );
}

export default App
