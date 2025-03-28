import React from 'react';
import './Header.css';

const Header = () => {
  // Mapeo de colores para las redes sociales (se sigue usando por si se necesita para hover)
  const socialColors = {
    linkedin: '#0077B5',
    github: '#333',
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/miusuario',
      icon: 'fa-github',
      className: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/miusuario',
      icon: 'fa-linkedin',
      className: 'linkedin'
    }
  ];

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="#home">
            <img src="../assets/logo192.png" alt="Mi Logo" />
          </a>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        <div className="social-links-container">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`social-logo ${link.className}`} 
              style={{ '--hover-color': socialColors[link.className] }}  // Aplicando el color de cada red
            >
              <i className={`fa ${link.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
