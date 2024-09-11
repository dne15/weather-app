import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import myImage from "../public/lens.png";

function App() {
  const [city, setCity] = useState("");
  const [cityConf, setCityConf] = useState("");
  const [weather, setWeather] = useState();

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
        `https://api.openweathermap.org/data/2.5/weather?q=${cityConf},GB&appid=30c6e5c11bdf59ec139aba0fcc4f4ced`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data));
    }
  }, [cityConf]);

  useEffect(() => {
    if (weather) {
      console.log(weather);
    }
  }, [weather]);

  //   <div className="reviewText">
  //   {reviewData ? JSON.stringify(reviewData.text) : null}
  // </div>
  // <div className="authorLocation">
  //   {reviewData ? reviewData.author : null}
  //   <br></br>
  //   {reviewData ? reviewData.location : null}
  // </div>

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

      <div className="WeatherInfo">
        {weather ? (
          <p>
            `The weather overall in ${cityConf} is:
            JSON.stringify(weather[0]["description"])`
          </p>
        ) : null}

        {weather.main.temp}
        <p>Humidity</p>
      </div>
    </div>
  );
}

export default App;
