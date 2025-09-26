// components/Breadcrumbs.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Breadcrumbs() {
  const { pathname } = useRouter();
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = decodeURIComponent(segment).replace(/-/g, ' ');

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
      <ul style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', padding: '0.5rem', paddingLeft: '1rem', margin: 0 }}>
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
