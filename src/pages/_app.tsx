import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import client from '@/lib/apolloClient';
import type { Page } from '../types/page';
import PageTransition from '@/components/ui/PageTransition/PageTransition';
import { Toaster } from 'react-hot-toast';
import '@/styles/bundle.scss';

type AppPropsWithLayout = AppProps & {
    Component: Page;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        getLayout(
            <ApolloProvider client={client}>
                {isHydrated ? (
                    <PageTransition>
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
                    </PageTransition>
                ) : null}
            </ApolloProvider>
        )
    );
}

export default App;