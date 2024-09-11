import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import myImage from "../public/lens.png";

function App() {
  return (
    <>
      <nav>
        <form>
          <img src={myImage}></img>
          <input type="text" placeholder="Enter your City"></input>
          <button>Search</button>
        </form>
      </nav>
    </>
  );
}

export default App;
