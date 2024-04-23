import axios from 'axios'
import { API_KEY, WEATHER_LINK } from './constants'
import { CityCord, CityItem, DayWeather } from './interfaces'

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
