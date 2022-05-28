export interface PartHourlyWeather {
  icon: string;
  description: string;
  temp: number;
  time: string;
}

export interface HourlyWeather {
  metric: PartHourlyWeather[];
  imperial: PartHourlyWeather[];
}
