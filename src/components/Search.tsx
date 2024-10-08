import React, { useState, useEffect } from 'react'
import { IWeatherData } from "../interfaces/IWeatherData";
import "../styled/search.css";
import DailyWeather from "./DailyWeather";
import TodaysHighlight from "./TodaysHighlight";
import searchIcon from "../icons/searchIcon.svg";
import { searchToday } from "../funtions/SearchToday";

const Search = () => {

  const [city, setCity] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

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
        icon={weatherData?.icon}
        temprature={weatherData?.temprature}
      />}
      {showSearch && <TodaysHighlight 
        sunrise={weatherData?.sunrise}
        sunset={weatherData?.sunset}
        feelslike={weatherData?.feelslike}
        tempmax={weatherData?.tempmax}
        tempmin={weatherData?.tempmin}
        humidity={weatherData?.humidity}
        pressure={weatherData?.pressure}
        visibility={weatherData?.visibility}
        windSpeed={weatherData?.windSpeed}
      />}
    </div>
  )
}

export default Search