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

export interface Education {
    school: string;
    url: string;
    degree: string;
    dates: string;
}

export interface Achievement {
    category: string;
    items: string[];
}
export interface ExperienceItem {
    title: string;
    company: string;
    dates: string;
    details: string[];
}

export interface Repo {
    label: string;
    url: string;
}
export interface ProjectItem {
    name: string;
    description: string;
    url: string;
    tech: string;
    repos: Repo[];
}

export interface ProjectsList {
    genre: string;
    projects: ProjectItem[];
}

export interface Resume {
    icon: string;
    name: string;
    tagline: string;
    contact: Contact;
    skills: Skill[];
    education: Education[];
    summary: string;
    achievements: Achievement[];
    experience: ExperienceItem[];
    projects: ProjectsList[];
}
