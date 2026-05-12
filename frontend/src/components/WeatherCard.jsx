const WeatherCard = ({ weather }) => {
    if (!weather) return null;

    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

    return (
        <div className="weather-card">
            <h2>{weather.name}, {weather.sys?.country}</h2>
            <img src={iconUrl} alt="Icono clima" className="weather-icon" />
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
    );
};

export default WeatherCard;