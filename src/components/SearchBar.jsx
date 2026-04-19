// src/components/SearchBar.jsx
import React from 'react';

function SearchBar({ city, onCityChange, onGetWeather }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city} // Display the current state value from App.jsx
        onChange={onCityChange} // Update state in App.jsx when input changes
      />
      <button onClick={onGetWeather}>Get Weather</button> {/* Trigger API call in App.jsx */}
    </div>
  );
}

export default SearchBar;