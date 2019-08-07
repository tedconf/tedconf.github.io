import React from 'react';
import './ProjectGroups.css';
import ProjectGroup from '../ProjectGroup/ProjectGroup';

function ProjectGroups({projectGroups}) {
  return (
    <div className="ProjectGroupsWrapper">
      <div className="ProjectGroups">
        {projectGroups ? projectGroups.map((group, idx) => <ProjectGroup key={idx} name={group.name} projects={group.projects} />) : ''}
      </div>
    </div>
  );
}

export default ProjectGroups;
