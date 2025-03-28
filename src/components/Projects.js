import React from 'react';
import './Projects.css';

import imagenesP from '../assets/images/Devs.jpg';

function Projects() {
  const allProjects = [
    {
      title: "Games Development in SDL with C++",
      description: "Desarrollé un videojuego interactivo utilizando la biblioteca SDL en C++, centrándome en la física del juego y la lógica de eventos en tiempo real.",
      repo: "https://github.com/tuusuario/game-sdl-cpp",
      tech: ["C++", "SDL", "Physics", "Game Development"],
      image: imagenesP // Reemplaza con la ruta de la imagen
    },
    {
      title: "Artificial Intelligence for Data Prediction",
      description: "Implementé un modelo de IA para predecir tendencias de mercado usando aprendizaje supervisado y técnicas de análisis de datos.",
      repo: "https://github.com/tuusuario/ai-data-prediction",
      tech: ["Python", "AI", "Machine Learning", "Data Analysis"],
      image: imagenesP // Reemplaza con la ruta de la imagen
    },
    {
      title: "Mobile App Development with Kotlin",
      description: "Desarrollé una aplicación móvil para Android utilizando Kotlin, con un enfoque en la interfaz de usuario y la interacción con servicios web. Conectada a base de datos Fire Base.",
      repo: "https://github.com/tuusuario/kotlin-mobile-app",
      tech: ["Kotlin", "Android", "Firebase", "Mobile Development"],
      image: imagenesP // Reemplaza con la ruta de la imagen
    },
    {
      title: "Web Development with React and Node.js",
      description: "Construí una aplicación web usando React en el frontend y Node.js en el backend, con un enfoque en la creación de una API RESTful.",
      repo: "https://github.com/tuusuario/react-node-web-app",
      tech: ["React", "Node.js", "Express", "RESTful API"],
      image: imagenesP // Reemplaza con la ruta de la imagen
    },
    {
      title: "Database Management System with SQL",
      description: "Desarrollé un sistema de gestión de bases de datos utilizando SQL, con enfoque en optimización de consultas y diseño de bases de datos relacionales.",
      repo: "https://github.com/tuusuario/sql-database-system",
      tech: ["SQL", "Database Management", "Optimization"],
      image: imagenesP // Reemplaza con la ruta de la imagen
    }
    // Puedes agregar más proyectos aquí
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Mis Proyectos</h2>
      
      {/* Cuadro con scroll */}
      <div className="projects-scroll-container">
        <div className="projects-container">
          {allProjects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Imagen convertida en enlace */}
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              </a>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
