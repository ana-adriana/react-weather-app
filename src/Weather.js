import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() { 
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
function handleResponse(response){
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
}

if (ready) {
    return(
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-9">
                <input type="search" 
                placeholder="Enter city...."
                className="form-control"
                autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" 
                value="Search" 
                className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>
        <h1>New York</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img 
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" 
                    alt="Mostly Cloudy"
                    className="float-left"/>
                    <span className="temperature">{Math.round(temperature)}</span>
                    <span className="unit">°C</span>
                    </div>
                    </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 15%</li>
                        <li>Humidity: 72%</li>
                        <li>Wind:13 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
} else {
    const apiKey = "a30966f3d7842afca4afb01054da2536";
    let city = "London";
    let apiUrl = 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
    }