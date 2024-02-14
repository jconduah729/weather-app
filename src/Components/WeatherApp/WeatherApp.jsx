import React, { useState } from 'react';
import './WeatherApp.css';


import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const api= { 
    key: "52aef1b62de65430a8117a8ecad0df3d",
    base: "http://weatherapi.com/v1"
 };

const WeatherApp = () => {



const [search, setSearch] = useState("");
 
 const searchPressed = () => {
    console.log("search pressed")
 }       
  return (
    <div className="container">
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search...' 
            onChange={(e) =>setSearch(e.target.value)} 
            />
            <div className="search-icon">
                <img src={search_icon} alt="" />
            </div>          
        </div>
        <div className="weather-image">
         <img src={wicon} alt="" />
        </div>
        <div className="weather-temp">16</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp;









/*const search = async () => {
    const element = document.getElementsByClassName("cityName");
    if(element[0].value==="")
    {
        return 0;
    }
    const url = `http://api.weatherapi.com/v1/forecast.json?q=${element[0].value}&key=${api_key}`

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.current.humidity+" %";
    wind[0].innerHTML = data.current.wind_mph+" mph";
    temperature[0].innerHTML = data.current.temp_f+" °F";
    location[0].innerHTML = data.location.name;

    if (data.current.condition.code===113) {
        setWicon(clear_icon);
    }
    else if (data.current.condition.code===119) {
        setWicon(cloud_icon);
    }
    else if (data.current.condition.code===266) {
        setWicon(drizzle_icon);
    }
    else if (data.current.condition.code===302) {
        setWicon(rain_icon);
    }
    else if (data.current.condition.code===332) {
        setWicon(snow_icon);
    }
    else {
        setWicon(clear_icon);
    }
} */