import React from 'react';
import { Skill, Education } from '@/types/resume';

import '../styles/sidebar.scss';

interface Props {
    skills: Skill[];
    education: Education[];
};

const Sidebar: React.FC<Props> = ({ skills, education }) => (
    <aside className="sidebar">
        <h2>Core Competencies</h2>
        {skills.map((skill, i) => 
            (
                <div className='sidebar-content' key={i}>
                    <h3>{skill.section}</h3>
                    <div>{skill.content}</div>
                </div>
            )
        )}

        <h2 className='pb-before'>Education</h2>
        {education.map((edu, i) => 
            (
                <div className='sidebar-content' key={i}>
                    <h3><a href={edu.url}>{edu.school}</a></h3>
                    <div>{edu.degree}</div>
                    <div><i>{edu.dates}</i></div>
                </div>
            )
        )}
    </aside>
);

export default Sidebar;