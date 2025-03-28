import React from "react";
import "./Footer.css";

function Footer() {

  const socialLink = [
    {
      name: 'GitHub',
      url: 'https://github.com/miusuario',
      icon: 'fa-github',
      className: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/miusuario',
      icon: 'fa-linkedin',
      className: 'linkedin'
    },
    {
      name: 'X',
      url: 'https://x.com/',
      icon: 'fa-times',
      className: 'x'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>inspirado en:&nbsp;
          <a href="https://cristianorrego.dev" target="_blank" rel="noopener noreferrer">
            cristianorrego.dev
          </a>
        </p>
        <div className="social-links">
          {socialLink.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-logo ${link.className}`}
            >
              <i className={`fa ${link.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
