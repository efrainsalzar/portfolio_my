// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} - Tu Nombre o Tu Marca. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:tu-correo@dominio.com">Correo Electrónico</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
