const mongoose = require('mongoose');

const WeatherLogSchema = new mongoose.Schema({
    city: { type: String, required: true },
    temperature: { type: Number, required: true },
    description: { type: String },
    humidity: { type: Number },
    windSpeed: { type: Number },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('WeatherLog', WeatherLogSchema);