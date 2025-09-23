import { AppProps } from 'next/app';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
    // Check if the page has a custom layout
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getLayout = (Component as any).getLayout || ((page: React.ReactNode) => <Layout>{page}</Layout>)

    return getLayout(<Component {...pageProps} />);
}

export default MyApp;