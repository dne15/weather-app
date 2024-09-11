import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import myImage from "../public/lens.png";

function App() {

  const [city, setCity] = useState("");

  function handleTyping (event) {
    setCity(event.target.value);
  }

  function handleSubmit (event) {
    event.preventDefault();
    console.log(city)
  }


  return (
    <div className="MacroContainer">

      
      <nav>
        <form>

        <img src={myImage}></img>

          <input value={city} onChange={handleTyping}  type="text" placeholder="Enter your City">
          </input>

          <button onClick={handleSubmit}>Search</button>

        </form>
      </nav>

      <div className="WeatherImage">
      </div>

      <div className="WeatherInfo">
      </div>




    </div>
  );
}

export default App;
