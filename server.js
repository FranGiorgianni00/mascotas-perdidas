 const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/pets', (req, res) => {
  const pet = req.body;
  console.log('Mascota recibida:', pet);
  res.status(201).json({ message: 'Mascota reportada con éxito', pet });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
