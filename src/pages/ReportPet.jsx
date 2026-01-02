 import React, { useState } from "react"; // Importa useState
import TextField from "../ui/Textfield.jsx";
import Button from "../ui/Button.jsx";
import usePetReport from "../hooks/usePetReport"; // Asegurate de la ruta correcta
import { reportPet } from '../lib/api';

const ReportPet = () => {
  const {
    petName,
    setPetName,
    petDescription,
    setPetDescription,
  } = usePetReport();

  const [successMessage, setSuccessMessage] = useState(""); // Estado para el mensaje de éxito

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await reportPet({ name: petName, description: petDescription });
      console.log("Mascota reportada:", response);
      setSuccessMessage("Mascota reportada con éxito!"); // Mensaje de éxito
      setPetName("");
      setPetDescription("");
    } catch (error) {
      console.error("Error al reportar mascota:", error);
      setSuccessMessage(""); // Limpiar el mensaje en caso de error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reportar Mascota Perdida</h2>
      <TextField
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
        placeholder="Nombre de la mascota"
      />
      <TextField
        value={petDescription}
        onChange={(e) => setPetDescription(e.target.value)}
        placeholder="Descripción"
      />
      <Button type="submit">Reportar</Button>
      {successMessage && <p>{successMessage}</p>} {/* Muestra el mensaje si existe */}
    </form>
  );
};

export default ReportPet;
