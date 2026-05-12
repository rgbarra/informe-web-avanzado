const express = require('express');
const router = express.Router();
const { getClima } = require('../controllers/weatherController');

// Definimos la ruta raíz del recurso
router.get('/', getClima);

module.exports = router;