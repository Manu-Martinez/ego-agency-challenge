// server.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; 

const app = express();
const port = 3000;
app.use(cors());



// Ruta para obtener todos los modelos
app.get('/api/models/', async (req, res) => {
  try {
    const response = await fetch('https://challenge.egodesign.dev/api/models'); 
    if (!response.ok) {
      throw new Error('Error fetching models from external API');
    }
    const models = await response.json();
    res.json(models);
  } catch (error) {
    console.error('Error fetching models:', error);
    res.status(500).send('Error fetching models');
  }
});

// Ruta para obtener los detalles de un modelo 
app.get('/api/models/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`https://challenge.egodesign.dev/api/models/${id}`); 
    if (!response.ok) {
      throw new Error('Error fetching model details from external API');
    }
    const modelDetails = await response.json();
    res.json(modelDetails);
  } catch (error) {
    console.error('Error fetching model details:', error);
    res.status(500).send('Error fetching model details');
  }
});


app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
