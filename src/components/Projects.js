// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Games Development in SDL with C++",
      description: "Desarrollé un videojuego interactivo utilizando la biblioteca SDL en C++, centrándome en la física del juego y la lógica de eventos en tiempo real.",
      image: "https://via.placeholder.com/300x200?text=Videojuego+SDL",
    },
    {
      title: "Artificial Intelligence for Data Prediction",
      description: "Implementé un modelo de IA para predecir tendencias de mercado usando aprendizaje supervisado y técnicas de análisis de datos.",
      image: "https://via.placeholder.com/300x200?text=IA+Predicción",
    },
    {
      title: "Mobile App Development with Kotlin",
      description: "Desarrollé una aplicación móvil para Android utilizando Kotlin, con un enfoque en la interfaz de usuario y la interacción con servicios web. conectada a base de datos Fire Base",
      image: "https://via.placeholder.com/300x200?text=Análisis+de+Datos",
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Mis Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
