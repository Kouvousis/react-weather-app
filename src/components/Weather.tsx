import { useEffect, useState } from "react";
import { type WeatherData, getWeatherData } from "../api/API";

interface WeatherProps {
  cityName: string;
}

const Weather = ({ cityName }: WeatherProps) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getWeatherData(cityName);
        setWeather(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (cityName) {
      fetchData();
    }
  }, [cityName]);

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="flex justify-center items-center bg-gray-800 text-white rounded-md overflow-hidden w-full max-w-md">
        Error: {error}
      </div>
    );
  if (!weather) return null;

  return (
    <div className="flex justify-center items-center p-4 bg-gray-800 rounded-lg text-white">
      <h2 className="text-2xl font-bold">
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="mt-4">
        <p className="text-4xl">{Math.round(weather.main.temp)}°C</p>
        <p className="text-xl">{weather.weather[0].description}</p>
        <div className="mt-2">
          <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
