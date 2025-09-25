export interface ResumeEntryInput {
    section: string;
    title: string;
    subtitle?: string;
    description: string;
    startDate?: string;
    endDate?: string;
    tags?: string[];
    order?: number;
}

export interface ResumeEntry extends ResumeEntryInput {
    id: string;
}

export interface ResumeArgs {
    section: string;
}

export interface UpdateArgs {
    id: string;
    input: ResumeEntryInput;
}

export interface DeleteArgs {
    id: string;
}