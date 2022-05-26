interface PartWeatherData {
  icon: string;
  temp: number;
  precipitation: number;
  humidity: number;
  windSpeed: number;
  city: string;
  time: string;
  description: string;
}

export interface WeatherData {
  metric: PartWeatherData;
  imperial: PartWeatherData;
}
