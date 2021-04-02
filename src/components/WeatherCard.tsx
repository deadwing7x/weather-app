import React from "react";
import { IWeatherCardProps } from "../models/IWeatherCardProps";

const WeatherCard: React.FC<IWeatherCardProps> = (props: IWeatherCardProps) => {
  const icon = `http://openweathermap.org/img/wn/${props?.weather[0].icon}@2x.png`;

  return (
    <div className="p-10">
      <div className="max-w-sm h-72 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="grid grid-rows-3 grid-cols-4 grid-flow-col">
            <div className="row-span-3 col-span-3">
              <p className="font-bold text-3xl">
                {props.name}, {props.sys.country}
              </p>
            </div>
            <div className="col-span-1">
              <img
                src={icon}
                className="relative bottom-6"
                alt="weather-icon"
              />
            </div>
            <div className="row-span-2 col-span-1 text-3xl relative bottom-6">
              {props.main.temp.toFixed()} &#176;C
            </div>
          </div>
          <div className="grid grid-rows-4 grid-flow-col text-gray-700 text-lg text-base relative -top-32">
            <div className="row-span-1">
              <div className="grid grid-cols-4">
                <div className="col-span-2">
                  <b>Feels like:</b> {props.main.feels_like.toFixed()} &#176;C
                </div>
                <div className="col-span-2">
                  <b>Humidity:</b> {props.main.humidity.toFixed()}%
                </div>
              </div>
            </div>
            <div className="row-span-1">
              <div className="grid grid-cols-4">
                <div className="col-span-2">
                  <b>Max:</b> {props.main.temp_max.toFixed()} &#176;C
                </div>
                <div className="col-span-2">
                  <b>Min:</b> {props.main.temp_min.toFixed()} &#176;C
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 relative -top-48">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2">
            {props.weather[0].main}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
