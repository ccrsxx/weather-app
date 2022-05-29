import type { CurrentWeather } from './CurrentWeather';
import type { HourlyWeather } from './HourlyWeather';
import type { DailyWeather } from './DailyWeather';

export interface WeatherData {
  current: CurrentWeather;
  hourly: HourlyWeather;
  daily: DailyWeather;
}
