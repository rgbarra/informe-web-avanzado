import axios from 'axios';

// Detecta si estamos en Netlify o Localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1/weather';

export const getWeatherData = async (city) => {
    try {
        console.log(`Conectando a: ${API_URL}`); // Para debugging en consola
        const response = await axios.get(API_URL, { 
            params: { city } 
        });
        return response.data;
    } catch (error) {
        // Log detallado para identificar si es CORS o Network Error
        console.error("Detalle del error en el servicio:", error.response || error.message);
        throw error;
    }
};