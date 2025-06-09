# 🌤️ Simple Weather App With React

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-weather-app.git
   cd react-weather-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## Environment Setup

1. Create a `.env` file in the root directory of the project
2. Add the following environment variable to the `.env` file:
   ```properties
   VITE_OPEN_WEATHER_API_KEY=your_api_key_here
   ```
3. Replace `your_api_key_here` with your OpenWeather API key
   - If you don't have an API key, you can get one by signing up at [OpenWeather](https://openweathermap.org/api)
   - Your API key should look similar to: `d8436c381887da709b5f402f6d04a008`

> **Note**: Make sure to add `.env` to your `.gitignore` file to keep your API key private

## Project Structure

```
react-weather-app/
├── src/
│   ├── components/        # React components
│   │   ├── Favorites/    # Favorites component
│   │   ├── Header/       # Header component
│   │   ├── Layout/       # Layout component
│   │   ├── SearchBar/    # SearchBar component
│   │   └── Weather/      # Weather component
│   ├── assets/           # Images, fonts, and other static files
│   ├── api/              # API configurations and requests
│   │   └── API.ts        # OpenWeather API fetch handlers
│   ├── hooks/            # Custom React hooks
│   │   ├── useWeather.ts    # Weather data management hook
│   │   └── useFavorites.ts  # Favorites management hook
│   ├── interfaces/        # TypeScript interfaces
│   │   └── WeatherData.ts   # Weather data type definitions
│   ├── utils/            # Utility functions
│   │   └── weatherCache.ts  # Offline caching using localforage
│   ├── index.css         # Global styles
│   ├── vite-env.d.ts     # Vite type definitions
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Application entry point
├── public/               # Public static files
│   ├── backgrounds/      # Dynamic weather background images
│   │   ├── atmosphere.jpg   # Fog, haze, sand weather background
│   │   ├── clear.jpg       # Clear weather background
│   │   ├── clouds.jpg      # Cloudy weather background
│   │   ├── default-background.jpg  # Default/fallback background
│   │   ├── drizzle.jpg    # Drizzle weather background
│   │   ├── rain.jpg       # Rainy weather background
│   │   ├── snow.jpg       # Snowy weather background
│   │   └── thunderstorm.jpg # Thunderstorm weather background
│   └── cloud-icon.png   # Browser tab favicon
├── .env                  # Environment variables
├── .gitignore           # Git ignore rules
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── README.md            # Project documentation
└── vite.config.js       # Vite configuration
```
