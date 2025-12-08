import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import LexicalEditor from '@/components/ui/LexicalEditor'
import { toast } from 'react-hot-toast'

export default function AdminPage() {
  const router = useRouter()
  const { slug } = router.query

  const [authorized, setAuthorized] = useState(false)
  const [form, setForm] = useState({
    slug: '',
    title: '',
    content_json: '',
    marketing: '',
    excerpt: '',
    author: '',
    tags: ''
  })

  useEffect(() => {
    fetch('/api/verify').then(res => {
      if (res.ok) setAuthorized(true)
      else toast.error('Access denied')
    })
  }, [])

  useEffect(() => {
    if (slug) {
      fetch(`/api/get-post?slug=${slug}`)
        .then(res => res.json())
        .then(data => setForm(data))
        .catch(() => toast.error('Post not found'))
    }
  }, [slug])

  if (!authorized) return <p>Checking access...</p>

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    const endpoint = slug ? '/api/update-post' : '/api/create-post'
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (res.ok) {
      toast.success('Post saved!')
      router.push('/blog')
    } else {
      toast.error('Failed to save post')
    }
  }

  return (
    <div>
      <h1>{slug ? 'Edit Blog Post' : 'New Blog Post'}</h1>
      <input name="slug" value={form.slug} onChange={handleChange} placeholder="Slug" />
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <textarea name="excerpt" value={form.excerpt} onChange={handleChange} placeholder="Excerpt" />
      <input name="author" value={form.author} onChange={handleChange} placeholder="Author" />
      <input name="tags" value={form.tags} onChange={handleChange} placeholder="Tags (comma separated)" />
      <textarea name="marketing" value={form.marketing} onChange={handleChange} placeholder="Marketing JSON" />

      <LexicalEditor onChange={val => setForm({ ...form, content_json: val })} />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => router.push('/blog')}>Cancel</button>
    </div>
  )
}
