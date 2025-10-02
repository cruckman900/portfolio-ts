// pages/blog/admin.tsx
import { useState, useEffect } from 'react'
import LexicalEditor from '@/components/ui/LexicalEditor'
import { toast } from 'react-hot-toast'

export default function AdminPage() {
  const [authorized, setAuthorized] = useState(false)
  const [contentJson, setContentJson] = useState('')

  // TODO: the entire page

  useEffect(() => {
    fetch('/api/verify').then(res => {
      if (res.ok) setAuthorized(true)
      else toast.error('Access denied')
    })
  }, [])

  // useEffect(() => {
  //   if (contentJson.length > 0) console.log('contentJson', contentJson)
  // }, [contentJson])

  if (!authorized) return <p>Checking access...</p>

  return (
    <div>
      <h1>Blog Admin</h1>
      <LexicalEditor onChange={setContentJson} />
      {/* <button onClick={() => console.log('Submit JSON:', contentJson)}>
        Submit Post
      </button> */}
      <pre>{contentJson}</pre>
    </div>
  )
}
