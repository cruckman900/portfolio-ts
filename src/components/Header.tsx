import React from "react";
import { Contact } from "@/types/resume";
import '../styles/header.scss';

interface Props {
    icon: string;
    name: string;
    tagline: string;
    contact: Contact;
}

const Header: React.FC<Props> = ({ icon, name, tagline, contact }) => (
    <header className="header">
        <h1><span className="no-print"><i className={icon}></i></span>{name}</h1>
        <p>{tagline}</p>
        <ul>
            <li>{contact.location}</li>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li>{contact.phone}</li>
            <li><a href={contact.website}>Website</a></li>
            <li><a href={contact.github}>GitHub</a></li>
        </ul>
    </header>
);

export default Header;