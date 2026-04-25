import React from 'react';
import { motion } from 'framer-motion';

function WeatherCard({ weather, loading, error, units }) {
  if (loading) return <p className="status">Loading weather data...</p>;
  if (error) return <p className="status error">{error}</p>;
  if (!weather) return <p className="status">Search for a city to begin!</p>;

  const tempUnit = units === 'metric' ? '°C' : '°F';

  // --- NEW: Function to get a nicely formatted date ---
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div 
      className="weather-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      key={weather.name}
    >
      {/* --- NEW: Display the Date --- */}
      <p className="current-date">{date}</p>
      
      <h2 className="city-name">{weather.name}, {weather.sys.country}</h2>
      
      <div className="weather-main">
        <img 
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
          alt={weather.weather[0].description} 
        />
        <div className="temp-display">
          <span className="current-temp">{Math.round(weather.main.temp)}{tempUnit}</span>
          <p className="description">{weather.weather[0].description}</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span>Feels Like</span>
          <strong>{Math.round(weather.main.feels_like)}{tempUnit}</strong>
        </div>
        <div className="detail-item">
          <span>Humidity</span>
          <strong>{weather.main.humidity}%</strong>
        </div>
        <div className="detail-item">
          <span>Wind</span>
          <strong>{weather.wind.speed} {units === 'metric' ? 'm/s' : 'mph'}</strong>
        </div>
      </div>

      {/* 5-Day Forecast Section */}
      <div className="forecast-container">
        {weather.daily && weather.daily.map((day, index) => (
          <div key={index} className="forecast-item">
            <p className="forecast-day">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <img 
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
              alt="forecast icon" 
            />
            <p className="forecast-temp">{Math.round(day.main.temp)}°</p>
          </div>
        ))}
      </div>
      
    </motion.div>
  );
}

export default WeatherCard;