const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CONFIGURACIÓN DE CORS PROFESIONAL
const whitelist = [
  'http://localhost:5173', // Para tus pruebas locales
  'https://br-trabajo-u4.netlify.app' // Tu URL de producción en Netlify
];

const corsOptions = {
  origin: function (origin, callback) {
    // Si el origen está en la whitelist o no hay origen (como Postman), permite
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Bloqueado por política CORS de Raúl Barra'));
    }
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

const weatherRoutes = require('./routes/weatherRoutes');
app.use('/api/v1/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor listo en puerto ${PORT}`));