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
            Soy estudiante de Ingeniería de Sistemas apasionado por el desarrollo de software, 
            la ciberseguridad y el análisis de datos. A lo largo de mi carrera, he adquirido 
            experiencia en diversos lenguajes de programación como C++, Java, Python y Kotlin.
          </p>
          
          <p>Mi experiencia técnica abarca:</p>
          <ul>
            <li>Bases de datos (MySQL, PostgreSQL, MongoDB)</li>
            <li>Microservicios y Docker</li>
            <li>Redes Cisco</li>
            <li>Inteligencia Artificial</li>
            <li>Desarrollo web y de videojuegos</li>
            <li>Hacking ético</li>
          </ul>
          
          <p>
            Me enfoco en crear soluciones tecnológicas eficientes mientras continúo ampliando 
            mis conocimientos en las áreas más innovadoras de la ingeniería de sistemas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;