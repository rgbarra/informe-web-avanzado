const WeatherCard = ({ weather }) => {
    if (!weather) return null;

    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

    return (
        <div className="weather-card">
            <h2>{weather.name}, {weather.sys?.country}</h2>
            <img src={iconUrl} alt="clima" className="weather-icon" />
            <p className="temp-text">{Math.round(weather.main.temp)}°C</p>
            <p className="description">{weather.weather[0].description}</p>
            <div className="details-grid">
                <div>
                    <p>Humedad</p>
                    <p><strong>{weather.main.humidity}%</strong></p>
                </div>
                <div>
                    <p>Viento</p>
                    <p><strong>{weather.wind.speed} m/s</strong></p>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;