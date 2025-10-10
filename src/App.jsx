// src/App.jsx
import React, { useState, useEffect } from 'react'; // Added useEffect
import WeatherInput from './components/WeatherInput';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // IMPORTANT: Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key!
  const API_KEY = '0b4391fb92738a1bb87327867f4d9b00';

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async (queryCity) => { // Renamed to a more generic fetchWeather
    if (!queryCity) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`City not found or API error: ${response.status}`);
      }

      const data = await response.json();
      setWeatherData(data);
      console.log("Weather data:", data); // For debugging
    } catch (err) {
      setError(err.message);
      console.error("Failed to fetch weather:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleGetWeather = () => {
    fetchWeather(city); // Call the generic fetchWeather with the current input city
  };

  // Effect to fetch weather for a default city on component mount
  useEffect(() => {
    fetchWeather("Genoa"); // Set initial city to Genoa 
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherInput
        city={city}
        onCityChange={handleCityChange}
        onGetWeather={handleGetWeather}
      />
      <WeatherDisplay
        weather={weatherData}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;