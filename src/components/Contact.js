// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se puede agregar la lógica para enviar el formulario, como un correo o una API.
    console.log('Formulario enviado:', formData);
    // Limpiar formulario
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Enviar</button>
      </form>

      <div className="contact-info">
        <h3>También puedes contactarme a través de:</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="mailto:tu-correo@dominio.com">Correo Electrónico</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
