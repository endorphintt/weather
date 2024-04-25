import { useSelector } from 'react-redux'
import { initialStateInterface } from '../../../redux/weatherReducer'
import c from './TwoWeeks.module.scss'
import { useEffect, useState } from 'react'
import Table from '../table/Table'
import { TwoWeeksForecastInterface } from '../../../interfaces'

const sortList = ['temperatureLow', 'temperatureHigh', 'windLow', 'windHigh']

const TwoWeeks = () => {
    const data = useSelector(
        (state: initialStateInterface) => state.twoWeeksForecast
    )
    const [weatherData, setWeatherData] = useState(data)
    const [listDisplay, setListDisplay] = useState(false)
    useEffect(() => {
        setWeatherData(data)
    }, [data])
    function sortByCriteria(criteria: string): void {
        if (weatherData?.list) {
            const sortedForecast = { ...weatherData }
            const { list } = sortedForecast

            switch (criteria) {
                case 'temperatureLow':
                    list.sort((a, b) => a.temp.min - b.temp.min)
                    break
                case 'temperatureHigh':
                    list.sort((a, b) => b.temp.max - a.temp.max)
                    break
                case 'windLow':
                    list.sort((a, b) => a.speed - b.speed)
                    break
                case 'windHigh':
                    list.sort((a, b) => b.speed - a.speed)
                    break
                default:
                    throw new Error('Invalid sort criteria')
            }

            setWeatherData(sortedForecast)
        }
    }
    return (
        <div className={c.container}>
            <div className={c.sort}>
                <button
                    onClick={() => setListDisplay(!listDisplay)}
                    className={
                        listDisplay
                            ? `${c.sort__button} ${c.active}`
                            : c.sort__button
                    }
                >
                    sort by
                </button>
                <ul
                    style={{
                        display: listDisplay ? 'block' : 'none',
                    }}
                    className={c.sort__list}
                >
                    {sortList.map((item) => (
                        <li
                            key={item}
                            onClick={() => sortByCriteria(item)}
                            className={c.sort__li}
                        >
                            <button>{item}</button>
                        </li>
                    ))}
                </ul>
            </div>
            {weatherData ? <Table data={weatherData} /> : <span></span>}
        </div>
    )
}

export default TwoWeeks
