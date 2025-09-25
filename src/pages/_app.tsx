import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import client from '@/lib/apolloClient';
import type { Page } from '../types/page';
import PageTransition from '@/components/PageTransition';
import Layout from '@/components/Layout';
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

    return (
        getLayout(
            <ApolloProvider client={client}>
                <Layout>
                    <PageTransition>
                        <Component {...pageProps} />
                    </PageTransition>
                </Layout>
            </ApolloProvider>
        )
    );
}

export default App;