import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Layout from "@/components/layout/Layout";
import { ContactPayload } from '@/types/contact';
import TwoPanelLayout from '@/components/layout/TwoPanelLayout';
import toast from 'react-hot-toast';
import '@/styles/page/contact.scss';

export default function Contact() {
    const bypassCaptcha = process.env.NEXT_PUBLIC_BYPASS_CAPTCHA === 'true';

    const [formData, setFormData] = useState<ContactPayload>({
        name: '',
        email: '',
        message: '',
        captchaToken: ''
    });

    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();

        console.log("formData", formData);

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message,
                captchaToken: formData.captchaToken || '', // optional if bypassing 
            }),
        });

        const data = await res.json();

        if (res.ok) {
            toast.success(data.message || 'Message sent!', { icon: '☣️' });
        } else {
            toast.error(data.message || 'Something went wrong.', { icon: '💀' });
        }
    }
    return (
        <TwoPanelLayout
            left={
                <div style={{ background: 'var(--surface)', color: 'var(--text)', padding: '1rem', margin: '0', height: '100%' }}>
                    <h1>💬 Why Reach Out?</h1>
                    <p>
                        Whether you&apos;re launching a new project or refining an existing one, I bring a unique blend of 
                        technical precision and creative insight to the table. I specialize in building secure, scalable 
                        websites with expressive UI/UX, and I&apos;m available for commission-based work across a range of services:
                    </p>
                    <p>
                        Custom website development (React, Next.js, ASP.NET, Node.js)
                    </p>
                    <p>
                        Responsive design & branding
                    </p>
                    <p>
                        Deployment automation & hosting setup
                    </p>
                    <p>
                        Form integration, validation, and secure email workflows
                    </p>
                    <p>
                        Creative writing, editing, and digital publishing
                    </p>
                    <p>
                        If you need a developer who can think like a designer, write like an author, and troubleshoot like an 
                        engineer—I&apos;d love to hear from you. Let&apos;s build something that works beautifully and tells your story with clarity.
                    </p>
                </div>
            }
            right={
                <div style={{ padding: '2rem' }}>
                    <div className='contact-page'>
                        <h1 className='title'>Contact Me</h1>
                        <form className='form' onSubmit={handleSubmit}>
                            <div className='form-fields'>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder='Your Name'
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder='Your Email'
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />

                                <textarea
                                    name="message"
                                    required
                                    placeholder='Your Message'
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                />

                                <ReCAPTCHA
                                    className='form-captcha'
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                    onChange={token => setFormData({ ...formData, captchaToken: token || '' })}
                                />

                                <button
                                    className='form-submit'
                                    disabled={
                                        !isValidEmail(formData.email) ||
                                        (!formData.captchaToken && !bypassCaptcha)
                                    }
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        />
    );
}

// Define a custom layout for this page
Contact.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
};
