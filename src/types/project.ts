export type ProjectType = 'legal' | 'creative' | 'technical';
export type ProjectStatus = 'active' | 'published' | 'archived';
export type ProjectImpact = 'low' | 'medium' | 'high';
export type ProjectAnimation = 'glitch' | 'fade' | 'pulse' | 'wave';

export interface Project {
    id: string;
    type: ProjectType;
    title: string;
    summary: string;
    tags: string[];
    status: ProjectStatus;
    impact: ProjectImpact;
    animations: ProjectAnimation[];
    repo?: string | null;
    cover?: string | null;
}