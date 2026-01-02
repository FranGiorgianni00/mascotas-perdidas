 import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Asegurate que el nombre del archivo sea correcto
import './index.css'; // Importa tus estilos si los tenés

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
