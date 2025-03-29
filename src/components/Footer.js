import React from "react";
import "./Footer.css";

import logoX from "../assets/icons/x-social-media-logo-icon.svg";
import logoLinkedin from "../assets/icons/linkedin-app-icon.svg";

function Footer() {


  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          Inspirado en:&nbsp;
          <a href="https://cristianorrego.dev" target="_blank" rel="noopener noreferrer">
            cristianorrego.dev
          </a>
          &nbsp;&nbsp;
          <a href="https://porfolio.dev/" target="_blank" rel="noopener noreferrer">
            ./Midu
          </a>
        </p>

        <div className="social-links">
          {/* Icono de X */}
          <a href="https://x.com/Nirf13" target="_blank" rel="noopener noreferrer">
            <img src={logoX} alt="X" className="social-icon" />
          </a>
          {/* Icono de LinkedIn */}
          <a href="https://www.linkedin.com/in/efrain-salazar-santos-37ab23300/" target="_blank" rel="noopener noreferrer">
            <img src={logoLinkedin} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
