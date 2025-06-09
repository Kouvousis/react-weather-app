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
