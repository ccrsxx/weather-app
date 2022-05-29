import { useState, useRef, useEffect } from 'react';
import { Main, Weather, Control, Forecast, Footer } from './components';
import {
  defaultWeather,
  defaultError,
  getWeather,
  sleep,
  parseWeatherData
} from './common';
import type { WeatherData } from './types';

export function App() {
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric');
  const [query, setQuery] = useState<string>('');
  const [dayIndex, setDayIndex] = useState<number>(0);
  const [isFetching, setIsFetching] = useState(false);
  const [errorStatus, setErrorStatus] = useState(defaultError);
  const [weatherData, setWeatherData] = useState<WeatherData>(defaultWeather);
  const [forecastMode, setForecastMode] = useState<'hourly' | 'daily'>('daily');

  const firstRender = useRef(true);

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
    firstRender.current = false;
  }, []);

  const handleWeather = async (cityName = 'Jakarta') => {
    let metricData, imperialData;

    handleFetching();

    if (!firstRender.current) await sleep(500);

    try {
      [metricData, imperialData] = await Promise.all(
        ['metric', 'imperial'].map((unit) => getWeather(cityName, unit))
      );
    } catch ({ message }) {
      handleError(message as string);
      return;
    }

    const [metricCurrent, metricHourly, metricDaily] = parseWeatherData(
      metricData,
      'metric'
    );

    const [imperialCurrent, imperialHourly, imperialDaily] = parseWeatherData(
      imperialData,
      'imperial'
    );

    setWeatherData({
      current: {
        metric: metricCurrent,
        imperial: imperialCurrent
      },
      hourly: {
        metric: metricHourly,
        imperial: imperialHourly
      },
      daily: {
        metric: metricDaily,
        imperial: imperialDaily
      }
    });

    handleSuccess();
  };

  const clearQuery = () => {
    const input = document.querySelector('input') as HTMLInputElement;
    input.value = '';
    setQuery('');
  };

  const handleFetching = () => {
    setErrorStatus(defaultError);
    setIsFetching(true);
  };

  const handleError = (message: string) => {
    const errorMessage = (
      message === 'Not Found'
        ? 'Please enter a valid city'
        : 'Your request is failed'
    ) as string;
    setIsFetching(false);
    setErrorStatus({ errorStatus: true, errorMessage });
  };

  const handleSuccess = () => {
    // (document.activeElement as HTMLElement).blur();
    clearQuery();
    setIsFetching(false);
    setErrorStatus(defaultError);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) handleWeather(query);
  };

  const currentForecast = !dayIndex
    ? weatherData.current[units]
    : weatherData.daily[units][dayIndex];

  const hourlyForecast = weatherData.hourly[units];
  const dailyForecast = weatherData.daily[units];

  return (
    <>
      <Main isFetching={isFetching}>
        <Weather
          {...currentForecast}
          units={units}
          handleUnitChange={handleUnitChange}
        />
        <Control
          {...errorStatus}
          query={query}
          isFetching={isFetching}
          forecastMode={forecastMode}
          clearQuery={clearQuery}
          handleSubmit={handleSubmit}
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
      </Main>
      <Footer />
    </>
  );
}
