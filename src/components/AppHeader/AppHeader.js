import React from 'react';
import ted_logo from './ted_logo.png';
import './AppHeader.css';

const AppHeader = () => {
  return (
    <header className="Header">
      <h1 className="HeaderWrapper">
        <img src={ted_logo} className="HeaderLogo-Main" alt="TED" />
        <p className="HeaderLogo-Sub">OPEN<strong>SOURCE</strong></p>
      </h1>
      <h2 className="Header-BylineWrapper">
        <p className="Header-Byline">We use and love open-source software.</p>
        <p className="Header-Byline">Check out some of our libraries below.</p>
      </h2>
    </header>
  );
}

export default AppHeader;
