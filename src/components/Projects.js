// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Desarrollo de Videojuego en SDL con C++",
      description: "Desarrollé un videojuego interactivo utilizando la biblioteca SDL en C++, centrándome en la física del juego y la lógica de eventos en tiempo real.",
      image: "https://via.placeholder.com/300x200?text=Videojuego+SDL",
    },
    {
      title: "Inteligencia Artificial para Predicción de Datos",
      description: "Implementé un modelo de IA para predecir tendencias de mercado usando aprendizaje supervisado y técnicas de análisis de datos.",
      image: "https://via.placeholder.com/300x200?text=IA+Predicción",
    },
    {
      title: "Análisis de Datos con Python",
      description: "Realicé análisis de grandes volúmenes de datos utilizando Python, con bibliotecas como Pandas y Matplotlib, para generar insights valiosos para la toma de decisiones.",
      image: "https://via.placeholder.com/300x200?text=Análisis+de+Datos",
    },
    {
      title: "Desarrollo Web Full-Stack",
      description: "Desarrollé una aplicación web full-stack usando React.js y Node.js, implementando una API RESTful y una interfaz de usuario interactiva.",
      image: "https://via.placeholder.com/300x200?text=Desarrollo+Web",
    },
    {
      title: "Redes Cisco - Configuración de Routers",
      description: "Configuré routers y switches Cisco para la creación de redes locales, aplicando técnicas de enrutamiento y seguridad.",
      image: "https://via.placeholder.com/300x200?text=Redes+Cisco",
    },
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
