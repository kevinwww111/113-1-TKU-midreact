import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Movie Info</h1>
      <nav>
        <a href="#movies">Movies</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
};

export default Header;