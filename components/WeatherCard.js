import React from "react";
import Sunny from "../assets/Sunny.svg"
import Rainy from "../assets/Rainy.svg"
import Cloudy from "../assets/Cloudy.svg"
import PartlyCloudy from "../assets/PartlyCloudy.svg"

function WeatherCard({data}) {
  return (
    <div className = "card">
      <h3>Your lcoation's weather</h3>
        <div className = "img-container">
        
            <img className="card-img-top" src = {data.forecast == 'Sunny' ? Sunny :
                                                 data.forecast == 'Rainy' ? Rainy :
                                                 data.forecast == 'Cloudy' ? Cloudy:
                                                 data.forecast == 'Partly cloudy' ? PartlyCloudy: Rainy } alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">The Weather in {data.city} is about {data.temperature}</h3>
            <h5 className="card-text"></h5>
            <h5 className="card-text">It is {data.forecast} out today</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
export default WeatherCard;