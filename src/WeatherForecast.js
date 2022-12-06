import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
function handleResponse(response){
    console.log(response.data);
}
console.log(props);

    let apiKey="46fac47dd8b8fa26d1b6852218ad3dfe";
    let longitude= props.coordinates.lon;
    let latitude=props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
    
    return (
    <div className="WeatherForecast">
        <div className = "row">
        <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="01d" />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">19°</span>
                <span className="WeatherForecast-temperature-min">2°</span>
            </div>
        </div>
    </div>
    </div>
    );
}