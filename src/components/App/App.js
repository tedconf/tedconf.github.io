import React from 'react';
import AppHeader from '../AppHeader/AppHeader'
import ProjectGroups from '../ProjectGroups/ProjectGroups'
import Footer from '../Footer/Footer';
import projectData from '../../data/projects.json';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <ProjectGroups projectGroups={projectData.groups} />
      <Footer />
    </div>
  );
}

export default App;
