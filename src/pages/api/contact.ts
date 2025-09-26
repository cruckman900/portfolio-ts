import type { NextApiRequest, NextApiResponse } from 'next';
import type { ContactPayload } from '../../types/contact';

interface CaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, captchaToken }: ContactPayload = req.body;

  // Basic validation
  if (!name || !email || !message || !captchaToken) {
    return res.status(400).json({ message: 'Missing required fields' });
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

  // TODO: Handle the form submission (e.g., send email, store in DB)
  // For now, just return success
  return res.status(200).json({ message: 'Message sent successfully!' });
}
