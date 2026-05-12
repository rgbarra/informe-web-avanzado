const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CONFIGURACIÓN DE CORS PROFESIONAL
// Aquí permitimos tu sitio de Netlify y tu entorno local
const whitelist = [
  'http://localhost:5173',
  'https://br-trabajo-u4.netlify.app' 
];

const corsOptions = {
  origin: function (origin, callback) {
    // Permitir peticiones sin origen (como Postman) o dentro de la whitelist
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Bloqueado por política CORS de Raúl Barra - Origen no autorizado'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Rutas
const weatherRoutes = require('./routes/weatherRoutes');
app.use('/api/v1/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));