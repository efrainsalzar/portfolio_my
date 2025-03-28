import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Home.css';
import profilePic from '../assets/logo512.png';

function Home() {

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>¡Hola, soy TarMi-Moon!</h1>
        <h2>Estudiante de Ingeniería de Sistemas | Desarrollador de Software</h2>
        <p>Apasionado por la tecnología, el desarrollo web y la inteligencia artificial.</p>

        {/* Enlaces a redes sociales */}
        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/efrain-salazar-santos-37ab23300/" 
             className="social-link linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/efrainsalzar" 
             className="social-link github" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="mailto:tu-correo@dominio.com" 
             className="social-link email">
            <FaEnvelope /> Email
          </a>
        </div>
      </div>

      <img src={profilePic} alt="Foto profesional" className="profile-pic" />
      
    </section>
  );
}

export default Home;