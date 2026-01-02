 import React from 'react';
import ReportPet from './pages/ReportPet'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div>
      <h1>¡Bienvenido a la app de mascotas perdidas!</h1>
      <ReportPet /> {/* Agregá esto para renderizar el componente */}
    </div>
  );
};

export default App;

