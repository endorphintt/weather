import React from 'react'
import c from './Table.module.scss'
import { TwoWeeksForecastInterface } from '../../../interfaces'
import { findMinAndMaxTemperatures } from '../../../functions'

interface Props {
    data: TwoWeeksForecastInterface
}

const Table: React.FC<Props> = ({ data }) => {
    const { min, max } = findMinAndMaxTemperatures(data)
    function getDayOfWeek(): string {
        const daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ]
        const today = new Date()
        const dayOfWeek = daysOfWeek[today.getDay()]
        return dayOfWeek
    }

    function getNextDayOfWeek(currentDay: string, daysToAdd: number): string {
        const daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ]
        const currentDayIndex = daysOfWeek.indexOf(currentDay)
        if (currentDayIndex === -1) {
            throw new Error('Invalid day of the week')
        }
        const nextDayIndex = (currentDayIndex + daysToAdd) % 7
        return daysOfWeek[nextDayIndex]
    }

    function calculatePercentage(currentMin: number, currentMax: number) {
        const range = max - min
        const positionMin = ((currentMin - min) * 100) / range
        const positionMax = ((currentMax - min) * 100) / range
        const diff = positionMax - positionMin
        return { positionMin, positionMax, diff }
    }

    return (
        <div className={c.table}>
            <p className={c.table__title}>14 DAY FORECAST</p>
            <div className={c.table__container}>
                <div className={c.items__container}>
                    {data.list.map((item, index) => (
                        <div key={item.sunrise} className={c.table__item}>
                            <p className={c.table__day}>
                                {getNextDayOfWeek(getDayOfWeek(), index)}
                            </p>
                            <img
                                className={c.table__img}
                                src={
                                    `http://openweathermap.org/img/wn/` +
                                    item.weather[0].icon +
                                    '@2x.png'
                                }
                                alt="icon"
                            />
                            <p className={c.table__temp}>
                                {Math.floor(item.temp.min)}
                            </p>
                            <div className={c.table__interval}>
                                <div
                                    style={{
                                        width:
                                            calculatePercentage(
                                                item.temp.min,
                                                item.temp.max
                                            ).diff + '%',
                                        left:
                                            calculatePercentage(
                                                item.temp.min,
                                                item.temp.max
                                            ).positionMin + '%',
                                    }}
                                    className={c.table__interval_temp}
                                ></div>
                            </div>
                            <p className={c.table__temp}>
                                {Math.floor(item.temp.max)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Table
