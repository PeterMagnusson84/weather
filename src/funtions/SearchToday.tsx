import cloud from "../icons/cloud.svg";
import sun from "../icons/sun.svg";
import sunCloud from "../icons/sunCloud.svg";
import lightRain from "../icons/lightRain.svg";
import heavyRain from "../icons/heavyRain.svg";

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
  "10d": lightRain,
  "10n": lightRain
}

export const searchToday = async (city: string, apiKey: string | undefined) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&lang=se&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const icon = weatherIcons[data.weather[0].icon];
  console.log(data);
  return {
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    feelslike: data.main.feels_like,
    tempmax: data.main.temp_max,
    tempmin: data.main.temp_min,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    visibility: data.visibility,
    windSpeed: data.wind.speed,
    temprature: Math.floor(data.main.temp),
    city: data.name,
    country: data.sys.country,
    description: data.weather[0].description,
    icon: icon,
  };
};