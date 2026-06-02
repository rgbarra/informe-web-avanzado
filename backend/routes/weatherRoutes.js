const express = require('express');
const router = express.Router();
const { getWeatherReport } = require('../controllers/weather.controller');

// GET /api/v1/weather?city={cityName}
// Replaces the old spanish implementation with an enterprise-ready controller
router.get('/', getWeatherReport);

module.exports = router;