const axios = require('axios');

const getWeatherData = async (req, res) => {
    const { city } = req.params;
    const apiKey = process.env.OPENWEATHER_API_KEY; // Acceso seguro a la API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const https = require('https');
        const response = await axios.get(url, {
            httpsAgent: new https.Agent({  
                rejectUnauthorized: false 
            })
        });
        res.json(response.data);
    } catch (error) {
    // Esto imprimirá el error exacto en tu terminal de VS Code
    console.log("CÓDIGO DE ERROR:", error.response ? error.response.status : "Sin respuesta del servidor");

    res.status(500).json({ 
        message: "Error al conectar con el servicio externo",
        error_real: error.response ? error.response.data.message : error.message 
    });
}
};

module.exports = { getWeatherData };