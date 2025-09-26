import React from 'react';
import { ProjectsList } from '@/types/resume';

interface Props {
    projectsList: ProjectsList[];
};

const ProjectList: React.FC<Props> = ({ projectsList }) => (
    <>
    {projectsList.map((projlist, i) =>
        (
            <article key={i}>
                <h3>{projlist.genre}</h3>
                {projlist.projects.map((project, j) =>
                (
                    <div key={j}>
                        <i>{project.name}</i>
                        <ul>
                            <li>{project.description}</li>
                            <li><strong>Tech: </strong>{project.tech}</li>
                        </ul>
                    </div>
                )
            )}
            </article>
        )
    )}
    </>
);

export default ProjectList;