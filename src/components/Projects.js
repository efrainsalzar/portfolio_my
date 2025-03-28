import React from 'react';
import './Projects.css';

// Importa las imágenes de tus proyectos
import imagenesP from '../assets/images/Devs.jpg';

function Projects() {
  const allProjects = [
    {
      title: "Games Development in SDL with C++",
      description: "Desarrollé un videojuego interactivo utilizando la biblioteca SDL en C++, centrándome en la física del juego y la lógica de eventos en tiempo real.",
      repo: "https://github.com/efrainsalzar?tab=repositories",
      /*preview: "#", // Agrega el link a la demo si tienes*/
      tech: ["C++", "SDL", "Physics", "Game Development"],
      image: imagenesP
    },
    {
      title: "Mobile App Development with Kotlin",
      description: "Desarrollé una aplicación móvil para Android utilizando Kotlin, con un enfoque en la interfaz de usuario y la interacción con servicios web. Conectada a base de datos Fire Base.",
      repo: "https://github.com/tuusuario/kotlin-mobile-app",
      tech: ["Kotlin", "Android", "Firebase", "Mobile Development"],
      image: imagenesP // Reemplaza con la ruta de la imagen
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Proyectos</h2>
      <div className="projects-container">
        {allProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-imagen-cuadro">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="buttons">
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn">🔗 Code</a>
                {/*<a href={project.preview} target="_blank" rel="noopener noreferrer" className="btn preview-btn">Preview</a>*/}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
