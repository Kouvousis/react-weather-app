import { Heart } from "lucide-react";
import { type WeatherData } from "../interfaces/WeatherData";

interface WeatherProps {
  weatherData: WeatherData;
  onSelectFavorite: (cityName: string) => void;
  favorites: string[];
  onToggleFavorite: (cityName: string) => void;
}

const Weather = ({
  weatherData: weather,
  favorites,
  onToggleFavorite,
}: WeatherProps) => {
  const isFavorite = favorites.includes(weather.name);

  return (
    <div className="pt-4 flex flex-col items-center">
      <div className="flex flex-col items-center p-6 bg-gray-800 opacity-80 rounded-lg text-white overflow-hidden w-full max-w-md shadow-lg">
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
            <div className="flex justify-start">
              <button
                className="bg-gray-900 rounded-md p-2 hover:opacity-70"
                onClick={() => onToggleFavorite(weather.name)}
              >
                <Heart fill={isFavorite ? "white" : "none"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
