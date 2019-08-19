import React from 'react';
import './Footer.css';
import footerLinks from '../../data/footer-links.json';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-Inner">
        <ul className="Footer-Nav">
          {footerLinks.map((item) => <li className="Footer-NavItem" key={item.title}>
            <a href={item.url}>{item.title}</a>
          </li>)}
        </ul>
        <p><a href="https://www.ted.com/"><span className="u-ted-font">TED.com</span></a></p>
      </div>
    </footer>
  );
}

export default Footer;
