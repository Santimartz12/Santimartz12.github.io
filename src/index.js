//Importacion de Recursos React
import React from 'react';
import ReactDOM from 'react-dom/client';

//Reseteo de estilos y establecimiento de estilos
import './styles/reset.css'
import './styles/variables.css'

import './styles/header.css'
import './styles/footer.css'
import './styles/inicio.css'
import './styles/skills.css'
import './styles/curriculum.css'
import './styles/contacto.css'
import './styles/trabajos.css'
import './styles/error.css'

//Importacion de App
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);