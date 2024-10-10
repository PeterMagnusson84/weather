import React from 'react'
import "../styled/todaysHighlight.css"
import { ITodaysHighlights } from "../interfaces/ITodaysHighlights";
import { ConvertToTime } from "../funtions/ConvertToTime";
import sun from "../icons/sun.svg";
import moon from "../icons/moon.svg";
import feelslike from "../icons/tempfeels.svg";
import humidity from "../icons/humidity.svg";
import pressure from "../icons/pressure.svg";
import visibilty from "../icons/eye.svg";
import wind from "../icons/wind.svg";


const TodaysHighlight = (props: ITodaysHighlights) => {

  const sunriseTime = ConvertToTime(props.sunrise ?? 0);
  const sunsetTime = ConvertToTime(props.sunset ?? 0);
  
  return (
    <div className='highlight-container'>
      <div className='highlight-content'>
        <div className='flex-highlight-boxes'>
          <div className='darkbox'>
            <div className='highlight-title'>Soluppgång & Solnedgång</div>
            <div className='highlight-flex-wrap'>
              <div className="sunrise-time-container">
                <div className="sunrise-time-left"><div style={{width: "60px"}}><img src={sun} alt=''/></div></div>
                <div className="sunrise-time-right">
                  <div className="sunrise-time-top-right">Soluppgång</div>
                  <div className="sunrise-time-bottom-right">{sunriseTime}</div>
                </div>
              </div>
              <div className="sunrise-time-container">
                <div className="sunrise-time-left"><div className='higlight-icon'><img src={moon} alt=''/></div></div>
                <div className="sunrise-time-right">
                  <div className="sunrise-time-top-right">solnedgång</div>
                  <div className="sunrise-time-bottom-right">{sunsetTime}</div>
                </div>
              </div>
            </div>
          </div>
          <div className='darkbox'>
            <div className='highlight-flex-column'>
              <div className='highlight-title'>Känns som</div>
              <div style={{display: "flex", gap: "15px"}}>
                <div className='higlight-icon'><img src={feelslike} alt=''/></div>
                <div style={{fontSize: "30px"}}>{props.feelslike}</div>
              </div>
            </div>
          </div>
          <div className='darkbox'>
            <div className='highlight-flex-column'>
              <div className='highlight-title'>Luftfuktighet</div>
              <div style={{display: "flex", gap: "15px"}}>
                <div className='higlight-icon'><img src={humidity} alt=''/></div>
                <div style={{fontSize: "30px"}}>{props.humidity}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-highlight-boxes'>
          <div className='darkbox'>
            <div className='highlight-flex-column'>
              <div className='highlight-title'>Max / Min Temperatur</div>
              <div style={{display: "flex", gap: "15px"}}>
                <div className='higlight-icon'><img src={feelslike} alt=''/></div>
                <div style={{fontSize: "30px"}}>{props.tempmax} / {props.tempmin}</div>
              </div>
            </div>
          </div>
          <div className='darkbox'>
          <div className='highlight-flex-column'>
              <div className='highlight-title'>Tryck</div>
              <div style={{display: "flex", gap: "15px"}}>
                <div className='higlight-icon'><img src={pressure} alt=''/></div>
                <div style={{fontSize: "30px"}}>{props.pressure}</div>
              </div>
            </div>
          </div>
          <div className='darkbox'>
          <div className='highlight-flex-column'>
              <div className='highlight-title'>Synlighet</div>
              <div style={{display: "flex", gap: "15px"}}>
                <div className='higlight-icon'><img src={visibilty} alt=''/></div>
                <div style={{fontSize: "30px"}}>{props.visibility}</div>
              </div>
            </div>
          </div>
          <div className='darkbox'>
          <div className='highlight-flex-column'>
              <div className='highlight-title'>Vind hastighet</div>
              <div style={{display: "flex", gap: "15px"}}>
                <div className='higlight-icon'><img src={wind} alt=''/></div>
                <div style={{fontSize: "30px"}}>{props.windSpeed}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodaysHighlight