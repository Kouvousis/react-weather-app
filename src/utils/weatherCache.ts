import localforage from "localforage";
import { type WeatherData } from "../api/API";

interface CachedData {
  data: WeatherData;
  timestamp: number;
}

localforage.config({
  name: "weatherApp",
  storeName: "weather_data",
});

export const saveWeatherData = async (
  city: string,
  data: WeatherData
): Promise<void> => {
  try {
    const cacheEntry: CachedData = {
      data,
      timestamp: Date.now(),
    };
    await localforage.setItem(city.toLowerCase(), cacheEntry);
  } catch (err) {
    console.error("Failed to save weather data", err);
  }
};

export const getCachedWeatherData = async (
  city: string
): Promise<WeatherData | null> => {
  try {
    const cache = await localforage.getItem<CachedData>(city.toLowerCase());

    if (!cache) return null;

    const tenMinutes = 10 * 60 * 1000;
    const isFresh = Date.now() - cache.timestamp < tenMinutes;

    return isFresh ? cache.data : null;
  } catch (err) {
    console.error("Failed to load weather data", err);
    return null;
  }
};
