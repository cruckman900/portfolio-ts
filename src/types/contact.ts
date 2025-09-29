export interface ContactPayload {
    name: string;
    email: string;
    message: string;
    captchaToken: string;
}

export interface ContactResponse {
    message: string;
    errors?: string[];
}
