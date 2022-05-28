import type { PartHourlyWeather } from '../types';

export function HourlyForecast({
  icon,
  description,
  temp,
  time
}: PartHourlyWeather) {
  return (
    <button
      type='button'
      className='flex animate-fade cursor-not-allowed flex-col items-center justify-center
                 rounded-md border bg-[rgba(255,255,255,0.8)] p-3'
      disabled
    >
      <p className='text-[17px] text-black'>{time}</p>
      <img
        className='-m-2 mb-0 h-14 w-14'
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p className='text-xs text-black'>{temp}°</p>
    </button>
  );
}
