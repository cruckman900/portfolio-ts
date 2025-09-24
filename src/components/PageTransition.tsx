import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './PageTransition.module.scss';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
     }, [router]);

    return (
        <div className={`${styles.wrapper} ${loading ? styles.fadeOut : styles.fadeIn}`}>
            {children}
        </div>
    );
};

export default PageTransition;