import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Layout from "@/components/layout/Layout";
import { ContactPayload } from '@/types/contact';
import TwoPanelLayout from '@/components/layout/TwoPanelLayout';
import '@/styles/page/contact.scss';

export default function Contact() {
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

        console.log('Sending POST to /api/contact:', formData);
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        alert(data.message);
    }
    return (
        <TwoPanelLayout
            left={
                <div style={{ background: 'var(--surface)', color: 'var(--text)', padding: '1rem', margin: '0', height: '100%' }}>
                    <h2>Navigation</h2>
                    <ul>
                        <li>Home</li>
                        <li>Resume</li>
                        <li>Contact</li>
                    </ul>
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
                                    disabled={!isValidEmail(formData.email) || !formData.captchaToken}
                                    type="submit">
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
