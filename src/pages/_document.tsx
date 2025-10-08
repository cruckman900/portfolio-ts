import { Html, Head, Main, NextScript } from 'next/document'
import '@/styles/main.scss'

export default function Document() {
    return (
        <Html>
            <Head>
                <Head>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-NSB7KBRR03"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-NSB7KBRR03', {
                                page_path: window.location.pathname,
                            });
                            `,
                        }}
                    />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Poetic survival platform from Rayland, Ohio—memoirs, glitch art, ambient guitar, and expressive full-stack engineering." />
                    <link rel="canonical" href="https://lineardescent.netlify.app" />
                    <link rel="icon" type="image/png" href="/favicon.png" />

                    {/* Open Graph */}
                    <meta property="og:title" content="LinearDescent | Poetic Survival Through Code, Art & Memoir" />
                    <meta property="og:description" content="Memoirs, glitch art, ambient guitar, and expressive full-stack engineering from Rayland, Ohio." />
                    <meta property="og:image" content="https://lineardescent.netlify.app/og-image.png" />
                    <meta property="og:url" content="https://lineardescent.netlify.app" />
                    <meta property="og:type" content="website" />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="LinearDescent | Poetic Survival Through Code, Art & Memoir" />
                    <meta name="twitter:description" content="Memoirs, glitch art, ambient guitar, and expressive full-stack engineering from Rayland, Ohio." />
                    <meta name="twitter:image" content="https://lineardescent.netlify.app/og-image.png" />

                    {/* Preload Hero Images */}
                    <link rel="preload" as="image" href="/images/light_hero.png" />
                    <link rel="preload" as="image" href="/images/slate_hero.png" />
                    <link rel="preload" as="image" href="/images/midnight_hero.png" />
                    <link rel="preload" as="image" href="/images/red_hero.png" />
                    <link rel="preload" as="image" href="/images/green_hero.png" />
                    <link rel="preload" as="image" href="/images/pink_hero.png" />
                    <link rel="preload" as="image" href="/images/brownstone_hero.png" />
                    <link rel="preload" as="image" href="/images/dark_hero.png" />
                    <link rel="preload" as="image" href="/images/purple_hero.png" />
                </Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "LinearDescent - Portfolio",
                            "description": "Multidisciplinary engineer, author, and legal advocate"
                        })
                    }}
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    crossOrigin='anonymous'
                    referrerPolicy='no-referrer'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
