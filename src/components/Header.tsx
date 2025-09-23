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
        <p className="tagline">{tagline}</p>
        <ul>
            <li><i className="fas fa-map-marker-alt"></i>{contact.location}</li>
            <li><i className="fas fa-envelope"></i><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><i className="fas fa-phone"></i><a href={`tel:+1${contact.phone.replace(/[\s()-]/g, "")}`}>{contact.phone}</a></li>
            <li><i className="fas fa-globe"></i><a href={contact.website}>{contact.website.substring(8)}</a></li>
            <li><i className="fab fa-github"></i><a href={contact.github}>{contact.github.substring(8)}</a></li>
        </ul>
    </header>
);

export default Header;