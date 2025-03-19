// src/components/Home.js
import React from 'react';
import './Home.css';
import profilePic from '../assets/logo512.png'; // Foto profesional

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <img src={profilePic} alt="Foto profesional" className="profile-pic" />
        <h1>¡Hola, soy Efrain Salazar Santos!</h1>
        <p>
          Desarrollador Web | Diseñador UI/UX | Apasionado por crear experiencias digitales increíbles.
        </p>
        <a href="#about" className="cta-button">Conoce más sobre mí</a>
      </div>
    </section>
  );
}

export default Home;
