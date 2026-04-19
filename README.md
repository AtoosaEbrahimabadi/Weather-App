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

<<<<<<< Updated upstream
A sleek, responsive weather dashboard that provides real-time meteorological data. Built to demonstrate proficiency in React, API integration, and modern CSS layout techniques.
=======
A modern, high-end weather application built with React and Vite, featuring glassmorphism design, dynamic backgrounds, smooth animations, and advanced functionality. This portfolio piece demonstrates expertise in React development, API integration, UI/UX design, and modern web technologies.
>>>>>>> Stashed changes

[Live Demo](https://symphonious-nasturtium-6d8fcb.netlify.app/) | [Report Bug](https://github.com/your-username/weather-app/issues)

<<<<<<< Updated upstream
## ✨ Key Features
*   **Real-time Search:** Get instant weather data for any city worldwide.
*   **Detailed Metrics:** View temperature, "feels like" conditions, and weather descriptions.
*   **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop.
*   **Dynamic Assets:** Displays weather icons directly from the OpenWeather API.

## 🚀 Tech Stack
*   **Frontend:** React 18 (Vite)
*   **Styling:** CSS3 (Flexbox & Grid)
*   **API:** OpenWeatherMap API
*   **Deployment:** Netlify

## 🛠️ Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
=======
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
>>>>>>> Stashed changes
