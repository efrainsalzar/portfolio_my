import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="#home">
            <img src="../assets/logo192.png" alt="Mi Logo" />
          </a>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;