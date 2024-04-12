import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [city, updateCity] = useState(null);
  let [temp, setTemp] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let iconSource = `https://openweathermap.org/img/wn/${icon}.png`;

  function newCity(event) {
    updateCity(event.target.value);
  }

  function showWeather(response) {
    setTemp(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `32feea4cbb7bc29288ae4d4a2465feab`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={newCity} />
        <input type="submit" value="Search" />
      </form>

      {temp && (
        <ul className="weatherList">
          <li>{temp}°C</li>
          <li>{description}</li>
          <li>{humidity}%</li>
          <li>{wind} m/s</li>
          <li>
            <img src={iconSource} alt="weather description icon" />
          </li>
        </ul>
      )}
    </div>
  );
}
