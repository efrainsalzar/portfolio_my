import React from "react";
import "./Tecnologias.css";
/* frontend */
import htmlIcon from "../assets/icons/html-svgrepo-com.svg";
import cssIcon from "../assets/icons/css-3-svgrepo-com.svg";
import jsIcon from "../assets/icons/javascript-svgrepo-com.svg";
import reactIcon from "../assets/icons/react-svgrepo-com.svg";
import pythonIcon from "../assets/icons/python-svgrepo-com.svg";
import cplusplus from "../assets/icons/c-plus-plus-svgrepo-com.svg";
import javaIcon from "../assets/icons/java-svgrepo-com.svg";
import gitIcon from "../assets/icons/git-svgrepo-com.svg";
//import dockerIcon from "../assets/icons/docker-svgrepo-com.svg";
import nodejsIcon from "../assets/icons/nodejs-svgrepo-com.svg";
import posrgressIcon from "../assets/icons/postgresql-svgrepo-com.svg";
import kotlinIcon from "../assets/icons/kotlin-svgrepo-com.svg";
import mysqlIcon from "../assets/icons/mysql-svgrepo-com.svg";
import mongodbIcon from "../assets/icons/mongodb-svgrepo-com.svg";
//import gitgubIcon from "../assets/icons/github-svgrepo-com.svg";
//import tensoflowIcon from "../assets/icons/tensorflow-svgrepo-com.svg";
import vscodeIcon from "../assets/icons/vscode-svgrepo-com.svg";

const technologies = [
    { src: htmlIcon, name: "HTML" },
    { src: cssIcon, name: "CSS" },
    { src: jsIcon, name: "JavaScript" },
    { src: reactIcon, name: "React" },
    { src: cplusplus, name: "C++" },
    { src: gitIcon, name: "Git" },
    //{ src: dockerIcon, name: "Docker" },
    { src: nodejsIcon, name: "Node.js" },
    { src: pythonIcon, name: "Python" },
    { src: mysqlIcon, name: "MySQL" },
    { src: mongodbIcon, name: "MongoDB" },
    //{ src: gitgubIcon, name: "GitHub" },
    //{ src: tensoflowIcon, name: "TensorFlow" },
    { src: kotlinIcon, name: "Kotlin" },
    { src: vscodeIcon, name: "VS Code" },
    { src: javaIcon, name: "Java" },
    { src: posrgressIcon, name: "PostgreSQL" },
];

function Tecnologias() {
    return (
        <section id="tecnologias" className="technologies-section">
            <h2 className="technologies-title">Tecnologías</h2>
            <div className="technologies-content">
                {technologies.map((icon, index) => (
                    <div key={index} className="tech-icon-container">
                        <img src={icon.src} alt={icon.name} className="tech-icon" />
                        <p className="tech-name">{icon.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Tecnologias;
