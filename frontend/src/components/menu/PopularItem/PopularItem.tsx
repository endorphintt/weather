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
    handleClick: (lat: number, lon: number) => void
}

const PopularItem: React.FC<Props> = ({ city, handleClick }) => {
    const [dayWeather, setDayWeather] = useState<DayWeather | null>(null)

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
