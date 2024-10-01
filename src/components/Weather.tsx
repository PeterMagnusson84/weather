import React from 'react'
import "../styled/dailyWeather.css"
import { TodayWeatherData } from "../interfaces/ITodayWeatherData";

const Weather = (props: TodayWeatherData) => {
  
  return (
    <div className='daily-container'>
        <div className='daily-content'>
      <div>Weather infromation</div>
      <div>{props.temprature}</div>
      <div>{props.icon}</div>
      <div>{props.description}</div>
      <div>{props.humidity}</div>
      <div>{props.city}</div>
      <div>{props.country}</div> 
    </div>
    </div>
  )
}

export default Weather