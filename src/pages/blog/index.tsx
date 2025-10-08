// pages/blog/index.tsx
import { useEffect, useState } from 'react'
import { BlogPost } from '@/types/blog'
import BlogCard from '@/components/ui/BlogCard'
import Layout from '@/components/layout/Layout'
import toast from 'react-hot-toast'

// import { motion } from 'framer-motion'

export default function BlogIndex() {
    const [posts, setPosts] = useState<BlogPost[]>([])

    // useEffect(() => {
    //     fetch('/api/seed-post')
    // }, [])

    useEffect(() => {
        fetch('/api/get-posts')
            .then(res => res.json())
            .then(setPosts)
    }, [])

    if (posts.length === 0) {
        toast('No blog posts found yet.', { icon: '📭' })
    }

    return (
        <section>
            {posts.length === 0 ? (
                <p>No blog posts yet. Stay tuned!</p>
            ) : (
                posts.map(post => (
                    <BlogCard key={post.id} post={post} />
                ))
            )}
        </section>
    )
}

// Define a custom layout for this page
BlogIndex.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
}
