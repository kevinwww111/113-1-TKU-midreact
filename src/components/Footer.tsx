import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Movie Info. All rights reserved.</p>
      <p>
        Powered by <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB</a>
      </p>
    </footer>
  );
};

export default Footer;