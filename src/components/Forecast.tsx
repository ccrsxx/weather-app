import { DailyForecast } from './DailyForecast';
import { HourlyForecast } from './HourlyForecast';
import type { PartHourlyWeather, PartDailyWeather } from '../types';

interface ForecastProps {
  dayIndex: number;
  forecastMode: 'daily' | 'hourly';
  hourlyForecast: PartHourlyWeather[];
  dailyForecast: PartDailyWeather[];
  handleDayIndexChange: (index: number) => () => void;
}

export function Forecast({
  dayIndex,
  forecastMode,
  hourlyForecast,
  dailyForecast,
  handleDayIndexChange
}: ForecastProps) {
  return (
    <div className='my-2 grid auto-rows-[120px] grid-cols-[repeat(auto-fit,minmax(70px,1fr))] gap-3'>
      {forecastMode === 'daily'
        ? dailyForecast.map((dailyData, index) => (
            <DailyForecast
              {...dailyData}
              index={index}
              dayIndex={dayIndex}
              handleDayIndexChange={handleDayIndexChange}
              key={index}
            />
          ))
        : hourlyForecast.map((hourlyData, index) => (
            <HourlyForecast {...hourlyData} key={index} />
          ))}
    </div>
  );
}
