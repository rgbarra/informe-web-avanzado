const weatherService = require('../services/weather.service');

/**
 * Express Controller: Handles network inputs, payload validation, and HTTP responses.
 */
const getWeatherReport = async (req, res) => {
  const { city } = req.query;

  // 1. Validation Layer (Fail fast principle)
  if (!city) {
    return res.status(400).json({
      success: false,
      message: 'Query parameter "city" is strictly required.'
    });
  }

  try {
    // 2. Business Logic Delegation
    const weatherData = await weatherService.fetchWeatherByCity(city);

    // 3. Success Response
    return res.status(200).json({
      success: true,
      data: weatherData
    });

  } catch (error) {
    // 4. Centralized Error Handling
    console.error(`[WeatherController] Error handling request: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: error.message || 'An unexpected error occurred on the weather provider side.'
    });
  }
};

module.exports = {
  getWeatherReport
};