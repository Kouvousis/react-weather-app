import { useState, useEffect, useCallback } from "react";
import Layout from "./components/Layout";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import { getWeatherData, type WeatherData } from "./api/API";

function App() {
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

  const handleSearch = (searchTerm: string) => {
    setCityName(searchTerm);
  };

  return (
    <>
      <Layout weatherData={weatherData}>
        <div className="pt-4 pb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
        {loading && (
          <div className="flex justify-center items-center ">
            <p className="text-white text-center text-xl">
              Loading weather for {cityName || "current location"}...
            </p>
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center ">
            <p className="text-red-500 text-center text-xl bg-gray-800 rounded-md overflow-hidden w-full max-w-md">
              Error: {error}
            </p>
          </div>
        )}
        {!loading && !error && weatherData && (
          <Weather weatherData={weatherData} />
        )}
        {!loading && !error && !weatherData && !cityName && (
          <p className="text-white text-center text-xl">
            Search for a city to get weather details.
          </p>
        )}
      </Layout>
    </>
  );
}

export default App;
