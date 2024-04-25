import React from 'react'
import c from './Squares.module.scss'
import { useSelector } from 'react-redux'
import { initialStateInterface } from '../../../redux/weatherReducer'

const Squares = () => {
    const data = useSelector(
        (state: initialStateInterface) => state.currentCity
    )

    return (
        <div className={c.items}>
            <div className={c.item}>
                <p className={c.item__title}>FEELS LIKE</p>
                <p className={c.item__value}>
                    {data ? Math.round(data?.main.feels_like) : 'error'}
                </p>
            </div>
            <div className={c.item}>
                <p className={c.item__title}>WIND</p>
                <p className={c.item__value}>
                    {data?.wind.speed} <br /> km/h
                </p>
            </div>
            <div className={c.item}>
                <p className={c.item__title}>VISIBILATY</p>
                <p className={c.item__value}>{data?.visibility}m</p>
            </div>
            <div className={c.item}>
                <p className={c.item__title}>HUMIDITY</p>
                <p className={c.item__value}>{data?.main.humidity}%</p>
            </div>
        </div>
    )
}

export default Squares
