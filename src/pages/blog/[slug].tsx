// pages/blog/[slug].tsx
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import { toast } from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogPostPage() {
    const { query } = useRouter();
    const [post, setPost] = useState<BlogPost | null>(null);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (error) {
            console.error('Blog post fetch error', error);
            toast.error('⚠️ Post not found', { icon: '📄', duration: 4000 });
        }
    }, [error]);

    useEffect(() => {
        if (query.slug) {
            fetch('/api/get-post?slug=$query.slug')
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
            <h1>{post.title}</h1>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}