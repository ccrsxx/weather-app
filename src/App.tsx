import React, { useState, useEffect } from 'react';
import { Weather, Control, Forecast } from './components';
import { getWeather, parseWeatherData as parseWeather } from './common';
import type { CurrentWeather, HourlyWeather, DailyWeather } from './types';

export function App() {
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric');
  const [query, setQuery] = useState<string>('');
  const [dayIndex, setDayIndex] = useState<number>(0);
  const [isFetching, setIsFetching] = useState(false);
  const [errorStatus, setIsErrorStatus] = useState({
    errorStatus: false,
    errorMessage: ''
  });
  const [forecastMode, setForecastMode] = useState<'hourly' | 'daily'>('daily');
  const [currentWeather, setCurrentWeather] = useState<null | CurrentWeather>(
    null
  );
  const [hourlyWeather, setHourlyWeather] = useState<null | HourlyWeather>(
    null
  );
  const [dailyWeather, setDailyWeather] = useState<null | DailyWeather>(null);

  useEffect(() => {
    const randomizeGradient = () => {
      const ogColors = ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'];

      const shuffledColors = ogColors
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      shuffledColors.forEach((color, index) =>
        document.documentElement.style.setProperty(`--color-${index}`, color)
      );
    };
    randomizeGradient();
    handleWeather();
  }, []);

  const handleWeather = async (cityName = 'Tangerang') => {
    setIsFetching(true);

    let metricData, imperialData;

    try {
      [metricData, imperialData] = await Promise.all(
        ['metric', 'imperial'].map((unit) => getWeather(cityName, unit))
      );
    } catch ({ message }) {
      const errorMessage = (
        message === 'Not Found'
          ? 'Please enter a valid city'
          : 'Your request is failed'
      ) as string;
      setIsFetching(false);
      setIsErrorStatus({ errorStatus: true, errorMessage });
      return;
    }

    const [metricCurrent, metricHourly, metricDaily] = parseWeather(
      metricData,
      'metric'
    );

    const [imperialCurrent, imperialHourly, imperialDaily] = parseWeather(
      imperialData,
      'imperial'
    );

    setCurrentWeather({
      metric: metricCurrent,
      imperial: imperialCurrent
    });

    setHourlyWeather({
      metric: metricHourly,
      imperial: imperialHourly
    });

    setDailyWeather({
      metric: metricDaily,
      imperial: imperialDaily
    });

    setIsFetching(false);
    setIsErrorStatus({ errorStatus: false, errorMessage: '' });
  };

  const clearQuery = () => {
    const input = document.querySelector('input') as HTMLInputElement;
    input.value = '';
    setQuery('');
  };

  const handleUnitChange = (unitType: 'metric' | 'imperial') => () => {
    if (unitType === units) return;
    setUnits(unitType);
  };

  const handleForecastModeChange = (mode: 'hourly' | 'daily') => () => {
    if (mode === forecastMode) return;
    if (dayIndex) setDayIndex(0);
    setForecastMode(mode);
  };

  const handleDayIndexChange = (index: number) => () => {
    if (index === dayIndex) return;
    setDayIndex(index);
  };

  const handleQueryChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(value);
  };

  const handleSumbmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) handleWeather(query);
  };

  const currentForecast = !dayIndex
    ? currentWeather?.[units]
    : dailyWeather?.[units][dayIndex];

  const hourlyForecast = hourlyWeather?.[units];
  const dailyForecast = dailyWeather?.[units];

  return (
    <div className='mx-4 flex min-h-screen items-center justify-center'>
      <main
        className={`${
          isFetching && 'animate-pulse'
        } flex w-full max-w-3xl flex-col gap-4 rounded-md border-2 
          bg-[rgba(255,255,255,0.8)] px-8 py-6`}
      >
        <Weather
          units={units}
          handleUnitChange={handleUnitChange}
          {...currentForecast}
        />
        <Control
          {...errorStatus}
          query={query}
          forecastMode={forecastMode}
          clearQuery={clearQuery}
          handleSubmit={handleSumbmit}
          handleQueryChange={handleQueryChange}
          handleForecastModeChange={handleForecastModeChange}
        />
        <Forecast
          dayIndex={dayIndex}
          forecastMode={forecastMode}
          hourlyForecast={hourlyForecast}
          dailyForecast={dailyForecast}
          handleDayIndexChange={handleDayIndexChange}
        />
      </main>
    </div>
  );
}
