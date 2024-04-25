import {
    DayWeather,
    FourDaysWeatherForecast,
    TwoWeeksForecastInterface,
} from '../interfaces'

export type WeatherAction =
    | {
          type: 'SET_CITY'
          payload: {
              dayWeather: DayWeather
              twoWeeksWeather: TwoWeeksForecastInterface
              fourDaysForecast: FourDaysWeatherForecast
          }
      }
    | { type: 'SORT_BY'; payload: string }
    | { type: 'ADD_TO_COMPARE'; payload: TwoWeeksForecastInterface }
    | { type: 'REMOVE_FROM_COMPARE'; payload: TwoWeeksForecastInterface }
