import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./HeaderComponent/Header.js";
import Main from "./MainComponent/Main.js";
import Footer from "./FooterComponent/Footer.js";

function App() {
  //APOD API data state
  const [nasaData, setNasaData] = useState("");

  // Get data from APOD API and set it to state
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=ISxzksvzhe64bUJ5MbC8GRmBh8YcAElwRO49xiIE"
      )
      .then((response) => {
        console.log(response);
        setNasaData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // App
  return (
    <div className="App">
      <Header title={nasaData.title} date={nasaData.date} />
      <Main src={nasaData.url} description={nasaData.explanation} />
      <Footer copyright={nasaData.copyright} />
    </div>
  );
}

export default App;
