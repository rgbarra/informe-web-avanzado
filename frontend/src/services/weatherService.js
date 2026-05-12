import axios from 'axios';

/**
 * IMPORTANTE: VITE_API_URL debe configurarse en el panel de Netlify.
 * En desarrollo usará el .env local, en producción la variable de Netlify.
 */
const API_URL = import.meta.env.VITE_API_URL;

export const getWeatherData = async (city) => {
    try {
        // Validación de seguridad para el desarrollador
        if (!API_URL) {
            console.error("ERROR: La variable VITE_API_URL no está definida en el entorno.");
            throw new Error("Error de configuración en el servidor.");
        }

        console.log(`Petición enviada a: ${API_URL}`); 
        
        const response = await axios.get(API_URL, { 
            params: { city } 
        });
        
        return response.data;
    } catch (error) {
        // Log profesional para identificar si es CORS o un error 404/500
        console.error("Detalle del error en la petición:", error.response?.data || error.message);
        throw error;
    }
};