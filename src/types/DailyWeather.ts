export interface PartDailyWeather {
  icon: string;
  min: number;
  max: number;
  precipitation: number;
  humidity: number;
  day: string;
  description: string;
}

export interface DailyWeather {
  metric: PartDailyWeather[];
  imperial: PartDailyWeather[];
}
