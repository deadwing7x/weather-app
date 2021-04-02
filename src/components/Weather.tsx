import React, { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IForecastWeatherProps, IWeatherCardProps } from "../models/index";
import ForecastWeatherCard from "./ForecastWeatherCard";
import WeatherCard from "./WeatherCard";

const baseUrl: string = "https://api.openweathermap.org/data/2.5/";
const API_Key: string = "909490635a81cf7c920da17401bb60af";

const Weather: React.FC<{}> = () => {
  const [place, setPlace] = useState<string>("");
  const [weatherData, setWeatherData] = useState<IWeatherCardProps | any>();
  const [forecastWeatherData, setForecastWeatherData] = useState<
    IForecastWeatherProps | any
  >();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const getCurrentWeatherForLocationSearched = async () => {
    const req = await fetch(
      `${baseUrl}weather?q=${place}&appid=${API_Key}&units=metric`
    );

    return req;
  };

  const getForecastData = async () => {
    const req = await fetch(
      `${baseUrl}forecast?q=${place}&appid=${API_Key}&units=metric`
    );

    return req;
  };

  const fetchCurrentWeather = async () => {
    if (place) {
      const currentWeatherResponse = await getCurrentWeatherForLocationSearched();
      const forecastWeatherResponse = await getForecastData();

      currentWeatherResponse.json().then((data: IWeatherCardProps) => {
        const weatherCardProps: IWeatherCardProps = data;

        setWeatherData(weatherCardProps);
      });

      forecastWeatherResponse.json().then((data: IForecastWeatherProps) => {
        const forecastWeatherProps: IForecastWeatherProps = data;

        setForecastWeatherData(forecastWeatherProps);
      });

      if (
        currentWeatherResponse.status === 404 ||
        forecastWeatherResponse.status === 404
      ) {
        setErrorMessage(
          "Couldn't fetch data for this city! Please search for some other city."
        );
        setPlace("");
        setLoaded(false);
      } else if (
        currentWeatherResponse.status === 200 ||
        forecastWeatherResponse.status === 200
      ) {
        setLoaded(true);
        setPlace("");
      }
    } else {
      setErrorMessage("Please enter a city to search!");
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search for a place..."
          className="border-2 border-blue-500 rounded-md text-xl text-gray-500 m-4 pl-2 w-2/12 focus:outline-none focus:border-2 focus:border-pink-500"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPlace(event.currentTarget.value);
            setErrorMessage("");
          }}
          value={place}
        />
        <FaSearchLocation
          className="text-2xl mt-5 cursor-pointer hover:text-purple-800"
          onClick={fetchCurrentWeather}
        />
      </div>
      <div>
        {weatherData && forecastWeatherData ? (
          loaded ? (
            <>
              <p className="flex justify-center">
                Data fetched at{" "}
                {new Date(weatherData.dt * 1000).toLocaleString()}
              </p>
              <WeatherCard {...weatherData} />
              <hr />
              <ForecastWeatherCard {...forecastWeatherData} />{" "}
            </>
          ) : (
            <p className="flex justify-center text-2xl text-red-600 font-bold">
              {errorMessage}
            </p>
          )
        ) : (
          <p className="flex justify-center text-2xl text-red-600 font-bold">
            {errorMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default Weather;
