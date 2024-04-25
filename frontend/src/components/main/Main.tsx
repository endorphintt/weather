import React from 'react'
import c from './Main.module.scss'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
    getDayWeather,
    getHourlyForecast,
    getTwoWeeksForecast,
} from '../../functions'
import { SET_CITY } from '../../redux/consts'
import Top from './top/Top'
import DaySlider from './daySlider/daySlider'
import TwoWeeks from './twoWeeks/TwoWeeks'

interface Props {}

const Main: React.FC<Props> = () => {
    const dispatch = useDispatch()
    const getDefaultCityWeather = async (lat: number, lon: number) => {
        try {
            const dayData = await getDayWeather(lat, lon)
            const twoWeekData = await getTwoWeeksForecast(lat, lon)
            const hourlyForecast = await getHourlyForecast(lat, lon)
            dispatch({
                type: SET_CITY,
                payload: {
                    dayWeather: dayData,
                    twoWeeksWeather: twoWeekData,
                    fourDaysForecast: hourlyForecast,
                },
            })
        } catch (error) {
            console.error('error:', error)
        }
    }
    useEffect(() => {
        getDefaultCityWeather(51.5074, -0.1278)
    }, [])
    return (
        <div className={c.main}>
            <Top />
            <DaySlider />
            <TwoWeeks />
        </div>
    )
}

export default Main
