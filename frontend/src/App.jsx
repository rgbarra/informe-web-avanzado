import { useState, useEffect } from 'react';
import { getWeatherByCity } from './services/weatherService';
import WeatherSearch from './components/WeatherSearch';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  // EFECTO DE GEOLOCALIZACIÓN AL CARGAR
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          // Por ahora buscaremos Santiago por defecto o podrías 
          // crear una función fetchByCoords(lat, lon)
          handleSearch("Santiago"); 
        },
        () => alert("No se pudo acceder a tu ubicación")
      );
    }
  }, []);

  const handleSearch = async (city) => {
    setLoading(true);
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      alert("Ciudad no encontrada");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Weather Guardian</h1>
      
      <div className="card">
        {/* BUSCADOR ÚNICO CON SUGERENCIAS */}
        <WeatherSearch onSearch={handleSearch} isLoading={loading} />

        {/* RESULTADOS CON ICONOS */}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;