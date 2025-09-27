// components/Breadcrumbs.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Breadcrumbs() {
  const { pathname, query } = useRouter();
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const isDynamic = segment.startsWith('[') && segment.endsWith(']');
    const paramName = segment.replace(/\[|\]/g, '');
    const label = isDynamic
      ? decodeURIComponent(query[paramName]?.toString() || paramName)
      : segment.replace(/-/g, ' ');

    const href = '/' + segments.slice(0, index + 1).map(s => {
      if (s.startsWith('[') && s.endsWith(']')) {
        const key = s.replace(/\[|\]/g, '');
        return query[key] || key;
      }
      return s;
    }).join('/');

    return (
      <li key={href}>
        {index < segments.length - 1 ? (
          <Link href={href}>{label}</Link>
        ) : (
          <span>{label}</span>
        )}
      </li>
    );
  });
  return (
    <nav aria-label="Breadcrumb" style={{ backgroundColor: 'var(--surface)', color: 'var(--text)', margin: 0, padding: 0 }}>
      <ul style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', padding: '0.5rem', paddingLeft: '2rem', margin: 0 }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        {segments.length > 0 && <span>/</span>}
        {crumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            {crumb}
            {i < segments.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
