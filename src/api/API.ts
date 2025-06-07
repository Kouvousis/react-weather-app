const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

export interface WeatherData {
  location: {
    city: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
}

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${BASE_URL}/?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Weather data not found");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch weather data"
    );
  }
};
