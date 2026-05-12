const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const whitelist = [
  'http://localhost:5173',
  'https://br-trabajo-u4.netlify.app' // Tu URL de Netlify
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Error de CORS: Origen no permitido por CodeMentor'));
    }
  }
}));

app.use(express.json());

// Importante: Asegúrate de que tus rutas usen process.env.API_KEY
const weatherRoutes = require('./routes/weatherRoutes');
app.use('/api/v1/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor listo en puerto ${PORT}`));