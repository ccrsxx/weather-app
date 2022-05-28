export interface RawWeather {
  current: {
    weather: [
      {
        description: string;
        icon: string;
      }
    ];
    temp: number;
    humidity: number;
    wind_speed: number;
    city: string;
    dt: number;
  };
  hourly: {
    weather: [
      {
        icon: string;
        description: string;
      }
    ];
    temp: number;
    dt: number;
  }[];
  daily: [
    {
      weather: [
        {
          description: string;
          icon: string;
        }
      ];
      temp: { min: number; max: number };
      humidity: number;
      wind_speed: number;
      rain: number;
      dt: number;
    }
  ];
  timezone: string;
}
