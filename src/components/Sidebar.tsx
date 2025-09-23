import React from 'react';
import { Skill } from '@/types/resume';

import '../styles/sidebar.scss';

interface Props {
    skills: Skill[];
    education: string[];
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
        <ul>{education.map((edu, i) => <li key={i}>{edu}</li>)}</ul>
    </aside>
);

export default Sidebar;