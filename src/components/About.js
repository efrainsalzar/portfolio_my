import React from "react";
import "./About.css";
import profilePic from "../assets/logo512.png";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre mí</h2>
          {/* Contenedor para imagen y botón */}
          <div className="about-image-button">
            <img
              src={profilePic}
              alt="Foto profesional"
              className="profile-pic"
            />
          </div>
          <p>
            Soy estudiante de{" "}
            <span className="highlight">Ingeniería de Sistemas</span> con
            experiencia práctica en proyectos de desarrollo de software. Me
            caracterizo por mi capacidad para adaptarme rápidamente, trabajar en
            equipo y asumir retos con responsabilidad. Conozco y aplico
            metodologías como <span className="highlight">Scrum</span>,{" "}
            <span className="highlight">Scrum-ban</span>,{" "}
            <span className="highlight">FDD</span> y{" "}
            <span className="highlight">DSDM</span>, lo que me permite aportar
            organización, enfoque ágil y capacidad de respuesta en entornos de
            trabajo colaborativo.
            <br />
            <br />
            Más allá de la programación, aporto una visión integral del proceso
            de desarrollo: desde la planificación y diseño hasta la entrega y
            mejora continua. Busco contribuir con soluciones eficientes,
            mantener una comunicación clara y aprender de cada experiencia para
            seguir creciendo como profesional.
          </p>
        </div>
        <hr className="linea-horizontal"></hr>
      </div>
    </section>
  );
}

export default About;
