// components/NavLinks.tsx
import Link from 'next/link'
import navlinks from '@/data/links.json'
import { useRouter } from 'next/router'
import styles from './Navlinks.module.scss'

export default function NavLinks({ onClick }: { onClick?: () => void }) {
    const router = useRouter()

    const isActive = (url: string) => {
        // Normalize to ignore query/hash
        const path = router.asPath.split('?')[0].split('#')[0]

        if (url === '/') {
            return path === '/'
        }

        return path === url || path.startsWith(`${url}/`)
    }

    return (
        <>
            {navlinks.map((nav, i) => (
                <div className={styles.link} key={i}>
                    {isActive(nav.url) ? (
                        <span className="link-text-active">
                            <i className={nav.icon}></i>{nav.label}
                        </span>
                    ) : (
                        <Link className="link-text" href={nav.url} onClick={onClick}>
                            <i className={nav.icon}></i>{nav.label}
                        </Link>
                    )}
                </div>
            ))}
        </>
    )
}
