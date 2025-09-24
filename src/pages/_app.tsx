import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import client from '@/lib/apolloClient';
import type { Page } from '../types/page';
import PageTransition from '@/components/PageTransition';
import '../styles/main.scss';

type AppPropsWithLayout = AppProps & {
    Component: Page;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <PageTransition>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </PageTransition>
    )
}

export default App;