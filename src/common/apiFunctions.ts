import { apiKey } from './apiKeys';

const getCoords = async (cityName: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  );
  const data = await response.json();
  const { name: city } = data;
  const { lat, lon } = data.coord;
  return { city, lat, lon };
};

export const getWeather = async (cityName: string, unit: string) => {
  const { city, lat, lon } = await getCoords(cityName);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`
  );
  const data = await response.json();
  return { ...data, current: { ...data.current, city } };
};
