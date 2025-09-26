import { Html, Head, Main, NextScript } from 'next/document';
import '@/styles/main.scss'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="description" content="Multidisciplinary engineer, author, and legal advocate" />
                <meta property="og:title" content="LinearDescent - Portfolio" />
                <meta property="og:type" content="WebPage" />
                <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
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
    );
};
