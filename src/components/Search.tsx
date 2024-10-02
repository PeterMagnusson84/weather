import React, { useState, useEffect } from 'react'
import { TodayWeatherData } from "../interfaces/ITodayWeatherData";
import "../styled/dailyWeather.css";
import DailyWeather from "./DailyWeather";
import searchIcon from "../icons/searchIcon.svg";
import cloud from "../icons/cloud.svg";
import sun from "../icons/sun.svg";
import sunCloud from "../icons/sunCloud.svg";
import lightRain from "../icons/lightRain.svg";
import heavyRain from "../icons/heavyRain.svg";

const Search = () => {

  // const [count, setCount] = useState(0);
  const [city, setCity] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [weatherData, setWeatherData] = useState<TodayWeatherData | null>(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  const weatherIcons: { [key: string]: string } = {
    "01d": sun,
    "02d": cloud,
    "03d": sunCloud,
    "04d": sunCloud,
    "05d": "",
    "06d": "",
    "07d": "",
    "08d": "",
    "09d": heavyRain,
    "10d": lightRain
  }

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const search = async (city: any)=>{
    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = weatherIcons[data.weather[0].icon];
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temprature: Math.floor(data.main.temp),
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: icon
      })
    }catch (error){
      
    }
  }
  
  useEffect(()=>{
    if (triggerSearch && city !== "") {
    search(city);
    setTriggerSearch(false);
    }
  },[triggerSearch, city, search] )

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCity(e.target.value); // Update the state with input value
  };

  const handleSearch = () => {
    setTriggerSearch(true);
    setShowSearch(true);
  };

  console.log(weatherData?.icon);
  
  return (
    <div>
      <div className='search-field'>
        <input className='search-input' type='text' placeholder='Search' onChange={handleInputChange} value={city}/>
        <img className='search-icon' src={searchIcon} alt="" onClick={handleSearch} />
      </div>
      {showSearch && <DailyWeather 
        city={weatherData?.city} 
        country={weatherData?.country} 
        description={weatherData?.description}
        humidity={weatherData?.humidity}
        icon={weatherData?.icon}
        temprature={weatherData?.temprature}
        windSpeed={weatherData?.windSpeed}
      />}
    </div>
  )
}

export default Search