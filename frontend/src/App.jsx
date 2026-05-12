import { useState } from 'react';
import './App.css';
import { getWeatherData } from './services/weatherService';
import WeatherSearch from './components/WeatherSearch';
import WeatherCard from './components/WeatherCard';

function App() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getWeatherData(city);
            setWeather(data);
        } catch (err) {
            setError("Ciudad no encontrada en el sistema");
            setWeather(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main-container">
            <header className="header">
                <h1>Servicio de Clima</h1>
                <p>Proyecto Universitario - Raúl Barra</p>
            </header>
            
            {/* Usamos el componente especializado */}
            <WeatherSearch onSearch={handleSearch} isLoading={loading} />

            {error && <p style={{color: '#f87171', marginBottom: '20px'}}>{error}</p>}
            
            {/* Usamos la tarjeta especializada */}
            <WeatherCard weather={weather} />
        </div>
    );
}

export default App;