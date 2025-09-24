import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './PageTransition.module.scss';

interface Props {
    children: React.ReactNode;
}

const PageTransition: React.FC<Props> = ({ children }) => {
    const router = useRouter();
    const [displayChildren, setDisplayChildren] = useState(children);
    const [TransitionStage, setTransitionStage] = useState('fadeIn');
    const [currentPath, setCurrentPath] = useState(router.pathname);

  useEffect(() => {
    if (router.pathname !== currentPath) {
      setTransitionStage('fadeOut');

      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setCurrentPath(router.pathname);
        setTransitionStage('fadeIn');
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [router.pathname]);


    return (
        <div className={`${styles.wrapper} ${styles[TransitionStage]}`}>
            {displayChildren}
        </div>
    );
};

export default PageTransition;