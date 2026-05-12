import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Ahora apunta a /api/v1
});

export const getWeatherByCity = async (city) => {
    try {
        // Realiza la petición a: /api/v1/weather?city=Santiago
        const response = await api.get('/weather', {
            params: { city } // Axios construye automáticamente el ?city=...
        });
        return response.data;
    } catch (error) {
        console.error("Error en weatherService:", error.message);
        throw error;
    }
};