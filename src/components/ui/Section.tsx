import React, { ReactElement } from 'react';

interface Props {
    className?: string;
    title?: string;
    icon?: string;
    link?: string[];
    children: ReactElement;
}

const Section: React.FC<Props> = ({ className, title, icon, children}) => (
    <section className={className}>
        <h2><i className={icon}></i>{title}</h2>
        {children}
    </section>
);

export default Section;