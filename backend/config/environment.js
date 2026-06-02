// Centralized environment configuration
const environment = {
  port: process.env.PORT || 5000,
  weatherApiUrl: process.env.WEATHER_API_URL,
  weatherApiKey: process.env.WEATHER_API_KEY,
  // Add more environment variables as the project grows
};

// Security check: Warn if essential variables are missing
if (!environment.weatherApiUrl || !environment.weatherApiKey) {
  console.warn('⚠️ Warning: Environment variables for Weather API are not completely defined.');
}

module.exports = environment;