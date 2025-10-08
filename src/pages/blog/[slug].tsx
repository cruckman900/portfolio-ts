// pages/blog/[slug].tsx
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { BlogPost } from '@/types/blog'
import Layout from '@/components/layout/Layout'
import { toast } from 'react-hot-toast'
import Head from 'next/head'
import BlogMeta from '@/components/ui/BlogMeta'
import styles from './BlogDetail.module.scss'

export default function BlogPostPage() {
    const { query } = useRouter()
    const [post, setPost] = useState<BlogPost | null>(null)

    const [error, setError] = useState<string | null>(null)

    // TODO: need these icons!

    // const categoryIcons: Record<string, string> = {
    //     tech: '💻',
    //     design: '🎨',
    //     legal: '⚖️',
    //     music: '🎵',
    //     personal: '🧠',
    //     general: '🗂️',
    // }

    useEffect(() => {
        if (error) {
            toast.error('⚠️ Post not found', { icon: '📄', duration: 4000 })
        }
    }, [error])

    useEffect(() => {
        if (query.slug) {
            fetch(`/api/get-post?slug=${query.slug}`)
                .then(res => {
                    if (!res.ok) throw new Error('Post not found')
                    return res.json()
                })
                .then((data: BlogPost) => setPost(data))
                .catch(err => setError(err.message))
        }
    }, [query.slug])

    if (!post) return <p>Loading...</p>

    return (
        <>
            <Head>
                <title>{post.marketing?.metaTitle || post.title}</title>
                <meta name="description" content={post.marketing?.metaDescription || post.excerpt} />
                <meta property="og:image" content={post.marketing?.openGraphImage} />
            </Head>
            <section className={styles.container}>
                <article className={styles.article}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                    <BlogMeta
                        author={post.author}
                        published_at={post.published_at}
                        tags={post.tags}
                    />
                </article>
            </section>
        </>
    )
}

// Define a custom layout for this page
BlogPostPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
}
