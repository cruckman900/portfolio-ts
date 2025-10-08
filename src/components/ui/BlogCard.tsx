// components/ui/BlogCard.tsx
import { BlogPost } from '@/types/blog'
import { motion } from 'framer-motion'
import styles from './BlogCard.module.scss'

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <motion.article className={styles.card} whileHover={{ scale: 1.02 }}>
            <h2 className={styles.heading2}>{post.title}</h2>
            <p className={styles.paragraph}>{post.excerpt}</p>
            <a href={`/blog/${post.slug}`} className={styles.link}>
                Read more →
            </a>
        </motion.article>
    )
}
