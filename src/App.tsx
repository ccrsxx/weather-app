import { useState, useEffect } from 'react';
import { getWeather, parseWeather } from './common';
import { WeatherData } from './types';

export function App() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [query, setQuery] = useState<string>('');
  const [weatherData, setWeatherData] = useState<null | WeatherData>(null);
  const [forecastData, setForecastData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    handleWeather();
  }, []);

  const handleWeather = async (cityName = 'Tangerang') => {
    setIsFetching(true);

    let metricWeatherData, imperialWeatherData;

    try {
      metricWeatherData = await getWeather(cityName, 'metric');
      imperialWeatherData = await getWeather(cityName, 'imperial');
    } catch (error) {
      // TODO: handle error
      return;
    }

    const metric = parseWeather(metricWeatherData);
    const imperial = parseWeather(imperialWeatherData);

    setWeatherData({ metric, imperial });
  };

  const handleUnitChange = (unitType: 'metric' | 'imperial') => () => {
    if (unitType === unit) return;

    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  const {
    icon,
    temp,
    precipitation,
    humidity,
    windSpeed,
    city,
    time,
    description
  } = weatherData?.[unit] ?? {};

  return (
    <div className='m-4 flex justify-center'>
      <main className='h-[50vh] w-full max-w-2xl rounded-md border-2 p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img
              src={
                icon
                  ? `http://openweathermap.org/img/wn/${icon}@2x.png`
                  : undefined
              }
              alt={description}
            />
            <div>
              <div className='flex gap-2'>
                <p className='text-5xl text-black'>{temp}</p>
                <div className='relative -top-1'>
                  <button
                    style={{ color: unit === 'metric' ? 'black' : 'inherit' }}
                    type='button'
                    onClick={handleUnitChange('metric')}
                  >
                    °C
                  </button>
                  <i className='mx-1 ml-1.5 border-l-[1px] border-l-[#70757a]' />
                  <button
                    style={{ color: unit === 'imperial' ? 'black' : 'inherit' }}
                    type='button'
                    onClick={handleUnitChange('imperial')}
                  >
                    °F
                  </button>
                </div>
                <div className='relative -top-1 text-xs'>
                  <p>{`Precipitation: ${precipitation}%`}</p>
                  <p>{`Humidity: ${humidity}%`}</p>
                  <p>{`Wind: ${windSpeed} ${
                    unit === 'metric' ? 'km/h' : 'mph'
                  }`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mr-6 text-right'>
            <p className='text-xl text-black'>{city}</p>
            <p>{time}</p>
            <p>{description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
