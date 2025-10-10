// src/App.jsx
import React, { useState, useEffect } from 'react'; // Added useEffect
import WeatherInput from './components/WeatherInput';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [city, setCity] = useState(''); // State to hold the city name input
  const [weatherData, setWeatherData] = useState(null); // To store the fetched weather
  const [loading, setLoading] = useState(false); // To show loading state
  const [error, setError] = useState(null); // To handle errors

  // IMPORTANT: Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key!
  const API_KEY = '0b4391fb92738a1bb87327867f4d9b00';

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async (cityName) => { // Consolidated fetch logic into a single function
    if (!cityName) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true); // Start loading
    setError(null); // Clear previous errors
    setWeatherData(null); // Clear previous weather data

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) { // Handle HTTP errors (e.g., 404 city not found)
        const errorData = await response.json(); // Get more specific error from API
        throw new Error(`Error: ${errorData.message || response.statusText}`);
      }

      const data = await response.json();
      setWeatherData(data); // Store the fetched data
      setCity(cityName); // Ensure input field reflects the successfully fetched city
      console.log("Weather data:", data); // Log for debugging
    } catch (err) {
      setError(err.message); // Set error message
      console.error("Failed to fetch weather:", err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Effect to fetch weather for a default city on component mount
  useEffect(() => {
    fetchWeather("Genoa"); // You can change "London" to any default city you like
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherInput
        city={city}
        onCityChange={handleCityChange}
        onGetWeather={() => fetchWeather(city)} // Call fetchWeather with the current city state
      />
      <WeatherDisplay
        weather={weatherData}
        loading={loading}
        error={error}
        // Pass the icon code if weatherData and weatherData.weather[0] exist
        weatherIcon={weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].icon : null}
        // Pass the description if weatherData and weatherData.weather[0] exist
        weatherDescription={weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : null}
      />
    </div>
  );
}

export default App;