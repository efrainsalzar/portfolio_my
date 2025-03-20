// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tu-perfil',
      icon: 'fab fa-linkedin-in',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/tu-usuario',
      icon: 'fab fa-github',
      color: '#333'
    },
    {
      name: 'Email',
      url: 'mailto:tu-correo@dominio.com',
      icon: 'far fa-envelope',
      color: '#D44638'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/tu-usuario',
      icon: 'fab fa-twitter',
      color: '#1DA1F2'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/tu-usuario',
      icon: 'fab fa-instagram',
      color: '#E4405F'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contacto</h2>
        <p className="contact-text">¿Quieres ponerte en contacto conmigo? Encuéntrame en las siguientes redes:</p>
        
        <div className="social-links-container">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button"
              style={{'--hover-color': link.color}}
            >
              <i className={link.icon}></i>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;