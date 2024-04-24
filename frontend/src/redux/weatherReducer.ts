import { DayWeather, TwoWeeksForecastInterface } from '../interfaces'
import { WeatherAction } from './actions'
import {
    ADD_TO_COMPARE,
    REMOVE_FROM_COMPARE,
    SET_CITY,
    SORT_BY,
} from './consts'

interface initialStateInterface {
    currentCity: DayWeather | null
    twoWeeksForecast: TwoWeeksForecastInterface | null
    compareCitiesList: TwoWeeksForecastInterface[] | null
    sortBy: string
    favoriteList: TwoWeeksForecastInterface[] | null
}

export const initialState = {
    currentCity: null,
    twoWeeksForecast: null,
    compareCitiesList: null,
    sortBy: 'time',
    favoriteList: null,
}

export const weatherReducer = (
    state: initialStateInterface = initialState,
    action: WeatherAction
): initialStateInterface => {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                currentCity: action.payload,
                favoriteList: [],
            }
        case ADD_TO_COMPARE:
            return {
                ...state,
                favoriteList: [...(state.favoriteList || []), action.payload],
            }
        case REMOVE_FROM_COMPARE:
            return {
                ...state,
                favoriteList: (state.favoriteList || []).filter(
                    (item) => item !== action.payload
                ),
            }
        case SORT_BY:
            return state
        default:
            return state
    }
}
