import { useState, useEffect } from "react";
import "./App.css";
// Remove unused imports
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

// Define a type for the weather data
interface WeatherData {
  weather: Array<{ description: string }>;
  main: {
    humidity: number;
    temp: number;
  };
}

function App() {
  const [city, setCity] = useState("");
  const [cityConf, setCityConf] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  // Add type for the event
  function handleTyping(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  // Add type for the event
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCityConf(city);
  }

  useEffect(() => {
    if (cityConf) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityConf},GB&appid=30c6e5c11bdf59ec139aba0fcc4f4ced`
      )
        .then((response) => response.json())
        .then((data: WeatherData) => setWeather(data));
    }
  }, [cityConf]);

  useEffect(() => {
    if (weather) {
      console.log(weather);
    }
  }, [weather]);

  return (
    <div className="MacroContainer">
      <nav>
        <form onSubmit={handleSubmit}>
          <img className="glass" src="/lens.png" alt="Magnifying glass" />

          <input
            value={city}
            onChange={handleTyping}
            type="text"
            placeholder="Enter your City"
          />

          <button type="submit"><strong>Search</strong></button>
        </form>
      </nav>

      <div className="WeatherImage"></div>

      <div className="WeatherInfo">
        {weather ? (
          <p>
            <strong> The weather overall in {cityConf} is:</strong> {weather.weather[0].description}
            <br/><br/>
            <strong>The humidity is:</strong> {weather.main.humidity}%
            <br/><br/>
            <strong>The Temp is: </strong>{(weather.main.temp - 273.15).toFixed(2)}°C
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default App;
