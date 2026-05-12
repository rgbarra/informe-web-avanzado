const WeatherCard = ({ weather }) => {
  if (!weather) return <p className="welcome-msg">Busca una ciudad para ver el clima</p>;

  // URL del icono oficial de OpenWeather
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  return (
    <div className="weather-info">
        <h2>{weather.name}</h2>
        <img src={iconUrl} alt="Icono clima" className="weather-icon" />
        <p className="temp">{Math.round(weather.main.temp)}°C</p>
        <p className="description">{weather.weather[0].description}</p>
        <div className="details">
        <span>Humedad: {weather.main.humidity}%</span>
        <span style={{ margin: '0 10px' }}>|</span> 
        <span>Viento: {weather.wind.speed} m/s</span>
        </div>
    </div>
  );
};

export default WeatherCard;