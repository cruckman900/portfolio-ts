// pages/blog/index.tsx
import { useEffect, useState } from 'react';
import Link from "next/link";
import { BlogPost } from '@/types/blog';
import toast from 'react-hot-toast';

export default function BlogIndex() {
    const [posts, setPosts] = useState<BlogPost[]>([])

    useEffect(() => {
        fetch('/api/get-posts')
            .then(res => res.json())
            .then(setPosts);
    }, []);

    if (posts.length === 0) {
        toast('No blog posts found yet.', { icon: '📭' })
    }

    return (
        <section>
            <h1>Blog</h1>

            {posts.length === 0 ? (
                <p>No blog posts yet. Stay tuned!</p>
            ) : (
                posts.map(post => (
                    <article key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`}>Read more</Link>
                    </article>
                ))
            )}
        </section>
    );
}