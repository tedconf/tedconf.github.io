import React from 'react';
import ReactDOM from 'react-dom';
import ProjectGroups from './ProjectGroups';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectGroups />, div);
  ReactDOM.unmountComponentAtNode(div);
});
