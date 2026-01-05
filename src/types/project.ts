export interface ProjectUrl {
    label: string
    href: string
    username: string | null
    password: string | null
    notes: string | null
}

export interface ProjectGithub {
    label: string
    href: string
}

export interface ChallengeSolution {
    challenge: string
    solution: string
}

export interface TechCategories {
    backend: string[]
    frontend: string[]
    cloud: string[]
    devops: string[]
    tooling: string[]
}

export interface ScreenshotItem {
    title: string
    src: string
    desc: string
}

export interface ScreenshotGroup {
    [groupName: string]: ScreenshotItem[]
}

export interface Project {
    slug: string
    title: string
    icon: string
    image: string
    description: string
    whatIBuilt: string
    highlights: string[]
    challengesAndSolutions: ChallengeSolution[]
    whatILearned: string[]
    tech: TechCategories
    github: ProjectGithub[]
    url: ProjectUrl[]
    screenshots: ScreenshotGroup[]
}
