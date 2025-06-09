import { useWeather } from "./hooks/useWeather";
import { useFavorites } from "./hooks/useFavorites";
import Layout from "./components/Layout";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import Favorites from "./components/Favorites";

function App() {
  const { cityName, setCityName, weatherData, loading, error } = useWeather();
  const { favorites, toggleFavorite } = useFavorites();

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
          <Weather
            weatherData={weatherData}
            onSelectFavorite={handleSearch}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}
        {!loading && !error && !weatherData && !cityName && (
          <p className="text-white text-center text-xl">
            Search for a city to get weather details.
          </p>
        )}
        <div className="w-full max-w-md mt-4 mx-auto pb-4">
          <Favorites favorites={favorites} onSelectCity={handleSearch} />
        </div>
      </Layout>
    </>
  );
}

export default App;
