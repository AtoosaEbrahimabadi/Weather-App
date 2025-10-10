// src/components/WeatherDisplay.jsx
import React from 'react';

function WeatherDisplay({ weather, loading, error }) {
  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (!weather) { // No weather data yet
    return <p>Enter a city to get weather information.</p>;
  }

  // If we have weather data, display it
  return (
    <div>
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Feels like: {weather.main.feels_like}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      {weather.weather[0].icon && (
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
      )}
    </div>
  );
}

export default WeatherDisplay;