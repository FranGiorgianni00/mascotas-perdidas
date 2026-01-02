 // /hooks/usePetReport.js
import { useState } from "react";
import { reportPet } from '../lib/api'; // Asegurate de la ruta correcta

const usePetReport = () => {
  const [petName, setPetName] = useState("");
  const [petDescription, setPetDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const petData = {
        name: petName,
        description: petDescription,
      };

      const response = await reportPet(petData);
      console.log('Mascota reportada:', response);
      // Aquí podrías agregar un mensaje de éxito o limpiar el formulario
    } catch (error) {
      console.error('Error al reportar la mascota:', error);
      // Maneja el error, por ejemplo, mostrando un mensaje al usuario
    }
  };

  return {
    petName,
    setPetName,
    petDescription,
    setPetDescription,
    handleSubmit,
  };
};

export default usePetReport;
