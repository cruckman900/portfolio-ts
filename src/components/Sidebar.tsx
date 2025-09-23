import React, { ReactNode } from 'react';
import Section from './Section';
import { Skill, Education } from '@/types/resume';

import '../styles/sidebar.scss';

interface Props {
    skills: Skill[];
    education: Education[];
    children: ReactNode;
};

const Sidebar: React.FC<Props> = ({ skills, education, children }) => (
    <div className="sidebar">
        {children}

        <Section class_from_parent="" title="Core Competencies" icon="fas fa-key">
            <>
            {skills.map((skill, i) => 
                (
                    <div className='sidebar-content' key={i}>
                        <h3>{skill.section}</h3>
                        <div>{skill.content}</div>
                    </div>
                )
            )}
            </>
        </Section>

        <Section class_from_parent="pb-before" title="Education" icon="fas fa-graduation-cap">
            <>
            {education.map((edu, i) => 
                (
                    <div className='sidebar-content' key={i}>
                        <div><i>{edu.dates}</i></div>
                        <div>{edu.degree}</div>
                        <h3><a href={edu.url} target='_blank'>{edu.school}</a></h3>
                    </div>
                )
            )}
            </>
        </Section>
    </div>
);

export default Sidebar;