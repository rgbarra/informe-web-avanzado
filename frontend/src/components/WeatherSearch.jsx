import { useState } from 'react';

const WeatherSearch = ({ onSearch, isLoading }) => {
    const [city, setCity] = useState('');
    const suggestions = ["Santiago", "Chillán", "Concepción", "Valparaíso", "Antofagasta"];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input 
                className="search-input" // Tu clase de App.css
                type="text" 
                list="cities"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ej: Chillán, Santiago..."
                autoComplete="off"
            />
            <datalist id="cities">
                {suggestions.map((s, i) => <option key={i} value={s} />)}
            </datalist>
            <button className="search-btn" type="submit" disabled={isLoading}>
                {isLoading ? '...' : 'Buscar'}
            </button>
        </form>
    );
};

export default WeatherSearch;