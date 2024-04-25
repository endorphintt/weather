import React, { useEffect, useState } from 'react'
import { CityCord, DayWeather } from '../../../interfaces'
import c from './PopularItem.module.scss'
import { useDispatch } from 'react-redux'
import {
    getDayWeather,
    getHourlyForecast,
    getTwoWeeksForecast,
} from '../../../functions'
import { SET_CITY } from '../../../redux/consts'

interface Props {
    city: CityCord
}

const PopularItem: React.FC<Props> = ({ city }) => {
    const [dayWeather, setDayWeather] = useState<DayWeather | null>(null)
    const dispatch = useDispatch()
    const handleClick = async (lat: number, lon: number) => {
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
        const getWeather = async (city: CityCord) => {
            const data = await getDayWeather(city.lat, city.lon)
            setDayWeather(data)
        }
        getWeather(city)
    }, [])
    return (
        <div className={c.item}>
            {dayWeather ? (
                <button
                    onClick={() => handleClick(city.lat, city.lon)}
                    className={c.item__button}
                >
                    <div className={c.item__left}>
                        <p className={c.item__name}>{dayWeather.name}</p>

                        <img
                            className={c.item__img}
                            src={
                                `http://openweathermap.org/img/wn/` +
                                dayWeather.weather[0].icon +
                                '@2x.png'
                            }
                            alt=""
                        />
                    </div>
                    <div className={c.item__right}>
                        <p className={c.item__degree}>
                            {Math.round(dayWeather.main.temp)}
                        </p>
                        <p className={c.item__sky}>
                            {dayWeather.weather[0].description}
                        </p>
                    </div>
                </button>
            ) : (
                <span></span>
            )}
        </div>
    )
}

export default PopularItem
