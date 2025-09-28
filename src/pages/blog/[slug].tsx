// pages/blog/[slug].tsx
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import Layout from '@/components/layout/Layout';
import { toast } from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ReadOnlyPost from '@/components/ui/ReadOnlyPost';

export default function BlogPostPage() {
    const { query } = useRouter();
    const [post, setPost] = useState<BlogPost | null>(null);

    const [error, setError] = useState<string | null>(null);

    const categoryIcons: Record<string, string> = {
        tech: '💻',
        design: '🎨',
        legal: '⚖️',
        music: '🎵',
        personal: '🧠',
        general: '🗂️',
    };

    useEffect(() => {
        if (error) {
            console.error('Blog post fetch error', error);
            toast.error('⚠️ Post not found', { icon: '📄', duration: 4000 });
        }
    }, [error]);

    useEffect(() => {
        if (query.slug) {
            fetch(`/api/get-post?slug=${query.slug}`)
                .then(res => {
                    if (!res.ok) throw new Error('Post not found')
                    return res.json();
                })
                .then((data: BlogPost) => setPost(data))
                .catch(err => setError(err.message));
        }
    }, [query.slug]);

    if (!post) return <p>Loading...</p>;

    return (
        <article>
            {/* <div>{JSON.stringify(post.content)}</div> */}
            <ReadOnlyPost content={JSON.stringify(post.content)} />
            {/* <h1>{post.title}</h1>
            <span className="badge">
                {categoryIcons[post.category] || '🗂️'} {post.category}
            </span>
            <span className="date">
                {new Date(post.published_at).toLocaleDateString()}
            </span>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content_json}
            </ReactMarkdown> */}
        </article>
    )
}

// Define a custom layout for this page
BlogPostPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
};
