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
        excerpt: 'How a whisper became a legacy-minded launchpad.',
        author: 'Christopher Ruckman',
        tags: 'portfolio, origin, creative process',
        published_at: now,
        archived: false,
        content: `
# The Story of This Site

This site began as a whisper—just a résumé, just a portfolio.

But it evolved into a creative playground, a poetic survival platform, and a contributor-ready launchpad.

From Netlify secret scanning to dynamic blog architecture, every pixel is intentional.

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
        title: 'Books & Memoirs: A Legacy in Print',
        slug: 'books-and-memoirs',
        category: 'creative',
        excerpt: 'From glitch art to legal memoirs, these books are artifacts of survival and expression.',
        author: 'Christopher Ruckman',
        tags: 'books, memoirs, glitch art, publishing',
        published_at: now,
        archived: false,
        content: `
# Books & Memoirs: A Legacy in Print

These books aren’t just stories—they’re survival artifacts.

From glitch art compilations to legal memoirs, each title is a timestamped milestone in the journey from adversity to expression.

- **Linear Descent**: A poetic memoir from Rayland, Ohio
- **Glitch Atlas**: Visual chaos meets ambient guitar
- **The Contributor’s Handbook**: A guide to onboarding clarity and legacy-minded engineering

Each book is available in print and digital formats, with contributor CTAs and thematic branding.

—Christopher Ruckman
`,
        marketing: {
          metaTitle: 'Books & Memoirs: A Legacy in Print',
          metaDescription: 'From glitch art to legal memoirs, these books are artifacts of survival and expression.',
          openGraphImage: 'https://yourcdn.com/images/books-og.jpg',
          cta: 'Want to publish your own legacy? Let’s collaborate.'
        }
      },
      {
        title: 'portfolio-ts: A Creative Showcase & Technical Playground',
        slug: 'portfolio-ts-showcase',
        category: 'tech',
        excerpt: 'Built with Next.js, TypeScript, SCSS Modules, and contributor flair.',
        author: 'Christopher Ruckman',
        tags: 'next.js, portfolio, netlify, markdown, print optimization',
        published_at: now,
        archived: false,
        content: `
# portfolio-ts: A Creative Showcase & Technical Playground

This site is more than a résumé—it’s a living artifact.

Built with **Next.js**, **TypeScript**, **SCSS Modules**, **Markdown**, and **Framer Motion**, it features:

- Modular blog architecture
- Resume print optimization
- Open Graph metadata
- Contributor CTAs
- Dynamic routing and layout zones

Hosted on Netlify, tracked with GA4, and styled with legacy-minded branding.

—Christopher Ruckman
`,
        marketing: {
          metaTitle: 'portfolio-ts: A Creative Showcase & Technical Playground',
          metaDescription: 'Built with Next.js, TypeScript, SCSS Modules, and contributor flair.',
          openGraphImage: 'https://yourcdn.com/images/portfolio-og.jpg',
          cta: 'Want to build your own expressive portfolio? Let’s riff.'
        }
      },
      {
        title: 'NEXTRiff Tab Parser: From Guitar to Grid',
        slug: 'nextriff-tab-parser',
        category: 'tech',
        excerpt: 'A TypeScript-powered parser that turns guitar tabs into structured riffs.',
        author: 'Christopher Ruckman',
        tags: 'typescript, parser, guitar, regex, music',
        published_at: now,
        archived: false,
        content: `
# NEXTRiff Tab Parser: From Guitar to Grid

This parser takes raw guitar tab text and transforms it into structured, playable riffs.

Built with **TypeScript**, **regex**, and **modular parsing logic**, it powers the NEXTRiff ecosystem:

- Converts ASCII tabs into JSON
- Supports multiple tunings and time signatures
- Integrates with visual riff renderers

It’s not just code—it’s a bridge between music and markup.

—Christopher Ruckman
`,
        marketing: {
          metaTitle: 'NEXTRiff Tab Parser: From Guitar to Grid',
          metaDescription: 'A TypeScript-powered parser that turns guitar tabs into structured riffs.',
          openGraphImage: 'https://yourcdn.com/images/tab-parser-og.jpg',
          cta: 'Want to riff with structured tabs? Try the parser.'
        }
      },
      {
        title: 'Business As Usual: Scalable Admin, Visual Legacy',
        slug: 'business-as-usual-admin',
        category: 'tech',
        excerpt: 'A multi-tenant ASP.NET Core suite built for scale, clarity, and contributor empowerment.',
        author: 'Christopher Ruckman',
        tags: 'asp.net core, multi-tenant, admin, docker, ci/cd, sql server',
        published_at: now,
        archived: false,
        content: `
# Business As Usual: Scalable Admin, Visual Legacy

Business As Usual is a multi-tenant **ASP.NET Core** suite built for scale and clarity.

It features:

- Dynamic menu systems
- Geometric branding
- Docker orchestration
- CI/CD pipelines
- SQL Server provisioning
- Contributor onboarding with Smart Commit tagging

Every module is expressive, auditable, and legacy-minded.

—Christopher Ruckman
`,
        marketing: {
          metaTitle: 'Business As Usual: Scalable Admin, Visual Legacy',
          metaDescription: 'A multi-tenant ASP.NET Core suite built for scale, clarity, and contributor empowerment.',
          openGraphImage: 'https://yourcdn.com/images/business-og.jpg',
          cta: 'Want to build your own suite? Let’s talk.'
        }
      }
    ]
    for (const post of posts) {
      await sql`
        INSERT INTO blog_posts (
          title, slug, category, excerpt, content, author, tags,
          published_at, updated_at, archived, marketing
        )
        VALUES (
          ${post.title},
          ${post.slug},
          ${post.category},
          ${post.excerpt},
          ${post.content},
          ${post.author},
          ${post.tags},
          ${post.published_at},
          ${post.archived},
          ${post.marketing}
        )
      `
    }

    res.status(200).json({ message: '✅ Blog reseeded with 3 posts' })
  } catch (err) {
    res.status(500).json({ error: 'Seeding failed', details: err })
  }
}
