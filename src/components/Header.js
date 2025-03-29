import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isHome, setIsHome] = useState(true);
  
  // Enlaces de redes sociales
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/efrainsalzar',
      icon: 'fa-github',
      className: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/efrain-salazar-santos-37ab23300/',
      icon: 'fa-linkedin',
      className: 'linkedin'
    }
  ];

  // Effect para detectar cuando estamos en la sección home
  useEffect(() => {
    const handleScroll = () => {
      // Obtener el elemento home
      const homeSection = document.querySelector('#home');
      
      if (homeSection) {
        // Obtener la posición y dimensiones del elemento home
        const homeSectionRect = homeSection.getBoundingClientRect();
        
        // Si estamos en la sección home (el top está visible o apenas empezamos a scrollear)
        // Consideramos un pequeño margen para la transición
        const isInHomeSection = homeSectionRect.top >= -100 && homeSectionRect.bottom > 0;
        
        setIsHome(isInHomeSection);
      }
    };

    // Ejecutar al inicio para establecer el estado correcto
    handleScroll();
    
    // Agregar evento de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Limpiar el evento al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <div className={`header-container ${isHome ? 'transparent' : ''}`}>
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