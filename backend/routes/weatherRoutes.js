const express = require('express');
const router = express.Router();
const { getWeatherData } = require('../controllers/weatherController');

// Ruta: GET /api/v1/weather/:city
router.get('/:city', getWeatherData);

module.exports = router;