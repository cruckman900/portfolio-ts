// components/Breadcrumbs.tsx
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Breadcrumbs.module.scss'

export default function Breadcrumbs() {
  const { route, query } = useRouter()
  const segments = route.split('/').filter(Boolean)

  const crumbs = segments.map((segment, index) => {
    const isDynamic = segment.startsWith('[') && segment.endsWith(']')
    const paramName = segment.replace(/\[|\]/g, '')
    const label = isDynamic
      ? decodeURIComponent(query[paramName]?.toString() || paramName)
      : segment.replace(/-/g, ' ')

    const href = '/' + segments.slice(0, index + 1).map(s => {
      if (s.startsWith('[') && s.endsWith(']')) {
        const key = s.replace(/\[|\]/g, '')
        return query[key] || key
      }
      return s
    }).join('/')

    return (
      <li key={index}>
        {index < segments.length - 1 ? (
          <Link href={href}>{label}</Link>
        ) : (
          <span>{label}</span>
        )}
      </li>
    )
  })
  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ul role="list">
        <li>
          <Link href="/">home</Link>
        </li>
        {segments.length > 0 && <span>/</span>}
        {crumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span>/</span>}
            {crumb}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  )
}
