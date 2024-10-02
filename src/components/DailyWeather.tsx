import React from 'react'
import "../styled/dailyWeather.css"
import { TodayWeatherData } from "../interfaces/ITodayWeatherData";

const DailyWeather = (props: TodayWeatherData) => {

  console.log(props.icon);
  
  return (
    <div className='daily-container'>
      <div className='daily-content'>
        <div>Weather infromation</div>
        <div>{props.temprature}</div>
        <div><img src={props?.icon} alt=""/></div>
        <div>{props.description}</div>
        <div>{props.humidity}</div>
        <div>{props.city}</div>
        <div>{props.country}</div> 
      </div>
    </div>
  )
}

export default DailyWeather