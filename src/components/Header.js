import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  
  // Enlaces de redes sociales
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

  // Function to handle smooth scrolling
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Cierra el menú mobile después de hacer clic
    setMenuActive(false);
  };

  // Toggle para el menú hamburguesa
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <div className="header-container">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={menuActive ? 'active' : ''}>
          <ul className="nav-links">
            <li><a href="#home" onClick={handleNavClick}>Inicio</a></li>
            <li><a href="#projects" onClick={handleNavClick}>Proyectos</a></li>
            <li><a href="#about" onClick={handleNavClick}>Sobre mí</a></li>
            <li><a href="#tecnologias" onClick={handleNavClick}>Tecnologias</a></li>
          </ul>
        </nav>
        
        <div className="social-links-container">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`social-logo-header ${link.className}`}
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