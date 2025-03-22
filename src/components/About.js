import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre mí</h2>
          <p>
            Soy estudiante de Ingeniería de Sistemas con una gran pasión por el desarrollo de software, 
            la ciberseguridad y el análisis de datos. Me encanta crear soluciones innovadoras utilizando 
            tecnologías modernas y mejorar constantemente mis habilidades.
          </p>

          <h3>Habilidades y Tecnologías</h3>
          <ul>
            <li><strong>Bases de datos:</strong> MySQL, PostgreSQL, MongoDB</li>
            <li><strong>Backend:</strong> Node.js, Express, Docker, Microservicios</li>
            <li><strong>Redes y Seguridad:</strong> Configuración Cisco, Hacking ético</li>
            <li><strong>Inteligencia Artificial:</strong> Análisis de datos y modelos de predicción</li>
            <li><strong>Desarrollo:</strong> Web con React y desarrollo de videojuegos con C++ y SDL</li>
          </ul>

          <p>
            Me esfuerzo en desarrollar software eficiente y seguro mientras sigo aprendiendo nuevas tecnologías.
            Si deseas conocer más sobre mi trabajo, no dudes en contactarme.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
