import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import myImage from "../public/lens.png";


 // SETTING THE STATES 

function App() {
  const [city, setCity] = useState("");
  const [cityConf, setCityConf] = useState("");
  const [weather, setWeather] = useState();


  // STORING WHAT THE USER IS INPUTTING

  function handleTyping(event) {
    setCity(event.target.value);
  }

  // STORING WHAT THE USER IS SUBMITING

  function handleSubmit(event) {
    event.preventDefault();
    setCityConf(city);
  }


  // FETCHING FORM THE API

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


  // RENDERING WHAT WE NEED

  return (
    <div className="MacroContainer">
      <nav>
        <form>
          <img className="glass" src={myImage}></img>

          <input
            value={city}
            onChange={handleTyping}
            type="text"
            placeholder="Enter your City"
          ></input>

          <button onClick={handleSubmit}><strong>Search</strong></button>
        </form>
      </nav>

      <div className="WeatherImage"></div>

      <div className="WeatherInfo">
        {weather ? (
          <p><strong> The weather overall in {cityConf} is:</strong> {weather.weather[0].description}
          <br/><br/>
          <strong>The humidity is:</strong> {weather.main.humidity}%
          <br/><br/>
          <strong>The Temp is: </strong>{weather.main.temp-273}</p>
        )  : null}
      </div>
    </div>
  );
}

export default App;
