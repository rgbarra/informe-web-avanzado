const express = require('express');
const cors = require('cors'); // Importante
require('dotenv').config();

const app = express();

app.use(cors()); // Esta es la llave que faltaba
app.use(express.json());

const weatherRoutes = require('./routes/weatherRoutes');
app.use('/api/v1/weather', require('./routes/weatherRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));