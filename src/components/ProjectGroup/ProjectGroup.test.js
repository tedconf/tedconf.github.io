import React from 'react';
import ReactDOM from 'react-dom';
import ProjectGroup from './ProjectGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
