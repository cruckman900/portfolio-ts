import { useState } from 'react';
import '../../styles/ui/ResponsibilitiesInput.scss';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export default function ResponsibilitiesInput({ value, onChange }: Props) {
    const [focused, setFocused] = useState(false);

    const lines = value
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean);

    return (
        <div className={`responsibilities-input ${focused ? 'focused' : ''}`}>
            <label>Responsibilities</label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Enter one responsibility per line"
            />
            <ul className="preview-list">
                {lines.map((line, idx) => (
                    <li key={idx} className="hazard-item">
                        ⚠ {line}
                    </li>
                ))}
            </ul>
        </div>
    );
}