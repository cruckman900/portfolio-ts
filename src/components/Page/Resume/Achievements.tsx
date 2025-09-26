import { Achievement } from '@/types/resume';
import React from 'react';

interface Props {
    achievements: Achievement[];
}

const Achievements: React.FC<Props> = ({ achievements }) => (
    <>
    {achievements.map((ach, i) => 
        (
            <div key={i}>
                <h3>{ach.category}</h3>
                <ul>
                    {ach.items.map((item, j) => (
                        <li key={j}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    )}
    </>
)

export default Achievements;