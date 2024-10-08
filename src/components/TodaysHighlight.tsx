import React from 'react'
import "../styled/dailyWeather.css"
import { ITodaysHighlights } from "../interfaces/ITodaysHighlights";

const TodaysHighlight = (props: ITodaysHighlights) => {
  
  return (
    <div>
     <div>sunrise:{props.sunrise}</div>
     <div>sunset:{props.sunset}</div>
     <div>feelslike:{props.feelslike}</div>
     <div>max temp:{props.tempmax}</div>
     <div>min temp:{props.tempmin}</div>
     <div>humidity:{props.humidity}</div>
     <div>pressure:{props.pressure}</div>
     <div>visability:{props.visibility}</div>
     <div>wind speed:{props.windSpeed}</div>
    </div>
  )
}

export default TodaysHighlight