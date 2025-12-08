// components/ui/BlogMenu.tsx
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BlogPost } from '@/types/blog'
import styles from './BlogMenu.module.scss'
import { toast } from 'react-hot-toast'

export default function BlogMenu() {
    const router = useRouter()
    const [posts, setPosts] = useState<BlogPost[]>([])

    useEffect(() => {
        fetch('/api/get-posts')
            .then(res => res.json())
            .then(setPosts)
            .catch(() => toast.error('Failed to load posts'))
    }, [])

    if (posts.length === 0) {
        toast('Loading posts...', { icon: '📭' })
    }

    return (
        <nav className={styles.menu}>
            <h2>
                Blog Posts
                <Link href="/blog/admin" className={styles.addIcon}><i className="fa-solid fa-plus"></i></Link>
            </h2>
            <ul>
                {posts.map(post => {
                    const href = `/blog/${post.slug}`
                    const isActive =
                        router.asPath === href || router.asPath.startsWith(`${href}/`)

                    return (
                        <li key={post.slug}>
                            {isActive ? (
                                <span className={styles.active}>{post.title}</span>
                            ) : (
                                <>
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    <Link href={`/blog/admin?slug=${post.slug}`} className={styles.editIcon}><i className="fa-solid fa-pencil"></i></Link>
                                </>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
