import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem("favoriteWeatherCities");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteWeatherCities", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (cityName: string) => {
    setFavorites((prev) =>
      prev.includes(cityName)
        ? prev.filter((city) => city !== cityName)
        : [...prev, cityName]
    );
  };

  return {
    favorites,
    toggleFavorite,
  };
};
