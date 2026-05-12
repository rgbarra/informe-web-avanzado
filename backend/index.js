const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importamos nuestras rutas modulares
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Bypass SSL para desarrollo (lo mantenemos según tu versión anterior)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// DEFINICIÓN DE RUTAS (Prefijo estándar /api/v1)
app.use('/api/v1/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("==============================================");
    console.log("✅ BACKEND MERN MODULAR INICIADO");
    console.log(`🌐 Endpoint: http://localhost:${PORT}/api/v1/weather`);
    console.log("==============================================");
});