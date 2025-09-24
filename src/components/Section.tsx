import React, { ReactElement } from 'react';
import '../styles/section.scss';

interface Props {
    class_from_parent: string;
    title: string;
    icon: string;
    link?: string[];
    children: ReactElement;
}

const Section: React.FC<Props> = ({ class_from_parent, title, icon, children}) => (
    <section className={`section ${class_from_parent}`}>
        <h2><i className={icon}></i>{title}</h2>
        {children}
    </section>
);

export default Section;