import type {
  RawWeather,
  PartCurrentWeather,
  PartDailyWeather,
  PartHourlyWeather
} from '../types';

function getTime(
  dt: number,
  timeZone: string,
  units: 'metric' | 'imperial',
  onlyTime = false,
  onlyDay = false,
  shortDay = false
) {
  const date = new Date(dt * 1000);
  const day = date.toLocaleDateString('en-gb', {
    weekday: onlyDay && !shortDay ? 'short' : 'long'
  });

  if (onlyDay) return day;

  const time = `${date
    .toLocaleTimeString(`en-${units === 'metric' ? 'gb' : 'us'}`, {
      timeZone,
      hour: 'numeric',
      minute: 'numeric'
    })
    .replace(/(\d{1,2}):\d{2}/, units === 'metric' ? '$1:00' : '$1')}`;

  return onlyTime ? time : `${day}, ${time}`;
}

function parseCurrentWeather(
  weatherData: RawWeather,
  units: 'metric' | 'imperial'
) {
  const { current, daily, timezone } = weatherData;

  const { weather, humidity, city, dt } = current;
  const [{ description, icon }] = weather;

  const precipitation = Math.round(daily[0].rain);
  const windSpeed = Math.round(current.wind_speed);
  const temp = Math.round(current.temp);

  const time = getTime(dt, timezone, units);

  return {
    icon,
    temp,
    precipitation,
    humidity,
    windSpeed,
    city,
    time,
    description
  };
}

function parseHourlyWeather(
  weatherData: RawWeather,
  units: 'metric' | 'imperial'
) {
  const hourly = weatherData.hourly.slice(1, 9);

  return hourly.map((hourData) => {
    const { weather, dt } = hourData;
    const [{ icon, description }] = weather;
    const temp = Math.round(hourData.temp);

    const time = getTime(dt, weatherData.timezone, units, true);

    return {
      icon,
      description,
      temp,
      time
    };
  });
}

function parseDailyWeather(
  weatherData: RawWeather,
  units: 'metric' | 'imperial'
) {
  const { current, daily, timezone } = weatherData;

  return daily.map((dayData) => {
    const { weather, temp: dayTemp, humidity, dt } = dayData;
    const { city } = current;
    const [{ description, icon }] = weather;
    const [min, max] = [dayTemp.min, dayTemp.max].map((i) => Math.round(i));
    const temp = Math.round((min + max) / 2);
    const precipitation = dayData.rain ? Math.round(dayData.rain) : 0;
    const windSpeed = Math.round(dayData.wind_speed);
    const day = getTime(dt, timezone, units, false, true);
    const time = getTime(dt, timezone, units, false, true, true);
    return {
      icon,
      temp,
      min,
      max,
      precipitation,
      humidity,
      windSpeed,
      city,
      time,
      day,
      description
    };
  });
}

export function parseWeatherData(
  weatherData: RawWeather,
  units: 'metric' | 'imperial'
): [PartCurrentWeather, PartHourlyWeather[], PartDailyWeather[]] {
  const currentWeatherData = parseCurrentWeather(weatherData, units);
  const hourlyWeatherData = parseHourlyWeather(weatherData, units);
  const dailyWeatherData = parseDailyWeather(weatherData, units);

  return [currentWeatherData, hourlyWeatherData, dailyWeatherData];
}
