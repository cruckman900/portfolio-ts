// pages/books.tsx
import { useState } from 'react';
import TwoPanelLayout from '@/components/layout/TwoPanelLayout';
import Card from '@/components/ui/Card';
import Image from 'next/image';
import booksData from '@/data/books.json';
import Layout from '@/components/layout/Layout';
import styles from '@/styles/page/books.module.scss';

interface Book {
    title: string;
    series: string;
    order: number;
    asin: string;
    coverFront: string;
    coverBack: string;
    description: string[];
    seriesDescription: string[];
}

export default function BooksPage() {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [view, setView] = useState<'series' | 'book'>('series');

    const leftPanel = (
        <div className={styles.bookGrid}>
            {booksData.map((book) => (
                <Card
                    className={styles.card}
                    key={book.asin}
                    onClick={() => {
                        setSelectedBook(book);
                        setView('book');
                    }}
                    isSelected={selectedBook?.asin === book.asin}
                >
                    <h3>{book.title}</h3>
                    <p>{book.series}</p>
                    <div className={styles.bookCovers}>
                        <Image
                            src={book.coverFront}
                            alt="Front Cover"
                            width={100}
                            height={150}
                            style={{ objectFit: 'contain' }}
                        />
                        <Image
                            src={book.coverBack}
                            alt="Back Cover"
                            width={100}
                            height={150}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <div className={styles.buyNow}>
                        <a
                            href={book.siteStripeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Buy on Amazon
                        </a>
                    </div>
                </Card>
            ))}
        </div>
    );

    const rightPanel = (
        <div className={styles.descriptionPanel}>
            <div className={styles.breadcrumbToggle}>
                <button onClick={() => setView('series')} className={view === 'series' ? 'active' : ''}>
                    Series Description
                </button>
                <button
                    onClick={() => setView('book')}
                    className={view === 'book' ? 'active' : ''}
                    disabled={!selectedBook}
                >
                    Book Description
                </button>
            </div>
            <div className={styles.descriptionContent}>
                {view === 'series' &&
                    (selectedBook?.seriesDescription || booksData[0].seriesDescription).map((para, idx) => (
                        <p key={idx}>{para}</p>
                    ))}

                {view === 'book' && selectedBook &&
                    selectedBook.description.map((para, idx) => (
                        <p key={idx}>{para}</p>
                    ))}
            </div>
        </div>
    );

    return <TwoPanelLayout left={leftPanel} right={rightPanel} />
}

// Define a custom layout for this page
BooksPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
};
