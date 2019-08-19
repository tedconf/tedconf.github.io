import React from 'react';
import './ProjectGroup.css';
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectGroup = ({name, projects}) => {
  return (
    <div className="ProjectGroup">
      <h2 className="ProjectGroup-Name">{name}</h2>
      <ul className="ProjectCards">
        {projects ? projects.map((project) => <ProjectCard key={project.title} {...project} />) : ''}
      </ul>
    </div>
  );
}

export default ProjectGroup;
