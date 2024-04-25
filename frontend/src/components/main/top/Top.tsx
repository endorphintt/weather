import React from 'react'
import c from './Top.module.scss'
import { useSelector } from 'react-redux'
import { initialStateInterface } from '../../../redux/weatherReducer'

const Top = () => {
    const currentCity = useSelector(
        (state: initialStateInterface) => state.currentCity
    )
    return (
        <div className={c.top}>
            {currentCity ? (
                <div className={c.top__container}>
                    <h1 className={c.top__name}>{currentCity?.name}</h1>
                    <p className={c.top__degree}>
                        {Math.floor(currentCity?.main.temp)}
                    </p>
                    <p className={c.top__sky}>
                        {currentCity.weather[0].description}
                    </p>
                    <div className={c.top__interval}>
                        <p className={c.top__min}>
                            H: {Math.floor(currentCity?.main.temp_min)}
                        </p>
                        <p className={c.top__max}>
                            L: {Math.floor(currentCity?.main.temp_max)}
                        </p>
                    </div>
                </div>
            ) : (
                <span></span>
            )}
        </div>
    )
}

export default Top
