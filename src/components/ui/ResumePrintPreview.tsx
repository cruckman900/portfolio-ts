import styles from './ResumePrintPreview.module.scss'

export default function ResumePrintPreview() {
    const handlePrint = () => {
        window.print()
    }

    return (
        <div className={styles.preview}>
            <button onClick={handlePrint}>Print Resume →</button>
        </div>
    )
}
