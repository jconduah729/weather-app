import {React,  useState } from 'react'
import './App.css'

import search_icon from './components/images/search.png';
import clear_icon from './components/images/clear.png';
import cloud_icon from './components/images/cloud.png';
import drizzle_icon from './components/images/drizzle.png';
import rain_icon from './components/images/rain.png';
import snow_icon from './components/images/snow.png';
import wind_icon from './components/images/wind.png';
import humidity_icon from './components/images/humidity.png';

function App() {
    //declare API Key
let api_key = "414fea084b3947b180a204855240702";

const [wicon,setWicon] = useState(cloud_icon);

const search = async () => {
    // collect input for Location
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value==="")
    {
        return 0;
    } 
    // appends API key and location for API call
    let url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${element[0].value}&aqi=no`
    //handle f
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    temperature[0].innerHTML = Math.floor(data.current.temp_f) + " °F"

    //logic for displaying State vs Country depending on location
    data.location.country === "United States of America" ? location[0].innerHTML = data.location.name + ", " + data.location.region :
     location[0].innerHTML = data.location.name + ", " + data.location.country

    //set wind/humidity values
    humidity[0].innerHTML = data.current.humidity + " %"
    wind[0].innerHTML = data.current.wind_mph + " MPH"

    // conditions for changing icons
    data.current.condition.code===1000 ? setWicon(clear_icon) : 
    data.current.condition.code===1006 || 1009 || 1003 ? setWicon(cloud_icon) :
    data.current.condition.code===1063 || 1150 || 1153 || 1168 || 1171 || 1180 ? setWicon(drizzle_icon) :
    data.current.condition.code===1183 || 1186 || 1189 || 1240 | 1243 || 1246 || 1273 || 1276 || 1279 || 1282 ? setWicon(rain_icon) :
    data.current.condition.code===1210 || 1213 || 1216 || 1219 || 1222 || 1225 || 1255 || 1258 || 1261 || 1264 ? setWicon(snow_icon) :
    setWicon(clear_icon);
}

    // displaying data
  return (  
  <div className="background">
    <div className="container"> 
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search...' 
             
            />
            <div className="search-icon" onClick={()=>search()}>
                <img src={search_icon} alt="" />
            </div>          
        </div>
        <div className="weather-image">
            <img src={wicon} alt="" />
        </div>
        <div className="weather-temp"></div>
        <div className="weather-location">--</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent"> --</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate"> --</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default App;
