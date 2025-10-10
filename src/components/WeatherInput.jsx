// src/components/WeatherInput.jsx
import React from 'react';

function WeatherInput({ city, onCityChange, onGetWeather }) { // <<< THIS LINE IS KEY!
  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city} // <<< This needs the 'city' prop
        onChange={onCityChange} // <<< This needs the 'onCityChange' prop
      />
      <button onClick={onGetWeather}>Get Weather</button> {/* <<< This needs the 'onGetWeather' prop */}
    </div>
  );
}

export default WeatherInput;