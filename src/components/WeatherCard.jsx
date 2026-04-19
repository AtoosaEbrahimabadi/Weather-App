// src/components/WeatherCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

function WeatherCard({ weather, loading, error, units }) {
  // Helper function to convert string to title case
  const toTitleCase = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  };

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
  const temperature = Math.round(main.temp); // Round temperature to nearest integer
  const description = toTitleCase(weatherDetails[0].description); // Format description to title case
  const iconCode = weatherDetails[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct icon URL
  const unitSymbol = units === 'metric' ? '°C' : '°F'; // Determine unit symbol

  return (
    <motion.div
      className="weather-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Weather in {name}</h2>
      <p>Temperature: {temperature}{unitSymbol}</p>
      <p>Description: {description}</p>
      {iconCode && ( // Only show icon if iconCode exists
        <img src={iconUrl} alt={description} />
      )}
    </motion.div>
  );
}

export default WeatherCard;