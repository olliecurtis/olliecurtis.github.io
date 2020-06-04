import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="Header">
    <div>
      <a href="/" className="Header_item">
        About
      </a>
      <a href="/" className="Header_item">
        Projects
      </a>
      <a href="/" className="Header_item">
        Contact
      </a>
    </div>
  </header>
);

export default Header;
