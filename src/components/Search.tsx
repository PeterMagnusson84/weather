import React, { useState, useEffect } from 'react'
import { IWeatherData } from "../interfaces/IWeatherData";
import "../styled/search.css";
import DailyWeather from "./DailyWeather";
import TodaysHighlight from "./TodaysHighlight";
import CityNotFound from './CityNotFound';
import SearchInput from './SearchInput';
import searchIcon from "../icons/searchIcon.svg";
import { searchToday } from "../funtions/SearchToday";

const Search = () => {

  const [city, setCity] = useState("");
  const [searchvalue, setSearchValue] = useState<string>("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (triggerSearch && city !== "") {
      searchToday(city, apiKey).then((data) => { 
        setWeatherData(data); 
        setError(null)})
        .catch((error) => {
          setError(error.message);
          setSearchValue(city);
          setWeatherData(null)
        });
      setTriggerSearch(false);
    }
  }, [triggerSearch, city, apiKey]);

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if(city !== "") {
      setTriggerSearch(true);
    }
  };
  
  return (
    <div>
      <SearchInput
        city={city}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />

      <div className='flex-type-boxes'>
        {error && <CityNotFound error={error} city={searchvalue}/>}
        {weatherData && <>
        <DailyWeather 
          city={weatherData?.city}
          country={weatherData?.country}
          description={weatherData?.description}
          icon={weatherData?.icon}
          temprature={weatherData?.temprature}
        />
        <TodaysHighlight 
          sunrise={weatherData?.sunrise}
          sunset={weatherData?.sunset}
          feelslike={weatherData?.feelslike}
          tempmax={weatherData?.tempmax}
          tempmin={weatherData?.tempmin}
          humidity={weatherData?.humidity}
          pressure={weatherData?.pressure}
          visibility={weatherData?.visibility}
          windSpeed={weatherData?.windSpeed}
        />
        </>}
      </div>
    </div>
  )
}

export default Search