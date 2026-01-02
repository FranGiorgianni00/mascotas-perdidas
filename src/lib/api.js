 
// lib/api.js
export const reportPet = async (petData) => {
  const response = await fetch('http://localhost:4000/pets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(petData),
  });

  if (!response.ok) {
    throw new Error('Error al reportar la mascota');
  }

  return await response.json(); // Retorna la respuesta en formato JSON
};
