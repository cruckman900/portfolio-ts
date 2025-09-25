// components/LegacyLevelBadge.tsx
import styles from './ProjectEditor.module.scss';

interface LegacyLevelBadgeProps {
    legacyLevel: string;
}

export default function LegacyLevelBadge({ legacyLevel }: LegacyLevelBadgeProps) {
  const label = legacyLevel
    ? `☣️ Legacy Level: ${legacyLevel}`
    : '⚠️ No legacy level set';

  return (
    <span className={styles[`legacy-${legacyLevel}`]}>
      {label}
    </span>
  );
}
