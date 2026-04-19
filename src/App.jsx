// src/App.jsx
import React, { useState, useEffect } from 'react'; // Added useEffect
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState(''); // State to hold the city name input
  const [weatherData, setWeatherData] = useState(null); // To store the fetched weather
  const [loading, setLoading] = useState(false); // To show loading state
  const [error, setError] = useState(null); // To handle errors
  const [units, setUnits] = useState('metric'); // Units: 'metric' for Celsius, 'imperial' for Fahrenheit

  // IMPORTANT: Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key!
  const API_KEY = '0b4391fb92738a1bb87327867f4d9b00';

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async (query, isLatLon = false) => { // Consolidated fetch logic into a single function
    if (!query) {
      setError("Please enter a city name or use location.");
      return;
    }

    setLoading(true); // Start loading
    setError(null); // Clear previous errors
    setWeatherData(null); // Clear previous weather data

    try {
      let url;
      if (isLatLon) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lon}&appid=${API_KEY}&units=${units}`;
      } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=${units}`;
      }

      const response = await fetch(url);

      if (!response.ok) { // Handle HTTP errors (e.g., 404 city not found)
        const errorData = await response.json(); // Get more specific error from API
        throw new Error(`Error: ${errorData.message || response.statusText}`);
      }

      const data = await response.json();
      setWeatherData(data); // Store the fetched data
      if (!isLatLon) {
        setCity(query); // Ensure input field reflects the successfully fetched city
      }
      console.log("Weather data:", data); // Log for debugging
    } catch (err) {
      setError(err.message); // Set error message
      console.error("Failed to fetch weather:", err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Function to toggle units between Celsius and Fahrenheit
  const toggleUnits = () => {
    setUnits(prev => prev === 'metric' ? 'imperial' : 'metric');
    // Refetch weather with new units if data exists
    if (weatherData) {
      fetchWeather(weatherData.name);
    }
  };

  // Function to get weather using geolocation
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather({ lat: latitude, lon: longitude }, true);
        },
        (error) => {
          setError('Unable to retrieve your location.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  // Effect to fetch weather for a default city on component mount
  useEffect(() => {
    fetchWeather("Genoa"); // You can change "London" to any default city you like
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to get background class based on weather
  const getBackgroundClass = () => {
    if (!weatherData || !weatherData.weather) return 'weather-default';
    const main = weatherData.weather[0].main.toLowerCase();
    switch (main) {
      case 'clear': return 'weather-clear';
      case 'clouds': return 'weather-clouds';
      case 'rain': return 'weather-rain';
      case 'snow': return 'weather-snow';
      case 'thunderstorm': return 'weather-thunderstorm';
      default: return 'weather-default';
    }
  };

  // Effect to update body class for dynamic background
  useEffect(() => {
    document.body.className = getBackgroundClass();
  }, [weatherData]);

  return (
    <div>
      <h1>Weather App</h1>
      <div className="controls">
        <button onClick={toggleUnits} className="unit-toggle">
          {units === 'metric' ? '°F' : '°C'}
        </button>
        <button onClick={handleLocation} className="location-btn">
          Use My Location
        </button>
      </div>
      <SearchBar
        city={city}
        onCityChange={handleCityChange}
        onGetWeather={() => fetchWeather(city)} // Call fetchWeather with the current city state
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