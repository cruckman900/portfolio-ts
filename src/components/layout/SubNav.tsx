import { useRouter } from 'next/router'
import ThemeSwitcher from '../ui/ThemeSwitcher'
import Breadcrumbs from '../ui/Breadcrumbs'
import ResumePrintPreview from '../ui/ResumePrintPreview'
import styles from './SubNav.module.scss'

export default function SubNav() {
    const router = useRouter()
    const isResumePage = router.pathname === '/resume'
    return (
        <div className={styles.container}>
            <Breadcrumbs />
            <div className={styles.print}>
                {isResumePage && <ResumePrintPreview />}
            </div>
            <ThemeSwitcher />
        </div>
    )
}
