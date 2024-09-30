import React from "react";
import WeatherCard from "./WeatherCard";

function Location({location, data, setLocation}){
    const cityWeather = data.find(city => city.city === location);
    return (
        <div>
            <WeatherCard data={cityWeather} />
        </div>

    )
}

export default Location;
