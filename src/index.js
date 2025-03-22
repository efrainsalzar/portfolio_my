import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambia esta importación
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Usamos createRoot en lugar de render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
