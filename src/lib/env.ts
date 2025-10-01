// lib/env.ts
export const env = {
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY!,
    SMTP_HOST: process.env.SMTP_HOST!,
    SMTP_PORT: parseInt(process.env.SMTP_PORT || '587'),
    SMTP_USER: process.env.SMTP_USER!,
    SMTP_PASS: process.env.SMTP_PASS!,
    CONTACT_RECEIVER_EMAIL: process.env.CONTACT_RECEIVER_EMAIL!,
}