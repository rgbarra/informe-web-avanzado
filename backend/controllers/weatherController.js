const axios = require('axios');
const https = require('https'); // Importamos el módulo nativo

const getClima = async (req, res) => {
    try {
        const { city } = req.query;

        if (!city) {
            return res.status(400).json({ error: "Debe proporcionar una ciudad" });
        }

        // Creamos un agente que ignore problemas de certificados locales
        const agent = new https.Agent({  
            rejectUnauthorized: false 
        });

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: process.env.OPENWEATHER_API_KEY,
                units: 'metric',
                lang: 'es'
            },
            httpsAgent: agent // Le pasamos el agente a Axios
        });

        res.json(response.data);

    } catch (error) {
        console.error("DETALLE TÉCNICO:", error.message);
        const status = error.response ? error.response.status : 500;
        res.status(status).json({ error: "Error de conexión con la API de clima" });
    }
};

module.exports = { getClima };