const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(express.json());

// RUTA PRINCIPAL: Aquí ocurre la magia de la API de Terceros (Punto 4 del informe)
app.get('/clima/:ciudad', async (req, res) => {
    const ciudad = req.params.ciudad;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    console.log(`📡 Consultando clima para: ${ciudad}...`);

    try {
        // Consumo de la API externa usando Axios
        const response = await axios.get(url);
        const datos = response.data;

        // Enviamos la respuesta dinámica al cliente
        res.json({
            estado: "Éxito",
            data: {
                ciudad: datos.name,
                pais: datos.sys.country,
                temperatura: `${datos.main.temp}°C`,
                sensacion: `${datos.main.feels_like}°C`,
                humedad: `${datos.main.humidity}%`,
                condicion: datos.weather[0].description
            }
        });
    } catch (error) {
        console.error("❌ Error en la API externa:", error.message);
        res.status(500).json({
            estado: "Error",
            mensaje: "No se pudo obtener el clima. Revisa que el nombre de la ciudad o la API Key sean correctos."
        });
    }
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log("==============================================");
    console.log(`✅ SERVIDOR WEB AVANZADO INICIADO`);
    console.log(`🌐 Acceso local: http://localhost:${PORT}/clima/Guayaquil`);
    console.log("==============================================");
});