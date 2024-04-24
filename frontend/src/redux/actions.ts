import { DayWeather, TwoWeeksForecastInterface } from '../interfaces'

export type WeatherAction =
    | { type: 'SET_CITY'; payload: DayWeather }
    | { type: 'SORT_BY'; payload: string }
    | { type: 'ADD_TO_COMPARE'; payload: TwoWeeksForecastInterface }
    | { type: 'REMOVE_FROM_COMPARE'; payload: TwoWeeksForecastInterface }
