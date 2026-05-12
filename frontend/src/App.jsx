import { useState } from 'react';
import './App.css';
import { getWeatherData } from './services/weatherService';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  // Lista de ciudades para el autocompletado
  const sugerenciasCiudades = [
    "Santiago", "Chillán", "Concepción", "Valparaíso", 
    "Antofagasta", "Temuco", "Rancagua", "Iquique", "Puerto Montt"
  ];

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    
    setLoading(true);
    try {
      const data = await getWeatherData(city);
      setWeather(data);
    } catch (err) {
      alert("Ciudad no encontrada");
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
      
      <form onSubmit={handleSearch} className="search-form">
        <input 
          className="search-input"
          type="text" 
          placeholder="Ej: Chillán o Santiago" 
          value={city}
          onChange={(e) => setCity(e.target.value)} 
          list="ciudades-sugeridas" // Vinculación con el datalist
          autoComplete="off" // Evita que el navegador use su historial propio
        />
        
        {/* Componente de Autocompletado */}
        <datalist id="ciudades-sugeridas">
          {sugerenciasCiudades.map((item, index) => (
            <option key={index} value={item} />
          ))}
        </datalist>

        <button className="search-btn" type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}, {weather.sys?.country}</h2>
          
          <img 
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt="Icono del clima" 
          />

          <p className="temp-text">{Math.round(weather.main.temp)}°C</p>
          <p className="description">{weather.weather[0].description}</p>
          
          <div className="details-grid">
            <div>
              <p style={{fontSize: '0.8rem'}}>Humedad</p>
              <p style={{color: 'white', fontWeight: 'bold'}}>{weather.main.humidity}%</p>
            </div>
            <div>
              <p style={{fontSize: '0.8rem'}}>Viento</p>
              <p style={{color: 'white', fontWeight: 'bold'}}>{weather.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;