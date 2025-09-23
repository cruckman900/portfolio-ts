import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    )
}

export default Layout;