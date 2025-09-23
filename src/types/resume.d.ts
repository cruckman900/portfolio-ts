export interface Contact {
    location: string;
    email: string;
    phone: string;
    website: string;
    github: string;
}

export interface Skill {
    section: string;
    content: string;
}
export interface ExperienceItem {
    title: string;
    company: string;
    dates: string;
    details: string[];
}

export interface Resume {
    icon: string;
    name: string;
    tagline: string;
    contact: Contact;
    skills: Skill[];
    education: string[];
    summary: string;
    achievements: string[];
    experience: ExperienceItem[];
    projects: string[];
}
