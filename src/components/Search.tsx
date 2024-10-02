import React, { useState, useEffect } from 'react'
import { TodayWeatherData } from "../interfaces/ITodayWeatherData";
import "../styled/dailyWeather.css";
import DailyWeather from "./DailyWeather";
import searchSolid from "../icons/searchIcon.svg"; 

const Search = () => {

  // const [count, setCount] = useState(0);
  const [city, setCity] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [weatherData, setWeatherData] = useState<TodayWeatherData | null>(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const search = async (city: any)=>{
    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temprature: Math.floor(data.main.temp),
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: data.weather[0].icon
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
  
  return (
    <div>
      <div className='search-field'>
        <input className='search-input' type='text' placeholder='Search' onChange={handleInputChange} value={city}/>
        <img className='search-icon' src={searchSolid} alt="" onClick={handleSearch} />
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