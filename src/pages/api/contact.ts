import type { NextApiRequest, NextApiResponse } from 'next';
import type { ContactPayload } from '../../types/contact';
import { env } from '@/lib/env';
import nodemailer from 'nodemailer';
import validator from 'validator';

interface CaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Request method:', req.method);
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, captchaToken }: ContactPayload = req.body;

  // Basic validation
  if (!name || !email || !message || !captchaToken) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  // CAPTCHA verification
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return res.status(500).json({ message: 'Server misconfiguration: missing CAPTCHA secret' });
  }

  const captchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${captchaToken}`,
  });

  const captchaData: CaptchaResponse = await captchaRes.json();

  if (!captchaData.success) {
    return res.status(400).json({ message: 'CAPTCHA verification failed', errors: captchaData['error-codes'] });
  }

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: env.CONTACT_RECEIVER_EMAIL,
      subject: "New Contact Form Submission",
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ message: 'Failed to send email.'});
  }
}
