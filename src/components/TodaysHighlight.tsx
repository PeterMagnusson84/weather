import React from 'react'
import "../styled/todaysHighlight.css"
import { ITodaysHighlights } from "../interfaces/ITodaysHighlights";
import { ConvertToTime } from "../funtions/ConvertToTime";
import sun from "../icons/sun.svg";
import moon from "../icons/moon.svg";


const TodaysHighlight = (props: ITodaysHighlights) => {

  const sunriseTime = ConvertToTime(props.sunrise ?? 0);
  const sunsetTime = ConvertToTime(props.sunset ?? 0);
  
  return (
    <div className='highlight-container'>
      <div className='highlight-content'>
        <div className='flex-highlight-boxes'>
          <div className='darkbox'>
            <div className='highlight-title'>Soluppgång & Solnedgång</div>
            <div style={{display: "flex", gap: "35px"}}>
              <div className="sunrise-time-container">
                <div className="sunrise-time-left"><div style={{width: "60px"}}><img src={sun} alt=''/></div></div>
                <div className="sunrise-time-right">
                  <div className="sunrise-time-top-right">Soluppgång</div>
                  <div className="sunrise-time-bottom-right">{sunriseTime}</div>
                </div>
              </div>
              <div className="sunrise-time-container">
                <div className="sunrise-time-left"><div style={{width: "50px"}}><img src={moon} alt=''/></div></div>
                <div className="sunrise-time-right">
                  <div className="sunrise-time-top-right">solnedgång</div>
                  <div className="sunrise-time-bottom-right">{sunsetTime}</div>
                </div>
              </div>
            </div>
          </div>
          <div className='darkbox'>
            <div>feelslike:{props.feelslike}</div>
          </div>
          <div className='darkbox'>
            <div>max temp:{props.tempmax}</div>
            <div>min temp:{props.tempmin}</div>
          </div>
        </div>
        <div className='flex-highlight-boxes'>
          <div className='darkbox'>
            <div>humidity:{props.humidity}</div>
          </div>
          <div className='darkbox'>
            <div>pressure:{props.pressure}</div>
          </div>
          <div className='darkbox'>
            <div>visability:{props.visibility}</div>
          </div>
          <div className='darkbox'>
            <div>wind speed:{props.windSpeed}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodaysHighlight