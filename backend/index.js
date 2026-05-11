const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');

// 1. CARGAR VARIABLES DE ENTORNO
// Importante: Esto debe ir antes de cualquier otra lógica que use process.env
dotenv.config();

// 2. IMPORTAR CONFIGURACIONES Y RUTAS
const connectDB = require('./config/db');
const weatherRoutes = require('./routes/weatherRoutes');

// 3. INICIALIZAR LA APLICACIÓN
const app = express();

// 4. CONECTAR A LA BASE DE DATOS (MongoDB Atlas)
connectDB();

// 5. MIDDLEWARES DE SEGURIDAD Y USABILIDAD (Punto 1 del trabajo)
app.use(helmet()); // Protege contra vulnerabilidades HTTP conocidas
app.use(cors());   // Permite que tu Frontend (React) se comunique con este Backend
app.use(express.json()); // Permite que el servidor procese datos en formato JSON

// 6. DEFINICIÓN DE RUTAS (Punto 2 y 4 del trabajo)

// Ruta de salud del sistema (Health Check)
app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Servidor MERN operativo y seguro',
        timestamp: new Date().toISOString()
    });
});

// Rutas de la API de Clima (Integración de Terceros)
app.use('/api/v1/weather', weatherRoutes);

// 7. MANEJO DE ERRORES GLOBAL (Para el Punto 3: Mejoras Continuas)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Ocurrió un error interno en el servidor'
    });
});

// 8. LANZAMIENTO DEL SERVIDOR
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor Senior corriendo en puerto ${PORT}`);
    console.log(`🌍 Entorno: ${process.env.NODE_ENV || 'development'}`);
});