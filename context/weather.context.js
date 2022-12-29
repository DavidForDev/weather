import { createContext } from "react";
import { utc } from "moment";

// =========== State =========== \\
const weatherDetail = {
  windSpeed: 0,
  humidity: 0,
  pressure: 0,
  description: "",
  temperature: 0,
  sunrise: 0,
  sunset: 0,
};

const initialState = {
  ...weatherDetail,
  cityData: "",
  time: 0,
  getWeather: null,
};

// ========== Create Context ========== \\
const WeatherContext = createContext(initialState);

export const WeatherContextWrapper = ({ children, datastate }) => {
  // ==== Calculate sunrise && sunset
  const sun = (value, timezone) => {
    return utc(value, "X").add(timezone, "seconds").format("HH:mm a");
  };

  // ==== weather Detail
  const weatherDetail = {
    windSpeed: Math.floor(datastate?.wind.speed * 3.6),
    humidity: datastate?.main.humidity,
    pressure: datastate?.main.pressure,
    description: datastate?.weather[0].description,
    temperature: Math.floor(datastate?.main.feels_like),
    sunrise: sun(datastate?.sys.sunrise, datastate?.timezone),
    sunset: sun(datastate?.sys.sunset, datastate?.timezone),
  };

  // ==== time
  const time = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const state = {
    ...weatherDetail,
    cityData: datastate,
    time: time,
  };

  return (
    <WeatherContext.Provider value={state}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
