import axios from 'axios';

// Definimos la URL base de tu backend
const API_URL = 'http://localhost:5000/api/v1/weather';

export const getWeatherData = async (city) => {
    try {
        // La petición enviará: http://localhost:5000/api/v1/weather?city=Santiago
        const response = await axios.get(API_URL, { 
            params: { city: city } 
        });
        return response.data;
    } catch (error) {
        console.error("Error en el servicio de clima:", error);
        throw error;
    }
};