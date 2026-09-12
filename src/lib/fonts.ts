// lib/fonts.ts
// Central font definitions, loaded via next/font/google for optimized,
// self-hosted delivery. Each font exposes a CSS variable that is applied
// to the <Html> element in _document.tsx so it cascades to every page.
import { Inter, Oswald, Share_Tech_Mono } from 'next/font/google'

// Body copy: highly readable, neutral, professional
export const fontBody = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-body',
    display: 'swap',
})

// Headings & hero type: condensed, bold, poster/warning-label energy
export const fontHeading = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-heading',
    display: 'swap',
})

// Technical accents: breadcrumbs, tags, badges, code-flavored details
export const fontMono = Share_Tech_Mono({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-mono',
    display: 'swap',
})

export const fontVariables = `${fontBody.variable} ${fontHeading.variable} ${fontMono.variable}`
