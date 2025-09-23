import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
        <Head>
            <title>Christopher Ruckman - Resume</title>
        </Head>

        <div>
            <main>{children}</main>
        </div>
        </>
    )
}

export default Layout;