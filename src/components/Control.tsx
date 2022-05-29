import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineLoading
} from 'react-icons/ai';

interface ControlProps {
  query: string;
  isFetching: boolean;
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
  isFetching,
  errorStatus,
  errorMessage,
  forecastMode,
  clearQuery,
  handleSubmit,
  handleQueryChange,
  handleForecastModeChange
}: ControlProps) {
  return (
    <div className='flex flex-col-reverse items-center justify-between gap-4 sm:flex-row'>
      <div>
        <button
          className={`${
            forecastMode === 'daily' && '!border-b-[#fbbc04] text-black'
          } border-b-[3px] border-b-transparent px-0.5 pb-1 transition-all duration-300 hover:text-gray-800
            focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
          type='button'
          onClick={handleForecastModeChange('daily')}
        >
          Daily
        </button>
        <i className='mx-3 mt-0.5 h-5 self-start border-l-[1px] border-l-[#70757a]' />
        <button
          className={`${
            forecastMode === 'hourly' && '!border-b-[#fbbc04] text-black'
          } border-b-[3px] border-b-transparent px-0.5 pb-1 transition-all duration-300 hover:text-gray-800
            focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
          type='button'
          onClick={handleForecastModeChange('hourly')}
        >
          Hourly
        </button>
      </div>
      <form
        className='flex w-full max-w-xs flex-col sm:w-auto sm:max-w-none sm:items-center'
        onSubmit={handleSubmit}
      >
        <div className='relative w-full sm:max-w-[192px]'>
          <input
            className='peer w-full rounded-md border border-white bg-[rgba(255,255,255,0.8)] px-2
                       py-1 pr-8 text-black transition-all duration-300 placeholder:text-main-color
                       focus:outline-none focus-visible:outline-none focus-visible:ring-2'
            type='text'
            placeholder='Search a city'
            onChange={handleQueryChange}
          />
          <i className='absolute right-2.5 top-2 text-lg'>
            {isFetching ? (
              <AiOutlineLoading className='animate-rotate animate-spin' />
            ) : query ? (
              <AiOutlineClose
                className='animate-rotate cursor-pointer'
                onClick={clearQuery}
              />
            ) : (
              <AiOutlineSearch className='animate-rotate' />
            )}
          </i>
        </div>
        <p
          className={`${errorStatus && 'mt-2 !max-h-48'} mt-0 max-h-0
                        overflow-hidden text-red-400 transition-all duration-300`}
        >
          {errorMessage}
        </p>
      </form>
    </div>
  );
}
