// components/ImpactBadge.tsx
import styles from './ProjectEditor.module.scss';

interface ImpactBadgeProps {
    impact: 'low' | 'medium' | 'high';
}

export default function ImpactBadge({ impact }: ImpactBadgeProps) {
    const label = {
        low: '🟢 Low Impact',
        medium: '🟡 Medium Impact',
        high: '🔴 High Impact',
    };

    return (
        <span className={styles[`impact-${impact}`]}>
            {label[impact]}
        </span>
    );
}