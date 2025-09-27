import Link from 'next/link';

interface Props {
    title: string;
    excerpt?: string;
    category: string;
    publishedAt: string;
    slug: string;
}

export default function PostCard({ title, excerpt, category, publishedAt, slug }: Props) {
    const categoryIcons: Record<string, string> = {
        personal: '🧠',
        tech: '💻',
        music: '🎵',
        legal: '⚖️',
    };

    return (
        <div className='post-card'>
            <span className='badge'>
                {categoryIcons[category] || '🗂️'} {category}
            </span>
            <p>{title}</p>
            <p>{excerpt}</p>
            <span className="date">{new Date(publishedAt).toLocaleDateString()}</span>
            <Link href={`/blog/${slug}`} className="read-more">
                Read more →
            </Link>
        </div>
    )
}