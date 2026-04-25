import React from 'react';

function SearchBar({ city, onCityChange, onGetWeather }) {
  // This function checks if the key pressed was "Enter"
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onGetWeather();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={onCityChange}
        onKeyDown={handleKeyDown} /* <--- This listens for the Enter key */
      />
      <button onClick={onGetWeather} className="search-btn">
        Get Weather
      </button>
    </div>
  );
}

export default SearchBar;