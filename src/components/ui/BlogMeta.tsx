// components/ui/BlogMeta.tsx
import styles from './BlogMeta.module.scss'

type Props = {
    author?: string
    published_at: string
    tags?: string
}

export default function BlogMeta({ author, published_at, tags }: Props) {
    const date = new Date(published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })

    return (
        <div className={styles.meta}>
            <span>{author || 'Anonymous'}</span>
            <span>•</span>
            <span>{date}</span>
            {tags && (
                <>
                    <span>•</span>
                    <span>{tags}</span>
                </>
            )}
        </div>
    )
}
