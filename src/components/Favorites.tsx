interface FavoritesListProps {
  favorites: string[];
  onSelectCity: (city: string) => void;
}

const Favorites = ({
  favorites: favorites,
  onSelectCity,
}: FavoritesListProps) => {
  const sortedFavorites = favorites.slice().sort((a, b) => a.localeCompare(b));

  return (
    <div className="bg-gray-800 opacity-80 rounded-lg p-4 mt-4 mb-4 text-white">
      <h3 className="text-xl font-bold mb-3">Favorite Cities</h3>
      {sortedFavorites.length === 0 ? (
        <p className="text-gray-400">No favorite cities yet</p>
      ) : (
        <ul className="space-y-2">
          {sortedFavorites.map((city) => (
            <li key={city} className="flex items-center">
              <button
                onClick={() => onSelectCity(city)}
                className="text-left w-full hover:bg-gray-700 p-2 rounded-md transition-colors"
              >
                {city}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
