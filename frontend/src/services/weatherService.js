import axios from 'axios';

// Esta URL debe coincidir con la que te funcionó en el navegador
const API_URL = 'http://localhost:5000/api/v1/weather';

export const getWeatherData = async (city) => {
    try {
        const response = await axios.get(API_URL, { 
            params: { city } 
        });
        return response.data; // Aquí llega el JSON que viste en el navegador
    } catch (error) {
        console.error("Error en Axios:", error.response?.data || error.message);
        throw error;
    }
};