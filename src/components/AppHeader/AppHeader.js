import React from 'react';
import ted_logo from './ted_logo.png';
import './AppHeader.css';

function AppHeader() {
  return (
    <header className="Header">
      <img src={ted_logo} className="HeaderLogo-Main" alt="logo" />
      <p className="HeaderLogo-Sub">OPEN<strong>SOURCE</strong></p>
      <div className="Header-BylineWrapper">
        <p className="Header-Byline">We use and love open-source software.</p>
        <p className="Header-Byline">Check out some of our libraries below.</p>
      </div>
    </header>
  );
}

export default AppHeader;
