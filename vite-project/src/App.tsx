import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import myImage from "../public/lens.png";

function App() {
  const [city, setCity] = useState("");
  const [cityConf, setCityConf] = useState("");
  const [coordinates, setCoordinates] = useState();

  function handleTyping(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCityConf(city);
  }

  useEffect(() => {
    if (cityConf) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityConf}&appid=30c6e5c11bdf59ec139aba0fcc4f4ced`
      )
        .then((response) => response.json())
        .then((data) => setCoordinates(data));
    }
  }, [cityConf]);

  useEffect(() => {
    if (coordinates) {
      console.log(coordinates);
    }
  }, [coordinates]);

  return (
    <div className="MacroContainer">
      <nav>
        <form>
          <img src={myImage}></img>

          <input
            value={city}
            onChange={handleTyping}
            type="text"
            placeholder="Enter your City"
          ></input>

          <button onClick={handleSubmit}>Search</button>
        </form>
      </nav>

      <div className="WeatherImage"></div>

      <div className="WeatherInfo"></div>
    </div>
  );
}

export default App;
