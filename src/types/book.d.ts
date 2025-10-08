export interface Marketing {
    keywords: string[];
    audience: string[];
    quote: string;
    cta: string;
    badge: string;
    metaTitle: string;
    metaDescription: string;
    openGraphImage: string;
}

export interface Book {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    genre: string;
    series: string;
    order: number;
    asin: string;
    siteStripeLink: string;
    coverImage3D: string;
    coverFront: string;
    coverBack: string;
    seriesTag: string;
    shortDescription: string;
    description: string[];
    seriesDescription: string[];
    marketing: Marketing;
}
