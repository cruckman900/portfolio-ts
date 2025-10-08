// pages/books.tsx
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import booksData from '@/data/books.json'
import TagCTA from '@/components/ui/TagCTA'
import { Book } from '@/types/book'
import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import styles from './books.module.scss'

export default function BooksPage() {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null)
    const [activeTag, setActiveTag] = useState<string | null>(null)

    return (
        <div className={styles.booksPage}>
            {booksData.map((book) => (
                <Head key={book.id}>
                    <meta name="keywords" content={book.marketing.keywords.join(', ')} />
                    <meta name="description" content={book.marketing.metaDescription} />
                    <meta property="og:image" content={book.marketing.openGraphImage} />
                </Head>
            ))}
            {selectedBook && (
                <Head>
                    <title>{selectedBook.marketing.metaTitle}</title>
                    <meta name="description" content={selectedBook.marketing.metaDescription} />
                    <meta name="keywords" content={selectedBook.marketing.keywords.join(', ')} />
                    <meta property="og:title" content={selectedBook.marketing.metaTitle} />
                    <meta property="og:description" content={selectedBook.marketing.metaDescription} />
                    <meta property="og:image" content={selectedBook.marketing.openGraphImage} />
                    <meta property="og:type" content="book" />
                </Head>
            )}
            <h1 className={styles.seriesTitle}>What a Life Series</h1>
            <p className={styles.seriesTagline}>
                A journey through failure, secrecy, and redemption&mdash;told in three acts.
            </p>

            <div className={styles.carousel}>
                {booksData.map((book: Book) => (
                    <motion.div
                        key={book.id}
                        className={styles.bookCard}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: .95 }}
                        onClick={() => {
                            setSelectedBook(book)
                            setActiveTag(null)
                        }}
                    >
                        <Image
                            src={book.coverImage3D}
                            alt={book.title}
                            width={160}
                            height={240}
                            className={styles.coverImage}
                        />
                        <h3>{book.title}</h3>
                        <p>{book.shortDescription}</p>
                    </motion.div>
                ))}
            </div>

            {selectedBook && (
                <motion.div
                    className={styles.bookDetail}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.detailImages}>
                        <Image
                            src={selectedBook.coverFront}
                            alt="Front Cover"
                            width={300}
                            height={450}
                        />
                        <Image
                            src={selectedBook.coverBack}
                            alt="Back Cover"
                            width={300}
                            height={450}
                        />
                    </div>
                    <div className={styles.detailText}>
                        <h2>{selectedBook.title}</h2>
                        <h4>{selectedBook.subtitle}</h4>
                        <p><strong>Author:</strong> {selectedBook.author}</p>
                        <p><strong>Genre:</strong> {selectedBook.genre}</p>
                        <p><strong>Series:</strong> {selectedBook.seriesTag}</p>
                        {selectedBook.description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                        <a className={styles.link} href={selectedBook.siteStripeLink} target="_blank" rel="noopener noreferrer">
                            📖 Buy on Amazon
                        </a>
                    </div>
                    <div className={styles.tagPanel}>
                        <div className={styles.tagGroup}>
                            <span
                                className={styles.tag}
                                onClick={() => setActiveTag(selectedBook.genre.toLowerCase().replace(/\s+/g, '-'))}
                            >
                                #{selectedBook.genre.toLowerCase().replace(/\s+/g, '-')}
                            </span>
                            <span
                                className={styles.tag}
                                onClick={() => setActiveTag(selectedBook.seriesTag.toLowerCase().replace(/\s+/g, '-'))}
                            >
                                #{selectedBook.seriesTag.toLowerCase().replace(/\s+/g, '-')}
                            </span>
                            {selectedBook.marketing.keywords.map((kw, idx) => (
                                <span
                                    key={idx}
                                    className={styles.tag}
                                    onClick={() => setActiveTag(kw.toLowerCase().replace(/\s+/g, '-'))}
                                >
                                    #{kw.toLowerCase().replace(/\s+/g, '-')}
                                </span>
                            ))}
                        </div>
                        <div className={styles.tagCTAWrapper}>
                            {activeTag && <TagCTA tag={activeTag} />}
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

// Define a custom layout for this page
BooksPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
}
