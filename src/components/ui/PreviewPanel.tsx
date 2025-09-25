// components/PreviewPanel
import styles from './ProjectEditor.module.scss';

interface PreviewPanelProps {
    animation: string;
}

export default function PreviewPanel({ animation }: PreviewPanelProps) {
    return (
        <div className={`${styles.preview} ${styles[animation]}`}>
            Preview: {animation}
        </div>
    )
}