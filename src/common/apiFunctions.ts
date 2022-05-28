import { apiKey } from './apiKeys';

async function getCoords(cityName: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  const { name: city } = data;
  const { lat, lon } = data.coord;
  return { city, lat, lon };
}

export async function getWeather(cityName: string, unit: string) {
  const { city, lat, lon } = await getCoords(cityName);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return { ...data, current: { ...data.current, city } };
}
