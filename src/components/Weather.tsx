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

  if (loading)
    return (
      <div className="pt-4 flex items-center justify-center">
        <span>Loading...</span>
      </div>
    );

  if (error)
    return (
      <div className="pt-4 flex items-center justify-center">
        <div className="flex justify-center items-center bg-gray-800 text-white rounded-md overflow-hidden w-full max-w-md">
          <span>Error: {error}</span>
        </div>
      </div>
    );

  if (!weather) return null;

  return (
    <div className="pt-4 flex items-center justify-center">
      <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg text-white overflow-hidden w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          {weather.name}, {weather.sys.country}
        </h2>
        <div className="flex flex-col items-center w-full">
          <div className="text-center mb-4">
            <p className="text-6xl font-bold mb-2">
              {Math.round(weather.main.temp)}°C
            </p>
            <p className="flex items-center text-xl capitalize">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt=""
              />
              {weather.weather[0].description}
            </p>
          </div>
          <div className="w-full grid grid-cols-2 gap-4 mt-4 text-center">
            <div className="bg-gray-700 p-3 rounded-lg">
              <p className="text-sm text-gray-300">Feels Like</p>
              <p className="text-lg font-semibold">
                {Math.round(weather.main.feels_like)}°C
              </p>
            </div>
            <div className="bg-gray-700 p-3 rounded-lg">
              <p className="text-sm text-gray-300">Humidity</p>
              <p className="text-lg font-semibold">{weather.main.humidity}%</p>
            </div>
            <div className="bg-gray-700 p-3 rounded-lg col-span-2">
              <p className="text-sm text-gray-300">Wind Speed</p>
              <p className="text-lg font-semibold">{weather.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
