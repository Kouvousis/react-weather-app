const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;
import { getCachedWeatherData, saveWeatherData } from "../utils/weatherCache";
import { type WeatherData } from "../interfaces/WeatherData";

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  const normalizedCity = city.trim().toLowerCase();

  const cachedData = await getCachedWeatherData(normalizedCity);
  if (cachedData) {
    console.log("Using cached data");
    return cachedData;
  }

  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Invalid name.");
    }

    const data = await response.json();

    await saveWeatherData(normalizedCity, data);

    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch weather data"
    );
  }
};
