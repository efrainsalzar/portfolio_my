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
            Soy estudiante de <span className="highlight">Ingeniería de Sistemas</span> con experiencia en el <span className="highlight">desarrollo de software</span>
            , ciberseguridad y análisis de datos
            . Me especializo en crear soluciones innovadoras utilizando tecnologías modernas
            , con un enfoque en eficiencia y seguridad
            . A lo largo de mis proyectos, he aplicado metodologías ágiles para asegurar que el software sea escalable y fácil de mantener.
            <br/><br/>

            En mis proyectos, siempre busco aplicar las mejores prácticas de desarrollo, garantizando un 
            código limpio y bien estructurado. Me esfuerzo por implementar <span className="highlight">soluciones seguras</span>
            , adaptadas a las necesidades del cliente y siempre con un enfoque en la <span className="highlight">optimización</span>. 
            Si deseas conocer más sobre mis proyectos o discutir posibles colaboraciones, no dudes en contactarme.
          </p>
        </div>
        <hr className="linea-horizontal"></hr>
      </div>
    </section>
  );
}

export default About;
