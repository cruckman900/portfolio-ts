// pages/blog/index.tsx
import { useEffect, useState } from 'react';
import { BlogPost } from '@/types/blog';
import Layout from '@/components/layout/Layout';
import toast from 'react-hot-toast';

import { motion } from 'framer-motion';

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
                        <motion.a
                            href={`/blog/${post.slug}`}
                                whileHover={{ y: -2, scale: 1.02 }}
                                className="read-more"
                        >
                            Read more →
                        </motion.a>
                    </article>
                ))
            )}
        </section>
    );
}

// Define a custom layout for this page
BlogIndex.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
};
