// components/TwoPanelLayout.tsx
import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';

interface TwoPanelLayoutProps {
    left: React.ReactNode;
    right: React.ReactNode;
    gap?: string; // optional spacing between panels
    minWidth?: string; // optional minimum width for left panel
    width?: string; // optional maximum width for left panel
}

const TwoPanelLayout: React.FC<TwoPanelLayoutProps> = ({
    left,
    right,
    gap = '2rem',
    minWidth = '300px',
    width = '30%'
}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                height: '100vh',
                width: '100%',
                gap,
            }}
        >
            <aside style={{ minWidth, width, flexShrink: 0, height: '100%' }}>
                <Breadcrumbs />
                {left}
            </aside>
            <main style={{ flex: 1 }}>{right}</main>
        </div>
    );
};

export default TwoPanelLayout;
