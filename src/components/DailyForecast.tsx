import type { PartDailyWeather } from '../types';

interface DailyForecastProps extends PartDailyWeather {
  index: number;
  dayIndex: number;
  handleDayIndexChange: (index: number) => () => void;
}

export function DailyForecast({
  icon,
  index,
  dayIndex,
  description,
  min,
  max,
  day,
  handleDayIndexChange
}: DailyForecastProps) {
  return (
    <button
      type='button'
      className={`${
        dayIndex === index && '!bg-[#f8f9fa]'
      } flex animate-fade cursor-pointer flex-col items-center justify-center 
        rounded-md border border-white p-3 transition-all duration-300
        hover:bg-[rgba(255,255,255,0.4)] focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-offset-2`}
      onClick={handleDayIndexChange(index)}
    >
      <p className='text-lg text-[#505153]'>{day}</p>
      <img
        className='-m-2 mb-0 h-14 w-14'
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <div className='flex gap-1 text-xs'>
        <p className='text-black'>{max}°</p>
        <p>{min}°</p>
      </div>
    </button>
  );
}
