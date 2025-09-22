export interface Contact {
    location: string;
    email: string;
    phone: string;
    website: string;
    github: string;
}

export interface ExperienceItem {
    title: string;
    company: string;
    dates: string;
    details: string[];
}

export interface Resume {
    name: string;
    tagline: string;
    contact: Contact;
    skills: string[];
    education: string[];
    summary: string;
    achievements: string[];
    experience: ExperienceItem[];
    projects: string[];
}