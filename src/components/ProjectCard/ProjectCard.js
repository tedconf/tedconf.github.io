import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({title, description, url}) => {
  return (
    <li className="ProjectCard">
      <a href={url} className="ProjectCardLink">
        <h3 className="ProjectCard-Title">{title}</h3>
        <p className="ProjectCard-Description">{description}</p>
      </a>
    </li>
  );
}

export default ProjectCard;
