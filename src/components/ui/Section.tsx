import React, { ReactElement } from 'react'

interface Props {
    className?: string;
    title?: string;
    icon?: string;
    link?: string[];
    children: ReactElement;
}

const Section: React.FC<Props> = ({ className, title, icon, children }) => (
    <section className={className} style={{ paddingBottom: "1rem" }}>
        {title && <h2 style={{ margin: 0, paddingBottom: "0.5rem" }}><i className={icon}></i>{title}</h2>}
        {children}
    </section>
)

export default Section
