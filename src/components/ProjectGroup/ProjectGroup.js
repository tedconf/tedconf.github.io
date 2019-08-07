import React from 'react';
import './ProjectGroup.css';
import ProjectCard from '../ProjectCard/ProjectCard'

function ProjectGroup({name, projects}) {
  return (
    <div className="ProjectGroup">
      <h2 className="ProjectGroup-Name">{name}</h2>
      <div className="ProjectCards">
        {projects ? projects.map((project, idx) => <ProjectCard key={idx} title={project.title} desc={project.description} url={project.url} />) : ''}
      </div>
    </div>
  );
}

export default ProjectGroup;
