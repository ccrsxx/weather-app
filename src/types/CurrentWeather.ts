export interface PartCurrentWeather {
  icon: string;
  temp: number;
  precipitation: number;
  humidity: number;
  windSpeed: number;
  city: string;
  time: string;
  description: string;
}

export interface CurrentWeather {
  metric: PartCurrentWeather;
  imperial: PartCurrentWeather;
}
