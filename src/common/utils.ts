import type { RawWeatherData } from '../types';

function getTime(dt: number, timeZone: string) {
  const date = new Date(dt * 1000);
  const day = date.toLocaleDateString('en-gb', { weekday: 'long' });
  const time = `${date
    .toLocaleTimeString('en-gb', { timeZone })
    .slice(0, -6)}:00`;
  return `${day}, ${time}`;
}

export function parseWeather(weatherData: RawWeatherData) {
  const { current, hourly, daily, timezone } = weatherData;

  const { weather, humidity, city, dt } = current;
  const [{ description, icon }] = weather;

  const precipitation = daily[0].rain;
  const windSpeed = Math.round(current.wind_speed);
  const temp = Math.round(current.temp);

  const time = getTime(dt, timezone);

  const finalWeatherData = {
    icon,
    temp,
    precipitation,
    humidity,
    windSpeed,
    city,
    time,
    description
  };

  return finalWeatherData;
}
