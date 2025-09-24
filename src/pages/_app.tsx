import { AppProps } from 'next/app';
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
            <Component {...pageProps} />
        </PageTransition>
    )
}

export default App;