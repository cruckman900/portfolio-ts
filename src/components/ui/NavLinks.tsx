// components/NavLinks.tsx
import Link from 'next/link';
import navlinks from '@/data/links.json';
import { useRouter } from 'next/router';

export default function NavLinks({ onClick }: { onClick?: () => void; }) {
    const router = useRouter();

    return (
        <>
            {navlinks.map((nav, i) => (
                <div className="link" key={i}>
                    {router.asPath === nav.url ? (
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