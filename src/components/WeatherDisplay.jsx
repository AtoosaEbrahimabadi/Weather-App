// src/components/WeatherDisplay.jsx
import React from 'react';

function WeatherDisplay({ weather, loading, error }) {
  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (!weather) {
    return <p>Enter a city to get weather information!</p>;
  }

  // If we have weather data, let's display it
  const { name, main, weather: weatherDetails } = weather;
  const temperature = main.temp;
  const description = weatherDetails[0].description;
  const iconCode = weatherDetails[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct icon URL

  return (
    <div>
      <h2>Weather in {name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Description: {description}</p>
      {iconCode && ( // Only show icon if iconCode exists
        <img src={iconUrl} alt={description} />
      )}
    </div>
  );
}

export default WeatherDisplay;