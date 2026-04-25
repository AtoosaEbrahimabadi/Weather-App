// src/App.jsx
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [units, setUnits] = useState('metric');

  const API_KEY = '0b4391fb92738a1bb87327867f4d9b00';

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async (query, isLatLon = false) => {
    if (!query) {
      setError("Please enter a city name or use location.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 1. Prepare URLs for both Current Weather and 5-Day Forecast
      const baseUrl = "https://api.openweathermap.org/data/2.5/";
      const queryParams = isLatLon 
        ? `lat=${query.lat}&lon=${query.lon}&appid=${API_KEY}&units=${units}`
        : `q=${query}&appid=${API_KEY}&units=${units}`;

      const currentUrl = `${baseUrl}weather?${queryParams}`;
      const forecastUrl = `${baseUrl}forecast?${queryParams}`;

      // 2. Fetch both at the same time (Promise.all is faster/more professional)
      const [currentRes, forecastRes] = await Promise.all([
        fetch(currentUrl),
        fetch(forecastUrl)
      ]);

      if (!currentRes.ok || !forecastRes.ok) {
        throw new Error("City not found or API error");
      }

      const currentData = await currentRes.json();
      const forecastData = await forecastRes.json();

      // 3. Filter Forecast: The API gives data every 3 hours. 
      // We filter to get only 1 reading per day (at 12:00 PM).
      const dailyForecast = forecastData.list.filter(reading => 
        reading.dt_txt.includes("12:00:00")
      );

      // 4. Combine data into one state object
      setWeatherData({
        ...currentData,
        daily: dailyForecast // We add the 5-day list here
      });

      if (!isLatLon) setCity(currentData.name);
      
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const toggleUnits = () => {
    const newUnit = units === 'metric' ? 'imperial' : 'metric';
    setUnits(newUnit);
    if (weatherData) {
      // Small trick: If data exists, refetch immediately with new units
      fetchWeather(weatherData.name);
    }
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather({ 
            lat: position.coords.latitude, 
            lon: position.coords.longitude 
          }, true);
        },
        () => setError('Location access denied.')
      );
    }
  };

  useEffect(() => {
    fetchWeather("Genoa");
  }, []);

  const getBackgroundClass = () => {
    if (!weatherData || !weatherData.weather) return 'weather-default';
    const main = weatherData.weather[0].main.toLowerCase();
    const weatherClasses = {
      'clear': 'weather-clear',
      'clouds': 'weather-clouds',
      'rain': 'weather-rain',
      'snow': 'weather-snow',
      'thunderstorm': 'weather-thunderstorm',
      'drizzle': 'weather-rain'
    };
    return weatherClasses[main] || 'weather-default';
  };

  useEffect(() => {
    document.body.className = getBackgroundClass();
  }, [weatherData]);

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      
      <div className="controls">
        <button onClick={handleLocation} className="location-btn">
          📍 Use My Location
        </button>
        <button onClick={toggleUnits} className="unit-toggle">
          {units === 'metric' ? 'Switch to °F' : 'Switch to °C'}
        </button>
      </div>

      <SearchBar
        city={city}
        onCityChange={handleCityChange}
        onGetWeather={() => fetchWeather(city)}
      />

      <WeatherCard
        weather={weatherData}
        loading={loading}
        error={error}
        units={units}
      />
    </div>
  );
}

export default App;