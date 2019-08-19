import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({title, desc, url}) => {
  return (
    <a href={url} className="ProjectCard">
      <h3 className="ProjectCard-Title">{title}</h3>
      <p className="ProjectCard-Description">{desc}</p>
    </a>
  );
}

export default ProjectCard;
