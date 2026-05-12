const axios = require('axios');

// Lógica para obtener el clima
const getClima = async (req, res) => {
    try {
        const { city } = req.query;

        if (!city) {
            return res.status(400).json({ error: "Debe proporcionar una ciudad" });
        }

        // Llamada a la API externa
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: process.env.OPENWEATHER_API_KEY,
                units: 'metric',
                lang: 'es'
            }
        });

        res.json(response.data);

    } catch (error) {
        console.error("Error en el controlador:", error.message);
        const status = error.response ? error.response.status : 500;
        const message = error.response ? "Ciudad no encontrada" : "Error interno del servidor";
        res.status(status).json({ error: message });
    }
};

module.exports = { getClima };