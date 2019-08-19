import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({title, desc, url}) => {
  return (
    <li className="ProjectCard">
      <a href={url} className="ProjectCardLink">
        <h3 className="ProjectCard-Title">{title}</h3>
        <p className="ProjectCard-Description">{desc}</p>
      </a>
    </li>
  );
}

export default ProjectCard;
