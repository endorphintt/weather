import {
    DayWeather,
    FourDaysWeatherForecast,
    TwoWeeksForecastInterface,
} from '../interfaces'
import { WeatherAction } from './actions'
import {
    ADD_TO_COMPARE,
    REMOVE_FROM_COMPARE,
    SET_CITY,
    SORT_BY,
} from './consts'

export interface initialStateInterface {
    currentCity: DayWeather | null
    twoWeeksForecast: TwoWeeksForecastInterface | null
    compareCitiesList: TwoWeeksForecastInterface[] | null
    favoriteList: TwoWeeksForecastInterface[] | null
    fourDaysWeatherForecast: FourDaysWeatherForecast | null
}

export const initialState = {
    currentCity: null,
    twoWeeksForecast: null,
    compareCitiesList: null,
    favoriteList: null,
    fourDaysWeatherForecast: null,
}

export const weatherReducer = (
    state: initialStateInterface = initialState,
    action: WeatherAction
): initialStateInterface => {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                currentCity: action.payload.dayWeather,
                twoWeeksForecast: action.payload.twoWeeksWeather,
                compareCitiesList: [action.payload.twoWeeksWeather],
                fourDaysWeatherForecast: action.payload.fourDaysForecast,
            }
        case ADD_TO_COMPARE:
            return {
                ...state,
                compareCitiesList: [
                    ...(state.favoriteList || []),
                    action.payload,
                ],
            }
        case REMOVE_FROM_COMPARE:
            return {
                ...state,
                compareCitiesList: (state.favoriteList || []).filter(
                    (item) => item !== action.payload
                ),
            }
        default:
            return state
    }
}
