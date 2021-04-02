import { Clouds, Coordinates, Main, Weather, Wind } from "./IWeatherCardProps";

export interface IForecastWeatherProps {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherList[];
  city: City;
}

export type Rain = {
  rain3h: number;
};

export type System = {
  pod: string;
};

export type WeatherList = {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain: Rain;
  sys: System;
  dt_txt: string;
};

export type City = {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
};
