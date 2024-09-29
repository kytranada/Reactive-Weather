import React from 'react';
// Import data and WeatherCard here
import  cities  from "/data";
import WeatherCard from './components/WeatherCard';


function App() {
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {cities.map((e) => (
                   <WeatherCard city = {e.city} temperature={e.temperature} forecast = {e.forecast}/>
                ))}
                


            </div>
            
        </>
    )
}

export default App;