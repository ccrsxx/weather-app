import { BiSearch, BiX } from 'react-icons/bi';

interface ControlProps {
  query: string;
  errorStatus: boolean;
  errorMessage: string;
  forecastMode: 'daily' | 'hourly';
  clearQuery: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleForecastModeChange: (mode: 'daily' | 'hourly') => () => void;
}

export function Control({
  query,
  errorStatus,
  errorMessage,
  forecastMode,
  clearQuery,
  handleSubmit,
  handleQueryChange,
  handleForecastModeChange
}: ControlProps) {
  return (
    <div className='flex items-center justify-between gap-2'>
      <div>
        <button
          style={
            forecastMode === 'daily'
              ? { borderColor: '#fbbc04', color: 'black' }
              : { borderColor: 'transparent' }
          }
          className='border-b-[3px] pb-1 transition-colors duration-300'
          type='button'
          onClick={handleForecastModeChange('daily')}
        >
          Daily
        </button>
        <i className='mx-3 mt-0.5 h-5 self-start border-l-[1px] border-l-[#70757a]' />
        <button
          style={
            forecastMode === 'hourly'
              ? { borderColor: '#fbbc04', color: 'black' }
              : { borderColor: 'transparent' }
          }
          className='border-b-[3px] pb-1 transition-colors duration-300'
          type='button'
          onClick={handleForecastModeChange('hourly')}
        >
          Hourly
        </button>
      </div>
      <div>
        <form
          className='flex flex-col items-center gap-2'
          onSubmit={handleSubmit}
        >
          <div className='relative w-48'>
            <input
              className='peer w-full rounded-md border border-white bg-[rgba(255,255,255,0.8)] px-2
                         py-1 pr-8 text-black placeholder:text-main-color focus:outline-none'
              type='text'
              placeholder='Search a city'
              onChange={handleQueryChange}
            />
            <i className='absolute right-2.5 top-2'>
              {query ? (
                <BiX
                  className='animate-rotate cursor-pointer text-xl'
                  onClick={clearQuery}
                />
              ) : (
                <BiSearch className='animate-rotate text-lg' />
              )}
            </i>
          </div>
          <p
            className={`${errorStatus && '!max-h-48'} max-h-0 overflow-hidden
                        text-red-400 transition-all duration-300`}
          >
            {errorMessage}
          </p>
        </form>
      </div>
    </div>
  );
}
