import { useState, useCallback, useEffect } from "react";
import { getWeatherData } from "../api/API";
import { type WeatherData } from "../interfaces/WeatherData";

export const useWeather = () => {
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch weather data"
      );
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (cityName) {
      fetchWeather(cityName);
    } else {
      setWeatherData(null);
      setError(null);
      setLoading(false);
    }
  }, [cityName, fetchWeather]);

  return {
    cityName,
    setCityName,
    weatherData,
    loading,
    error,
  };
};
