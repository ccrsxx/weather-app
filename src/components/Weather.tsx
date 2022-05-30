import type { PartCurrentWeather } from '../types';

interface WeatherProps extends Partial<PartCurrentWeather> {
  units: 'metric' | 'imperial';
  handleUnitChange: (unitType: 'metric' | 'imperial') => () => void;
}

export function Weather({
  units,
  icon,
  temp,
  precipitation,
  humidity,
  windSpeed,
  city,
  time,
  description,
  handleUnitChange
}: WeatherProps) {
  return (
    <div className='flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center sm:gap-0'>
      <div className='flex items-center gap-4'>
        <img
          className='-m-5 h-20 w-20 sm:h-auto sm:w-auto'
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <div className='flex w-full gap-2 sm:w-auto'>
          <p className='self-center text-4xl text-black sm:self-auto sm:text-5xl'>
            {temp}
          </p>
          <div className='relative -top-1'>
            <button
              className={`${
                units === 'metric' && '!text-black'
              } px-0.5 transition-all duration-300 hover:text-gray-800
                focus-visible:rounded focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-offset-2`}
              type='button'
              onClick={handleUnitChange('metric')}
            >
              °C
            </button>
            <i className='mx-1.5 border-l-[1px] border-l-[#70757a]' />
            <button
              className={`${
                units === 'imperial' && '!text-black'
              } px-0.5 transition-all duration-300 hover:text-gray-800
                focus-visible:rounded focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-offset-2`}
              type='button'
              onClick={handleUnitChange('imperial')}
            >
              °F
            </button>
          </div>
          <div className='relative -top-1 ml-auto text-xs'>
            <p>{`Precipitation: ${precipitation}%`}</p>
            <p>{`Humidity: ${humidity}%`}</p>
            <p>{`Wind: ${windSpeed} ${units === 'metric' ? 'km/h' : 'mph'}`}</p>
          </div>
        </div>
      </div>
      <div className='text-left sm:text-right'>
        <p className='text-xl text-black'>{city}</p>
        <div className='flex gap-2 sm:block'>
          <p>
            {time}
            <span className='sm:hidden'>,</span>
          </p>
          <p className='first-letter:capitalize'>{description}</p>
        </div>
      </div>
    </div>
  );
}
