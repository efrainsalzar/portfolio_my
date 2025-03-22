import React from 'react';
import './Contact.css';

function Contact() {
  // Mapeo de colores para las redes sociales
  const socialColors = {
    linkedin: '#0077B5',
    github: '#333',
    email: '#D44638',
    twitter: '#1DA1F2',
    instagram: '#E4405F'
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/efrain-salazar-santos-37ab23300/',
      icon: 'fa-linkedin',
      className: 'linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/efrainsalzar',
      icon: 'fa-github',
      className: 'github'
    },
    /*{
      name: 'Email',
      url: 'mailto:tu-correo@dominio.com',
      icon: 'fa-envelope',
      className: 'email'
    },*/
    {
      name: 'X',
      url: 'https://x.com/Nirf13',
      icon: 'fa-twitter',
      className: 'twitter'
    },
    /*
      name: 'Instagram',
      url: 'https://instagram.com/tu-usuario',
      icon: 'fa-instagram',
      className: 'instagram'
    }*/
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
              className={`social-button ${link.className}`} 
              style={{ '--hover-color': socialColors[link.className] }}  // Aquí removimos el comentario
            >
              <i className={`fa ${link.icon}`}></i>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
