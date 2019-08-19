import React from 'react';
import './ProjectGroups.css';
import ProjectGroup from '../ProjectGroup/ProjectGroup';

const ProjectGroups = ({projectGroups}) => {
  return (
    <div className="ProjectGroupsWrapper">
      <div className="ProjectGroups">
        {projectGroups ? projectGroups.map((group) => <ProjectGroup key={group.name} name={group.name} projects={group.projects} />) : ''}
      </div>
    </div>
  );
}

export default ProjectGroups;
