export interface RawWeatherData {
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
  hourly: Record<string, unknown>[];
  daily: [{ rain: number }];
  timezone: string;
}
