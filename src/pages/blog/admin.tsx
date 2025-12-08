import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import LexicalEditor from '@/components/ui/LexicalEditor'
import { toast } from 'react-hot-toast'
import styles from './admin.module.scss'

export default function AdminPage() {
  const router = useRouter()
  const { slug } = router.query

  const [authorized, setAuthorized] = useState(false)
  const [form, setForm] = useState({
    slug: '',
    title: '',
    content_markdown: '',   // <-- use markdown consistently
    marketing: '',
    excerpt: '',
    author: '',
    tags: '',
  })

  // Check localStorage for auth
  useEffect(() => {
    const authData = localStorage.getItem('admin_auth')
    if (authData) {
      const { expiresAt } = JSON.parse(authData)
      if (Date.now() < expiresAt) {
        setAuthorized(true)
        return
      } else {
        localStorage.removeItem('admin_auth')
      }
    }

    const code = prompt('Enter admin code:')
    if (!code) {
      toast.error('Unauthorized')
      return
    }

    fetch('/api/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: code }),
    })
      .then(res => {
        if (res.ok) {
          setAuthorized(true)
          localStorage.setItem(
            'admin_auth',
            JSON.stringify({
              token: code,
              expiresAt: Date.now() + 3 * 60 * 60 * 1000, // 3 hours
            }),
          )
          toast.success('Authorized')
        } else {
          toast.error('Unauthorized')
        }
      })
      .catch(() => toast.error('Verification failed'))
  }, [])

  useEffect(() => {
    if (slug) {
      fetch(`/api/get-post?slug=${slug}`)
        .then(res => res.json())
        .then(data => setForm(data))
        .catch(() => toast.error('Post not found'))
    }
  }, [slug])

  useEffect(() => {
    if (slug) {
      fetch(`/api/get-post?slug=${slug}`)
        .then(res => res.json())
        .then(data => {
          setForm({
            ...data,
            marketing: JSON.stringify(data.marketing, null, 2), // pretty JSON
            content_markdown: data.content || '',      // ensure markdown string
          })
        })
        .catch(() => toast.error('Post not found'))
    }
  }, [slug])

  if (!authorized) return <p>Checking access...</p>

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()

    let marketingObj = {}
    try {
      marketingObj = JSON.parse(form.marketing)
    } catch {
      toast.error('Marketing JSON is invalid')
      return
    }

    const payload = { ...form, marketing: marketingObj }

    const endpoint = slug ? '/api/update-post' : '/api/create-post'
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      toast.success('Post saved!')
      router.push('/blog')
    } else {
      toast.error('Failed to save post')
    }
  }

  return (
    <div className={styles.adminPage}>
      <h1>{slug ? 'Edit Blog Post' : 'New Blog Post'}</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <input
            name="slug"
            value={form.slug}
            onChange={handleChange}
            placeholder="Slug"
            required
          />
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <textarea
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            placeholder="Excerpt"
          />
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Author"
          />
          <input
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="Tags (comma separated)"
          />
          <textarea
            name="marketing"
            value={form.marketing}
            onChange={handleChange}
            placeholder="Marketing JSON"
          />

          <div className={styles.fields}>
            <label>Content</label>
            <LexicalEditor
              initialContent={form.content_markdown || ''}   // pass markdown string
              onChange={val => setForm({ ...form, content_markdown: val })}
            />
          </div>

          <div className={styles.actions}>
            <button className={styles.submit} type="submit">Submit</button>
            <button
              className={styles.cancel}
              type="button"
              onClick={() => router.push('/blog')}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
