import React from 'react';
import './About.css';
import profilePic from '../assets/logo512.png';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre mí</h2>
          {/* Contenedor para imagen y botón */}
          <div className="about-image-button">
            <img src={profilePic} alt="Foto profesional" className="profile-pic" />
          </div>
          <p>
            Soy estudiante de Ingeniería de Sistemas con una gran pasión por el desarrollo de software,
            la ciberseguridad y el análisis de datos. Me encanta crear soluciones innovadoras utilizando
            tecnologías modernas y mejorar constantemente mis habilidades.
          </p>

          <p>
            Me esfuerzo en desarrollar software eficiente y seguro mientras sigo aprendiendo nuevas tecnologías.
            Si deseas conocer más sobre mi trabajo, no dudes en contactarme.
          </p>
        </div>

        {/* Botón para descargar el currículum */}
        <div className="about-image-button">
          <a href="/path-to-your-cv.pdf" download className="cv-button">Descargar CV</a>
        </div>
      </div>
    </section>
  );
}

export default About;
