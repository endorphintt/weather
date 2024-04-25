import React, { useEffect, useState } from 'react'
import c from './daySlider.module.scss'
import { useSelector } from 'react-redux'
import { initialStateInterface } from '../../../redux/weatherReducer'
import { extractHour, kelvinToCelsius } from '../../../functions'

const HorizontalScroll: React.FC = () => {
    const data = useSelector(
        (state: initialStateInterface) => state.fourDaysWeatherForecast
    )
    const [weatherData, setWeatherData] = useState(data)
    useEffect(() => {
        setWeatherData(data)
    }, [data])

    return (
        <div className={c.slider}>
            <div className={c.slider__container}>
                {weatherData?.list.map((day) => (
                    <div key={day.dt} className={c.day}>
                        <p className={c.day__hour}>{extractHour(day.dt_txt)}</p>
                        <img
                            className={c.day__img}
                            src={
                                `http://openweathermap.org/img/wn/` +
                                day.weather[0].icon +
                                '@2x.png'
                            }
                            alt="icon"
                        />
                        <p className={c.day__temp}>
                            {kelvinToCelsius(day.main.temp)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HorizontalScroll
