const environment = require('../config/environment');

/**
 * Service to handle all core weather business logic and external API integrations.
 */
class WeatherService {
  /**
   * Fetches current weather data for a specific city.
   * @param {string} city - The name of the city.
   * @returns {Promise<Object>} Cleaned and formatted weather data.
   */
  async fetchWeatherByCity(city) {
    try {
      if (!city) {
        throw new Error('City parameter is strictly required.');
      }

      // Construcción segura de la URL con codificación de caracteres
      const url = `${environment.weatherApiUrl}?q=${encodeURIComponent(city)}&appid=${environment.weatherApiKey}&units=metric`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`External API responded with status: ${response.status}`);
      }

      const data = await response.json();

      // Devolvemos solo lo que el frontend necesita (limpio y estructurado)
      return {
        cityName: data.name,
        temperature: data.main?.temp,
        description: data.weather?.[0]?.description,
        humidity: data.main?.humidity,
        windSpeed: data.wind?.speed,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error(`[WeatherService.fetchWeatherByCity] Error captured: ${error.message}`);
      throw error;
    }
  }
}

module.exports = new WeatherService();