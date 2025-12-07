import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Google Analytics */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-GJ8GQCZRXJ"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GJ8GQCZRXJ', {
                page_path: window.location.pathname,
              });
            `,
                    }}
                />

                {/* Meta & SEO */}
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

                {/* Preload Images */}
                <link rel="preload" as="image" href="/og-image.png" />

                <link rel="preload" as="image" href="/images/light_hero.png" />
                <link rel="preload" as="image" href="/images/dark_hero.png" />
                <link rel="preload" as="image" href="/images/hazard_hero.png" />
                <link rel="preload" as="image" href="/images/brownstone_hero.png" />
                <link rel="preload" as="image" href="/images/midnight_hero.png" />
                <link rel="preload" as="image" href="/images/slate_hero.png" />
                <link rel="preload" as="image" href="/images/purple_hero.png" />
                <link rel="preload" as="image" href="/images/pink_hero.png" />
                <link rel="preload" as="image" href="/images/green_hero.png" />
                <link rel="preload" as="image" href="/images/red_hero.png" />

                <link rel="preload" as="image" href="/images/failure-at-fifty-3d.png" />
                <link rel="preload" as="image" href="/images/faf-front.jpg" />
                <link rel="preload" as="image" href="/images/faf-back.jpg" />

                <link rel="preload" as="image" href="/images/fiftyone-ways-to-lie-3d.png" />
                <link rel="preload" as="image" href="/images/fowtl-front.jpg" />
                <link rel="preload" as="image" href="/images/fowtl-back.jpg" />

                <link rel="preload" as="image" href="/images/better-life-beyond-fifty-3d.png" />
                <link rel="preload" as="image" href="/images/blbf-front.jpg" />
                <link rel="preload" as="image" href="/images/blbf-back.jpg" />

                <link rel="preload" as="image" href="/images/LinearDescent_Badge.png" />
                <link rel="preload" as="image" href="/images/BusinessAsUsual_Badge.png" />
                <link rel="preload" as="image" href="/images/NEXTRiff_Badge.png" />
                <link rel="preload" as="image" href="/images/ServicesByFriends_Badge.png" />
                <link rel="preload" as="image" href="/images/ThemeSwitcher_Badge.png" />
                <link rel="preload" as="image" href="/images/BetterBlog_Badge.png" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "LinearDescent - Portfolio",
                            "description": "Multidisciplinary engineer, author, and legal advocate"
                        }),
                    }}
                />

                {/* Font Awesome */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
