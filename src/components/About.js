// src/components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre mí</h2>
          <p>
            Soy [Tu Nombre], un desarrollador web apasionado por crear aplicaciones interactivas y
            fáciles de usar. Con [X años] de experiencia trabajando en
            proyectos de desarrollo frontend y backend.
          </p>

          <h3>Mis especialidades</h3>
          <ul>
            <li>React.js, JavaScript, TypeScript</li>
            <li>Node.js, Express</li>
            <li>HTML5, CSS3, Flexbox, Grid</li>
            <li>Bases de datos SQL/NoSQL (MongoDB, MySQL)</li>
            <li>Desarrollo responsive y mobile-first</li>
            <li>Gestión de proyectos con Git/GitHub</li>
            <li>Diseño UX/UI y prototipado con Figma</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
