# Weather App

A modern, high-end weather application built with React and Vite, featuring glassmorphism design, dynamic backgrounds, smooth animations, and advanced functionality. This portfolio piece demonstrates expertise in React development, API integration, UI/UX design, and modern web technologies.

## Live Demo
Experience the app live: [Weather App on Netlify](https://symphonious-nasturtium-6d8fcb.netlify.app)

## Features

### Core Functionality
- **Real-time Weather Data**: Fetches current weather from OpenWeatherMap API
- **City Search**: Search weather by city name with error handling
- **Geolocation Support**: "Use My Location" button for current position weather
- **Unit Conversion**: Toggle between Celsius (°C) and Fahrenheit (°F)

### Design & UX
- **Glassmorphism UI**: Modern frosted glass card design with backdrop blur
- **Dynamic Backgrounds**: Background changes based on weather conditions (sunny, rainy, cloudy, etc.)
- **Smooth Animations**: Fade-in and slide-up animations using Framer Motion
- **Responsive Design**: Mobile-first approach with clean, professional styling
- **Typography**: Inter font family for modern, readable text

### Technical Features
- **Data Formatting**: Rounded temperatures and title-case descriptions
- **Loading States**: Smooth loading indicators during API calls
- **Error Handling**: Comprehensive error messages for API failures and geolocation issues
- **Component Architecture**: Modular, maintainable React components
- **State Management**: Efficient use of React hooks for state management

## Technologies Used
- **React 18** - Component-based UI framework
- **Vite** - Fast build tool and development server
- **Framer Motion** - Animation library for smooth transitions
- **OpenWeatherMap API** - Weather data provider
- **CSS3** - Modern styling with glassmorphism effects
- **Google Fonts (Inter)** - Modern typography
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Get your OpenWeatherMap API key and replace the placeholder in `src/App.jsx`:
```javascript
const API_KEY = 'your_api_key_here';
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx      # City input and search button
│   └── WeatherCard.jsx    # Weather display with glassmorphism
├── App.jsx                # Main app component with state management
├── index.css              # Global styles and glassmorphism
└── main.jsx               # App entry point
```

## API Usage

This app uses the OpenWeatherMap Current Weather API. The free tier allows 1,000 calls per day.

- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Parameters: `q` (city name) or `lat/lon` (coordinates), `units` (metric/imperial), `appid` (API key)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- OpenWeatherMap for providing the weather API
- Framer Motion for the animation library
- Google Fonts for the Inter typeface
- React and Vite communities for excellent documentation# 🌤️ Modern Weather App

A modern, high-end weather application built with React and Vite, featuring glassmorphism design, dynamic backgrounds, smooth animations, and advanced functionality. This portfolio piece demonstrates expertise in React development, API integration, UI/UX design, and modern web technologies.

[Live Demo](https://symphonious-nasturtium-6d8fcb.netlify.app/) | [Report Bug](https://github.com/your-username/weather-app/issues)

## Features

### Core Functionality
- **Real-time Weather Data**: Fetches current weather from OpenWeatherMap API
- **City Search**: Search weather by city name with error handling
- **Geolocation Support**: "Use My Location" button for current position weather
- **Unit Conversion**: Toggle between Celsius (°C) and Fahrenheit (°F)

### Design & UX
- **Glassmorphism UI**: Modern frosted glass card design with backdrop blur
- **Dynamic Backgrounds**: Background changes based on weather conditions (sunny, rainy, cloudy, etc.)
- **Smooth Animations**: Fade-in and slide-up animations using Framer Motion
- **Responsive Design**: Mobile-first approach with clean, professional styling
- **Typography**: Inter font family for modern, readable text

### Technical Features
- **Data Formatting**: Rounded temperatures and title-case descriptions
- **Loading States**: Smooth loading indicators during API calls
- **Error Handling**: Comprehensive error messages for API failures and geolocation issues
- **Component Architecture**: Modular, maintainable React components
- **State Management**: Efficient use of React hooks for state management

## Technologies Used
- **React 18** - Component-based UI framework
- **Vite** - Fast build tool and development server
- **Framer Motion** - Animation library for smooth transitions
- **OpenWeatherMap API** - Weather data provider
- **CSS3** - Modern styling with glassmorphism effects
- **Google Fonts (Inter)** - Modern typography
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Get your OpenWeatherMap API key and replace the placeholder in `src/App.jsx`:
```javascript
const API_KEY = 'your_api_key_here';
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx      # City input and search button
│   └── WeatherCard.jsx    # Weather display with glassmorphism
├── App.jsx                # Main app component with state management
├── index.css              # Global styles and glassmorphism
└── main.jsx               # App entry point
```

## API Usage

This app uses the OpenWeatherMap Current Weather API. The free tier allows 1,000 calls per day.

- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Parameters: `q` (city name) or `lat/lon` (coordinates), `units` (metric/imperial), `appid` (API key)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- OpenWeatherMap for providing the weather API
- Framer Motion for the animation library
- Google Fonts for the Inter typeface
- React and Vite communities for excellent documentation

# 📝 Project Update Report - [25th of April 2026]

## 🎯 Progress Summary
Today, I transformed the Weather App from a basic functional tool into a modern, professional-grade dashboard. The focus was on improving UI/UX, refining technical logic, and adding advanced features.

## ✨ UI/UX Enhancements
*   **Glassmorphism Card:** Implemented a "frosted glass" weather card using CSS backdrop-filters and semi-transparent layers.
*   **Dynamic Backgrounds:** Added a logic-driven background system where the app theme (gradients) changes automatically based on the weather (Clear, Clouds, Rain, Snow, etc.).
*   **Animations:** Integrated `framer-motion` to add smooth "slide-up" and "fade-in" transitions when weather data loads.
*   **Advanced Typography:** Switched to the 'Inter' font family and implemented visual hierarchy with rounded temperature values and capitalized descriptions.

## 🛠️ Technical Improvements
*   **Component Architecture:** Refactored the monolithic `App.jsx` into modular components (`SearchBar` and `WeatherCard`) for better maintainability.
*   **Parallel API Fetching:** Optimized the data flow by using `Promise.all` to fetch Current Weather and 5-Day Forecast data simultaneously.
*   **Data Filtering:** Implemented a filter logic to extract 12:00 PM readings from the 3-hour interval OpenWeather API response to create a clean 5-day outlook.
*   **UX Features:** 
    *   Added **Enter key** support for the search bar.
    *   Implemented **Geolocation API** for "Use My Location" functionality.
    *   Added a **Unit Toggle** (Metric/Imperial) with instant data refreshing.

## 🧠 Key Learning Outcomes
*   Mastered **Flexbox and Grid** for complex centering and card layouts.
*   Learned to manage **Conditional Rendering** and loading states in React.
*   Understood how to handle multiple asynchronous requests in a single lifecycle.
*   Gained experience with **Framer Motion** for declarative UI animations.

---
*Status: Feature-complete. Ready for deployment.*
