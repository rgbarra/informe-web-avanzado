const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Lista blanca expandida para evitar bloqueos por protocolos o subdominios
const whitelist = [
  'http://localhost:5173',
  'https://br-trabajo-u4.netlify.app',
  'http://br-trabajo-u4.netlify.app' // A veces el navegador intenta sin S
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir peticiones sin origen (como Postman o apps móviles) 
    // o que estén en la lista blanca
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log("Origen bloqueado por CORS:", origin); // Esto saldrá en los logs de Render
      callback(new Error('Error de CORS: Origen no permitido por CodeMentor'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const weatherRoutes = require('./routes/weatherRoutes');
app.use('/api/v1/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor listo en puerto ${PORT}`));