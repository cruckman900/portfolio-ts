/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextApiRequest, NextApiResponse } from 'next'
import type { ContactPayload } from '../../types/contact'
import { env } from '@/lib/env'
import nodemailer from 'nodemailer'
import validator from 'validator'
import pug from 'pug'
import path from 'path'

interface CaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

// TODO: alternative to no-unused-vars for errors

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: `Method not allowed: ${req.method}` })
    }

    const { name, email, message, captchaToken }: ContactPayload = req.body

    const bypassCaptcha = process.env.BYPASS_CAPTCHA === 'true'

    // Basic validation
    if (!name || !email || !message || (!captchaToken && !bypassCaptcha)) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' })
    }

    // CAPTCHA verification
    if (!bypassCaptcha) {
      const secret = process.env.RECAPTCHA_SECRET_KEY
      if (!secret) {
        return res.status(500).json({ message: 'Server misconfiguration: missing CAPTCHA secret' })
      }

      const captchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secret}&response=${captchaToken}`,
      })

      const captchaData: CaptchaResponse = await captchaRes.json()

      if (!captchaData.success) {
        return res.status(400).json({ message: 'CAPTCHA verification failed', errors: captchaData['error-codes'] })
      }
    }

    let transporter
    try {
      transporter = nodemailer.createTransport({
        host: env.SMTP_HOST,
        port: env.SMTP_PORT,
        secure: env.SMTP_PORT === 465,
        auth: {
          user: env.SMTP_USER,
          pass: env.SMTP_PASS,
        },
      })
    } catch (error) {
      // console.error('Transporter setup failed:', error)
      return res.status(500).json({ message: 'Email configuration error.' })
    }

    try {
      const templatePath = path.resolve(process.cwd(), 'templates/contactEmail.pug')
      const html = pug.renderFile(templatePath, { name, email, message })

      await transporter.sendMail({
        from: `"${name}" <no-reply@cruckman.com>`,
        replyTo: email, // preserves user's email for replies
        to: env.CONTACT_RECEIVER_EMAIL,
        subject: "New Contact Form Submission",
        html,
      })

      return res.status(200).json({ message: 'Message sent successfully!' })
    } catch (error) {
      // console.error('Email send error:', error)
      return res.status(500).json({ message: 'Failed to send email.' })
    }
  } catch (error) {
    // console.error('API error:', error)
    return res.status(500).json({ message: 'Internal server error.' })
  }
}
