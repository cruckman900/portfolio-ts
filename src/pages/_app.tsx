import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import client from '@/lib/apolloClient';
import type { Page } from '../types/page';
import PageTransition from '@/components/PageTransition';
import '../styles/main.scss';
import '../styles/globals.scss';

type AppPropsWithLayout = AppProps & {
    Component: Page;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const getLayout = Component.getLayout ?? ((page) => page);

    return isHydrated ? (
        getLayout(
            <PageTransition>
                <ApolloProvider client={client}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </PageTransition>
        )
    ) : null;
}

export default App;