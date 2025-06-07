import { Search, Cloud } from "lucide-react";

const SearchBar = () => {
  return (
    <>
      <form className="flex justify-center items-center">
        <div className="flex items-center bg-gray-800 text-white rounded-md overflow-hidden w-full max-w-md">
          <span className="px-3 text-lg">
            <Cloud />
          </span>
          <input
            type="text"
            placeholder="Search for a city, country, or place"
            className="bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-2 w-full"
          />
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-600 text-white rounded-md">
            <Search />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
