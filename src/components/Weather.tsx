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
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <img
          className='-m-5'
          src={
            icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : undefined
          }
          alt={description}
        />
        <div className='flex gap-2'>
          <p className='text-5xl text-black'>{temp}</p>
          <div className='relative -top-1'>
            <button
              style={{ color: units === 'metric' ? 'black' : 'inherit' }}
              className='transition-colors duration-300'
              type='button'
              onClick={handleUnitChange('metric')}
            >
              °C
            </button>
            <i className='mx-1 ml-1.5 border-l-[1px] border-l-[#70757a]' />
            <button
              style={{ color: units === 'imperial' ? 'black' : 'inherit' }}
              className='transition-colors duration-300'
              type='button'
              onClick={handleUnitChange('imperial')}
            >
              °F
            </button>
          </div>
          <div className='relative -top-1 text-xs'>
            <p>{`Precipitation: ${precipitation}%`}</p>
            <p>{`Humidity: ${humidity}%`}</p>
            <p>{`Wind: ${windSpeed} ${units === 'metric' ? 'km/h' : 'mph'}`}</p>
          </div>
        </div>
      </div>
      <div className='text-right'>
        <p className='text-xl text-black'>{city}</p>
        <p>{time}</p>
        <p className='first-letter:capitalize'>{description}</p>
      </div>
    </div>
  );
}
