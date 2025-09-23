import { ExperienceItem } from '@/types/resume';
import React from 'react';

interface Props {
    experience: ExperienceItem[];
}

const Achievements: React.FC<Props> = ({ experience }) => (
    <>
    {experience.map((exp, i) => 
        (
            <article key={i}>
                <h3>{exp.title} &mdash; {exp.company}</h3>
                <div><i>{exp.dates}</i></div>
                <ul>
                    {exp.details.map((item, j) => (
                        <li key={j}>{item}</li>
                    ))}
                </ul>
            </article>
        )
    )}
    </>
)

export default Achievements;