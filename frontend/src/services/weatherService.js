import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getWeatherData = async (city) => {
    try {
        if (!API_URL) throw new Error("Falta VITE_API_URL en Netlify");

        // Limpiamos la URL por si viene con espacios o barras extras
        const cleanURL = API_URL.trim().replace(/\/$/, "");

        const response = await axios.get(cleanURL, { 
            params: { city: city.trim() } 
        });
        
        return response.data;
    } catch (error) {
        console.error("Error en Service:", error.response?.data || error.message);
        throw error;
    }
};