import Link from 'next/link';
import styles from './PostCard.module.scss';

interface Props {
    title: string;
    excerpt?: string;
    category: string;
    publishedAt: string;
    slug: string;
}

export default function PostCard({ title, excerpt, category, publishedAt, slug }: Props) {
    function getCategoryEmoji(category: string) {
        switch (category) {
            case 'personal':
                return '🧠';
            case 'legal':
                return '⚖️';
            case 'tech':
                return '💻';
            case 'music':
                return '🎵';
            case 'design':
                return '🎨';
            default:
                return '🗂️';
        }
    }

    return (
        <div className='postCard'>
            <span className={`badge badge-${category}`}>
                {getCategoryEmoji(category)} {category}
            </span>
            <h1>{title}</h1>
            <p>{excerpt}</p>
            <span className="date">{new Date(publishedAt).toLocaleDateString()}</span>
            <Link href={`/blog/${slug}`} className="read-more">
                Read more →
            </Link>
        </div>
    )
}