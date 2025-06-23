import React from 'react';
import './Projects.css';

// Importa las imágenes de tus proyectos
import Temp_chess from '../assets/images/Kotlin_app_temp.png';
import SDL_games from '../assets/images/View_SDL_games.png';
import Temp_hospital from '../assets/images/hospital.png';

function Projects() {
  const allProjects = [
    {
      title: "Sistema Web para Hospital",
      description: "Diseñé y desarrollé una página web informativa para un hospital proptotipo, integrando un backend en Node.js y un frontend en Vue.js. La plataforma permite mostrar servicios médicos, departamentos y horarios de atención.",
      repo: "https://github.com/efrainsalzar/hospital-web",
      tech: ["Node.js", "Express", "MySQL", "Vue 3", "Vuetify", "Axios", "Vite"],

      image: Temp_hospital 
    },
    {
      title: "Games Development in SDL with C++",
      description: "Desarrollé un videojuego interactivo utilizando la biblioteca SDL en C++, centrándome en la física del juego y la lógica de eventos en tiempo real.",
      repo: "https://github.com/efrainsalzar?tab=repositories",
      tech: ["C++", "SDL", "Game Loop", "Physics", "2D Rendering"],
      image: SDL_games
    },
    {
      title: "Mobile App Development with Kotlin",
      description: "Desarrollé una aplicación móvil para Android utilizando Kotlin, con un enfoque en la interfaz de usuario y la interacción con servicios web. Conectada a base de datos Fire Base.",
      repo: "https://github.com/efrainsalzar/TemporizadorChess",
      tech: ["Kotlin", "Android", "Firebase", "UI/UX", "Mobile Development"],
      image: Temp_chess 
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
      <div className="coming-soon">
        <p>Más proyectos en desarrollo.</p>
      </div>
    </section>
  );
}

export default Projects;
