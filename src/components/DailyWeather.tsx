import React from 'react'
import "../styled/dailyWeather.css"
import { ITodaysWeather } from "../interfaces/ITodaysWeather";
import TodaysDate from "./TodaysDate";
import loction from "../icons/location.svg";
import calendar from "../icons/calendar.svg";

const DailyWeather = (props: ITodaysWeather) => {
  
  return (
    <div className='daily-container'>
      <div className='daily-content'>
        <div>Dagens väder</div>
        <div className='weather-temp-area'>
          <div className='weather-temp'>{props.temprature}<span>&deg;c</span></div>
          <div className='weather-icon'>
            <img src={props?.icon} alt=""/>
          </div>
        </div>
        <div className='weather-desc'>{props.description}</div>
        <div className='weather-line'></div>
        <div className='weather-date-area'>
          <div className='weather-location-icon'><img src={calendar} alt=''/></div>
          <div><TodaysDate/></div>
        </div>
        <div className='weather-location-area'>
          <div>
            <div className='weather-location-icon'>
              <img src={loction} alt=''/>
            </div>
          </div>
          <div className='weather-location'>
            <div>{props.city}</div>
            <div>{props.country}</div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyWeather