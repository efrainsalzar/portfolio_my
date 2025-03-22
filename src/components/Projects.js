import React, { useRef } from 'react';
import './Projects.css';

function Projects() {
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "Games Development in SDL with C++",
      description: "Desarrollé un videojuego interactivo utilizando la biblioteca SDL en C++, centrándome en la física del juego y la lógica de eventos en tiempo real.",
      repo: "https://github.com/tuusuario/game-sdl-cpp"
    },
    {
      title: "Artificial Intelligence for Data Prediction",
      description: "Implementé un modelo de IA para predecir tendencias de mercado usando aprendizaje supervisado y técnicas de análisis de datos.",
      repo: "https://github.com/tuusuario/ai-data-prediction"
    },
    {
      title: "Mobile App Development with Kotlin",
      description: "Desarrollé una aplicación móvil para Android utilizando Kotlin, con un enfoque en la interfaz de usuario y la interacción con servicios web. Conectada a base de datos Fire Base.",
      repo: "https://github.com/tuusuario/kotlin-mobile-app"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Mis Proyectos</h2>
      <div className="projects-container" ref={scrollRef}>
        <div className="projects-scroll">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-button">
                  Ver en GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;