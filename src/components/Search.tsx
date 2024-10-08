import React, { useState, useEffect } from 'react'
import { TodayWeatherData } from "../interfaces/ITodayWeatherData";
import "../styled/search.css";
import DailyWeather from "./DailyWeather";
import searchIcon from "../icons/searchIcon.svg";
import { searchToday } from "../funtions/SearchToday";

const Search = () => {

  const [city, setCity] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [weatherData, setWeatherData] = useState<TodayWeatherData | null>(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (triggerSearch && city !== "") {
      searchToday(city, apiKey).then((data) => setWeatherData(data));
      setTriggerSearch(false);
    }
  }, [triggerSearch, city]);

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    setTriggerSearch(true);
    setShowSearch(true);
  };
  
  return (
    <div>
      <div className='search-field'>
        <input className='search-input' 
        type='text' 
        placeholder='Search' 
        onChange={handleInputChange} 
        value={city}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        />
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