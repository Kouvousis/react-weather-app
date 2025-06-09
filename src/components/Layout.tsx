import { type WeatherData } from "../interfaces/WeatherData";
import Header from "./Header";

interface LayoutProps {
  children?: React.ReactNode;
  weatherData?: WeatherData | null;
}

const Layout = ({ children, weatherData }: LayoutProps) => {
  const getBackground = () => {
    if (!weatherData) {
      return "default-background";
    }

    const weatherMain = weatherData.weather[0].main.toLowerCase();

    switch (weatherMain) {
      case "atmosphere":
        return "atmosphere-background";
      case "clear":
        return "clear-background";
      case "clouds":
        return "clouds-background";
      case "drizzle":
        return "drizzle-background";
      case "rain":
        return "rain-background";
      case "snow":
        return "snow-background";
      case "thunderstorm":
        return "thunderstorm-background";
      default:
        return "default-background";
    }
  };
  const currentBackground = getBackground();
  return (
    <>
      <Header />
      <div
        className={`container mx-auto min-h-[100vh] pt-24 ${currentBackground}`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
