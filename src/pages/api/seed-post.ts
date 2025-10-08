import { NextApiRequest, NextApiResponse } from 'next'
import { neon } from '@netlify/neon'

const sql = neon()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Optional: clear existing posts
    await sql`DELETE FROM blog_posts`

    const now = new Date().toISOString()

    const posts = [
      {
        title: 'The Story of This Site',
        slug: 'the-story-of-this-site',
        category: 'personal',
        published_at: now,
        content: `
# The Story of This Site

This site began as a whisper...

What started as a portfolio...

From Netlify secret scanning...

And it’s only just beginning.

—Christopher Ruckman & Copilot 🤝
`,
        marketing: {
          metaTitle: 'The Story of This Site',
          metaDescription: 'How a whisper became a legacy-minded launchpad.',
          openGraphImage: 'https://yourcdn.com/images/story-og.jpg',
          cta: 'Want to contribute your story? Reach out!'
        }
      },
      {
        title: 'NEXTRiff: A Launchpad for Creative Devs',
        slug: 'nextriff-launchpad',
        category: 'tech',
        published_at: now,
        content: `
# NEXTRiff: A Launchpad for Creative Devs

NEXTRiff is more than a dev environment—it's a legacy-minded ecosystem.

From Smart Commit tagging to onboarding clarity, every riff is a milestone.

Built with modular UI, poetic changelogs, and contributor empowerment at its core.

—Christopher Ruckman
`,
        marketing: {
          metaTitle: 'NEXTRiff: A Launchpad for Creative Devs',
          metaDescription: 'Explore how NEXTRiff turns every commit into a legacy milestone.',
          openGraphImage: 'https://yourcdn.com/images/nextriff-og.jpg',
          cta: 'Ready to riff with us? Join the movement.'
        }
      },
      {
        title: 'Business As Usual: Scalable Admin, Visual Legacy',
        slug: 'business-as-usual-admin',
        category: 'tech',
        published_at: now,
        content: `
# Business As Usual: Scalable Admin, Visual Legacy

Business As Usual is a multi-tenant ASP.NET Core suite built for scale and clarity.

From dynamic menu systems to geometric branding, every module is contributor-ready.

Empowering admins, onboarding contributors, and leaving a visual legacy.

—Christopher Ruckman
`,
        marketing: {
          metaTitle: 'Business As Usual: Scalable Admin, Visual Legacy',
          metaDescription: 'A modular admin suite built for scale, clarity, and contributor empowerment.',
          openGraphImage: 'https://yourcdn.com/images/business-og.jpg',
          cta: 'Want to build your own suite? Let’s talk.'
        }
      }
    ]

    for (const post of posts) {
      await sql`
        INSERT INTO blog_posts (title, slug, category, published_at, content, marketing)
        VALUES (
          ${post.title},
          ${post.slug},
          ${post.category},
          ${post.published_at},
          ${post.content},
          ${post.marketing}
        )
      `
    }

    res.status(200).json({ message: '✅ Blog reseeded with 3 posts' })
  } catch (err) {
    res.status(500).json({ error: 'Seeding failed', details: err })
  }
}
