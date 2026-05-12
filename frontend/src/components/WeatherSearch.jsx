import { useState } from 'react';

const WeatherSearch = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState('');
  
  // Tu prelistado de ciudades
  const suggestions = ["Santiago", "Chillán", "Concepción", "Valparaíso", "Antofagasta"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input 
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
      <button type="submit" disabled={isLoading}>
        {isLoading ? '...' : 'Buscar'}
      </button>
    </form>
  );
};

export default WeatherSearch;