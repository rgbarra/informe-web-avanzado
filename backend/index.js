const express = require('express');
const cors = require('cors'); 
require('dotenv').config();

const app = express();

// 1. Configurar CORS (Debe ir primero)
app.use(cors()); 

// 2. Middleware para JSON
app.use(express.json());

// 3. Rutas - Importamos y usamos
// Si weatherRoutes ya define sus endpoints, aquí solo definimos el prefijo base
const weatherRoutes = require('./routes/weatherRoutes');
app.use('/api/v1/weather', weatherRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});