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

                {/* hero images */}
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

                {/* book covers */}
                {/* failure at fifty /}
                <link rel="preload" as="image" href="/images/Book Covers/failure-at-fifty-3d.png" />
                <link rel="preload" as="image" href="/images/Book Covers/faf-front.jpg" />
                <link rel="preload" as="image" href="/images/Book Covers/faf-back.jpg" />

                {/* fifty-one ways to lie */}
                <link rel="preload" as="image" href="/images/Book Covers/fiftyone-ways-to-lie-3d.png" />
                <link rel="preload" as="image" href="/images/Book Covers/fowtl-front.jpg" />
                <link rel="preload" as="image" href="/images/Book Covers/fowtl-back.jpg" />

                {/* better life beyond fifty */}
                <link rel="preload" as="image" href="/images/Book Covers/better-life-beyond-fifty-3d.png" />
                <link rel="preload" as="image" href="/images/Book Covers/blbf-front.jpg" />
                <link rel="preload" as="image" href="/images/Book Covers/blbf-back.jpg" />

                {/* project badges */}
                <link rel="preload" as="image" href="/images/Project Badges/LinearDescent_Badge.png" />
                <link rel="preload" as="image" href="/images/Project Badges/BusinessAsUsual_Badge.png" />
                <link rel="preload" as="image" href="/images/Project Badges/NEXTRiff_Badge.png" />
                <link rel="preload" as="image" href="/images/Project Badges/ServicesByFriends_Badge.png" />
                <link rel="preload" as="image" href="/images/Project Badges/ThemeSwitcher_Badge.png" />
                <link rel="preload" as="image" href="/images/Project Badges/BetterBlog_Badge.png" />

                {/* project screenshots */}
                {/* bau admin (web) */}
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Admin/Dashboard.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Admin/Home.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Admin/LogsCollapsed.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Admin/LogsShowError.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Admin/Metrics.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Admin/ProvisionCompany.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Admin/Settings.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Admin/Settings.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Admin/SidebarCollapsed.gif" />

                {/* bau client (web) */}
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Client/BenefitsManagement.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Client/Dashboard.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Client/EmeraldLightTheme.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Client/EmployeeDirectory.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Client/HazardDarkTheme.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Client/HRLanding.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Client/Login.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Client/NewHireOnboarding.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Web/Client/Responsive.gif" />

                {/* bau client (android) */}
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Android/Dashboard.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Android/HazardTheme.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Android/HRLanding.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Android/NavigationDrawer.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Android/SteelTheme.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/BusinessAsUsual/Android/ThemeDrawer.gif" />

                {/* nextriff */}
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/About.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/CombinedNotation.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/FileRename.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/FretboardAddingChords.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/FretboardInput.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/Help.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/Home.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/InstrumentAndTuning.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/KeyboardAddingNotes.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/KeyboardInput.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/LeftMenu.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/PlaybackControls.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/RedTheme.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/ScoreAndMeasure.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/Settings.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/SlateTheme.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/Splash.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/StaffRepresentation.gif" />
                <link rel="preload" as="image" href="/images/Project Screenshots/NextRiff/WorkspaceEmpty.gif" />

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
