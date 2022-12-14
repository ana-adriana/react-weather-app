import React, {useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let[loaded, setLoaded] = useState(false);
    let [forecast, setForecast]=useState(null);

    useEffect(() =>{
setLoaded(false);
    }, [props.coordinates]);

    function day(){
        let date=new Date(forecast.data.dt * 1000);
        let day = date.getDay();

        let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
}

function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
}

    if(loaded) {
        return (
    <div className="WeatherForecast">
        <div className = "row">
        <div className="col">
            <div className="WeatherForecast-day">
                {day(0)}
                </div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">
                    {Math.round(forecast[0].temp.max)}°
                    </span>
                <span className="WeatherForecast-temperature-min">
                    {Math.round(forecast[0].temp.min)}°
                    </span>
            </div>
            </div>
            <div className="col">
            <WeatherIcon code={forecast[1].weather[1].icon} size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">
                    {Math.round(forecast[1].temp.max)}°
                    </span>
                <span className="WeatherForecast-temperature-min">
                    {Math.round(forecast[1].temp.min)}°
                    </span>
            </div>
            </div>
            <div className="col">
            <WeatherIcon code={forecast[2].weather[2].icon} size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">
                    {Math.round(forecast[2].temp.max)}°
                    </span>
                <span className="WeatherForecast-temperature-min">
                    {Math.round(forecast[2].temp.min)}°
                    </span>
            </div>
            </div>
            <div className="col">
            <WeatherIcon code={forecast[3].weather[3].icon} size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">
                    {Math.round(forecast[3].temp.max)}°
                    </span>
                <span className="WeatherForecast-temperature-min">
                    {Math.round(forecast[3].temp.min)}°
                    </span>
            </div>
            </div>
            <div className="col">
            <WeatherIcon code={forecast[4].weather[4].icon} size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">
                    {Math.round(forecast[4].temp.max)}°
                    </span>
                <span className="WeatherForecast-temperature-min">
                    {Math.round(forecast[4].temp.min)}°
                    </span>
            </div>
            </div>
        </div>
    </div>
    );
        } else {
    let apiKey="46fac47dd8b8fa26d1b6852218ad3dfe";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);  

    return null;
    }
}