// pages/books.tsx
import { useState } from 'react';
import TwoPanelLayout from '@/components/layout/TwoPanelLayout';
import Card from '@/components/ui/Card';
import Image from 'next/image';
import booksData from '@/data/books.json';
import Layout from '@/components/layout/Layout';

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
        <div className="book-grid">
            {booksData.map((book) => (
                <Card
                    key={book.asin}
                    onClick={() => {
                        setSelectedBook(book);
                        setView('book');
                    }}
                    isSelected={selectedBook?.asin === book.asin}
                >
                    <h3>{book.title}</h3>
                    <p>{book.series}</p>
                    <Image
                        src={book.coverFront}
                        alt="Front Cover"
                        layout="responsive"
                        width={300}
                        height={450}
                    />
                    <Image
                        src={book.coverBack}
                        alt="Back Cover"
                        layout="responsive"
                        width={300}
                        height={450}
                    />
                    <a
                        href={book.siteStripeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text' }}
                    >
                        Buy on Amazon
                    </a>
                </Card>
            ))}
        </div>
    );

    const rightPanel = (
        <div className="description-panel">
            <div className="breadcrumb-toggle">
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
            <div className='description-content'>
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
