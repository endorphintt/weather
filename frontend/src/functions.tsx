import axios from 'axios'
import { API_KEY, WEATHER_LINK } from './constants'
import {
    CityCord,
    CityItem,
    DayWeather,
    TwoWeeksForecastInterface,
    FourDaysWeatherForecast,
} from './interfaces'

export const fetchCities = async (query: string) => {
    const response = await axios.get(
        WEATHER_LINK + `geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
    )
    const data: CityItem[] = response.data
    return data
}

export async function getDayWeather(
    lat: number,
    lon: number
): Promise<DayWeather> {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    try {
        const response = await axios.get(url)
        const weatherData: DayWeather = response.data
        return weatherData
    } catch (error) {
        throw new Error('Failed to fetch weather data')
    }
}
export const onCityClick = (data: CityCord) => {
    console.log('onCityClick')
}

export async function getTwoWeeksForecast(
    lat: number,
    lon: number
): Promise<TwoWeeksForecastInterface> {
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=14&appid=${API_KEY}&units=metric`

    try {
        const response = await axios.get(url)
        const weatherData: TwoWeeksForecastInterface = response.data
        return weatherData
    } catch (error) {
        throw new Error('Failed to fetch weather data')
    }
}

export async function getHourlyForecast(
    lat: number,
    lon: number
): Promise<FourDaysWeatherForecast> {
    const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    try {
        const response = await axios.get(url)
        const weatherData: FourDaysWeatherForecast = response.data
        return weatherData
    } catch (error) {
        console.error('Failed to fetch hourly weather forecast:', error)
        throw error
    }
}

export function findMinAndMaxTemperatures(data: TwoWeeksForecastInterface): {
    min: number
    max: number
} {
    if (
        !data ||
        !data.list ||
        !Array.isArray(data.list) ||
        data.list.length === 0
    ) {
        throw new Error('Invalid data format')
    }

    let minTemperature = Infinity
    let maxTemperature = -Infinity

    for (const dayData of data.list) {
        if (!dayData.temp || !dayData.temp.min || !dayData.temp.max) {
            continue // Пропускаємо дні без мінімальної або максимальної температури
        }

        if (dayData.temp.min < minTemperature) {
            minTemperature = dayData.temp.min
        }

        if (dayData.temp.max > maxTemperature) {
            maxTemperature = dayData.temp.max
        }
    }

    if (!isFinite(minTemperature) || !isFinite(maxTemperature)) {
        throw new Error('No valid temperature data found')
    }

    return { min: minTemperature, max: maxTemperature }
}

export function extractHour(dateTimeString: string): string {
    const parts = dateTimeString.split(' ')
    if (parts.length !== 2) {
        throw new Error('Invalid date time string format')
    }

    const timePart = parts[1]
    const hourPart = timePart.split(':')[0]
    const hour = parseInt(hourPart, 10)
    if (isNaN(hour) || hour < 0 || hour > 23) {
        throw new Error('Invalid hour in date time string')
    }

    return hour < 10 ? `0${hour}` : `${hour}`
}

export function kelvinToCelsius(kelvin: number): number {
    const celsius = kelvin - 273.15
    return Math.round(celsius)
}
