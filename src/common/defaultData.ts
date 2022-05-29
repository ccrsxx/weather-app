export const defaultWeather = {
  current: {
    metric: {
      icon: '03d',
      temp: 33,
      precipitation: 5,
      humidity: 62,
      windSpeed: 5,
      city: 'Jakarta',
      time: 'Sunday, 17:00',
      description: 'scattered clouds'
    },
    imperial: {
      icon: '03d',
      temp: 91,
      precipitation: 5,
      humidity: 62,
      windSpeed: 12,
      city: 'Jakarta',
      time: 'Sunday, 5 PM',
      description: 'scattered clouds'
    }
  },
  hourly: {
    metric: [
      { icon: '03n', description: 'scattered clouds', temp: 32, time: '18:00' },
      { icon: '04n', description: 'broken clouds', temp: 31, time: '19:00' },
      { icon: '10n', description: 'light rain', temp: 30, time: '20:00' },
      { icon: '03n', description: 'scattered clouds', temp: 29, time: '21:00' },
      { icon: '04n', description: 'broken clouds', temp: 28, time: '22:00' },
      { icon: '03n', description: 'scattered clouds', temp: 27, time: '23:00' },
      { icon: '03n', description: 'scattered clouds', temp: 27, time: '00:00' },
      { icon: '03n', description: 'scattered clouds', temp: 27, time: '01:00' }
    ],
    imperial: [
      { icon: '03n', description: 'scattered clouds', temp: 90, time: '6 PM' },
      { icon: '04n', description: 'broken clouds', temp: 88, time: '7 PM' },
      { icon: '10n', description: 'light rain', temp: 86, time: '8 PM' },
      { icon: '03n', description: 'scattered clouds', temp: 84, time: '9 PM' },
      { icon: '04n', description: 'broken clouds', temp: 82, time: '10 PM' },
      { icon: '03n', description: 'scattered clouds', temp: 81, time: '11 PM' },
      { icon: '03n', description: 'scattered clouds', temp: 81, time: '12 AM' },
      { icon: '03n', description: 'scattered clouds', temp: 80, time: '1 AM' }
    ]
  },
  daily: {
    metric: [
      {
        icon: '10d',
        temp: 29,
        min: 25,
        max: 33,
        precipitation: 5,
        humidity: 56,
        windSpeed: 6,
        city: 'Jakarta',
        time: 'Sunday',
        day: 'Sun',
        description: 'moderate rain'
      },
      {
        icon: '10d',
        temp: 29,
        min: 26,
        max: 32,
        precipitation: 0,
        humidity: 56,
        windSpeed: 5,
        city: 'Jakarta',
        time: 'Monday',
        day: 'Mon',
        description: 'light rain'
      },
      {
        icon: '10d',
        temp: 30,
        min: 26,
        max: 33,
        precipitation: 0,
        humidity: 51,
        windSpeed: 6,
        city: 'Jakarta',
        time: 'Tuesday',
        day: 'Tue',
        description: 'light rain'
      },
      {
        icon: '10d',
        temp: 29,
        min: 26,
        max: 32,
        precipitation: 0,
        humidity: 56,
        windSpeed: 3,
        city: 'Jakarta',
        time: 'Wednesday',
        day: 'Wed',
        description: 'light rain'
      },
      {
        icon: '10d',
        temp: 30,
        min: 27,
        max: 32,
        precipitation: 2,
        humidity: 58,
        windSpeed: 3,
        city: 'Jakarta',
        time: 'Thursday',
        day: 'Thu',
        description: 'light rain'
      },
      {
        icon: '10d',
        temp: 30,
        min: 26,
        max: 33,
        precipitation: 1,
        humidity: 54,
        windSpeed: 5,
        city: 'Jakarta',
        time: 'Friday',
        day: 'Fri',
        description: 'light rain'
      },
      {
        icon: '10d',
        temp: 29,
        min: 26,
        max: 32,
        precipitation: 11,
        humidity: 67,
        windSpeed: 3,
        city: 'Jakarta',
        time: 'Saturday',
        day: 'Sat',
        description: 'moderate rain'
      },
      {
        icon: '10d',
        temp: 29,
        min: 26,
        max: 32,
        precipitation: 8,
        humidity: 61,
        windSpeed: 4,
        city: 'Jakarta',
        time: 'Sunday',
        day: 'Sun',
        description: 'moderate rain'
      }
    ],
    imperial: [
      {
        icon: '10d',
        temp: 84,
        min: 77,
        max: 91,
        precipitation: 5,
        humidity: 56,
        windSpeed: 13,
        city: 'Jakarta',
        time: 'Sunday',
        day: 'Sun',
        description: 'moderate rain'
      },
      {
        icon: '10d',
        temp: 85,
        min: 79,
        max: 90,
        precipitation: 0,
        humidity: 56,
        windSpeed: 11,
        city: 'Jakarta',
        time: 'Monday',
        day: 'Mon',
        description: 'light rain'
      },
      {
        icon: '10d',
        temp: 85,
        min: 79,
        max: 91,
        precipitation: 0,
        humidity: 51,
        windSpeed: 13,
        city: 'Jakarta',
        time: 'Tuesday',
        day: 'Tue',
        description: 'light rain'
      },
      {
        icon: '10d',
        temp: 85,
        min: 79,
        max: 90,
        precipitation: 0,
        humidity: 56,
        windSpeed: 7,
        city: 'Jakarta',
        time: 'Wednesday',
        day: 'Wed',
        description: 'light rain'
      },
      {
        icon: '10d',
        temp: 85,
        min: 80,
        max: 90,
        precipitation: 2,
        humidity: 58,
        windSpeed: 8,
        city: 'Jakarta',
        time: 'Thursday',
        day: 'Thu',
        description: 'light rain'
      },
      {
        icon: '10d',
        temp: 86,
        min: 80,
        max: 91,
        precipitation: 1,
        humidity: 54,
        windSpeed: 10,
        city: 'Jakarta',
        time: 'Friday',
        day: 'Fri',
        description: 'light rain'
      },
      {
        icon: '10d',
        temp: 85,
        min: 79,
        max: 90,
        precipitation: 11,
        humidity: 67,
        windSpeed: 6,
        city: 'Jakarta',
        time: 'Saturday',
        day: 'Sat',
        description: 'moderate rain'
      },
      {
        icon: '10d',
        temp: 85,
        min: 79,
        max: 90,
        precipitation: 8,
        humidity: 61,
        windSpeed: 8,
        city: 'Jakarta',
        time: 'Sunday',
        day: 'Sun',
        description: 'moderate rain'
      }
    ]
  }
};

export const defaultError = {
  errorStatus: false,
  errorMessage: ''
};
