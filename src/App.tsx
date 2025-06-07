import { useState } from "react";
import Layout from "./components/Layout";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

function App() {
  const [cityName, setCityName] = useState<string>("");

  const handleSearch = (searchTerm: string) => {
    setCityName(searchTerm);
  };
  return (
    <>
      <Layout>
        <SearchBar onSearch={handleSearch} />
        {cityName && <Weather cityName={cityName} />}
      </Layout>
    </>
  );
}

export default App;
