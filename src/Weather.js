import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) { 
    const [weatherData, setWeatherData] = useState({ ready: false });
    const[city, setCity] = useState(props.defaultCity);
function handleResponse(response) {
    setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        iconUrl: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name
    });
}

function search(){
    const apiKey =`a30966f3d7842afca4afb01054da2536`;
    let apiUrl = 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
event.preventDefault();
search(city);

}

function handleCityChange(event){
setCity(event.target.value);
}

 if (weatherData.ready) {
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                <input type="search" 
                placeholder="Enter city...."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange} />
                </div>
                <div className="col-3">
                <input type="submit" 
                value="Search" 
                className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates}/>
            </div>
    ); 
} else {
    search();
    return "Loading...";
}
}