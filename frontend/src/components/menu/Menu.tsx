import { useDispatch } from 'react-redux'
import { CITIES } from '../../constants'
import {
    getDayWeather,
    getHourlyForecast,
    getTwoWeeksForecast,
    onCityClick,
} from '../../functions'
import Search from '../search/Search'
import c from './Menu.module.scss'
import PopularItem from './PopularItem/PopularItem'
import { SET_CITY } from '../../redux/consts'

interface Props {
    setMenu: () => void
    menu: boolean
}

const Menu: React.FC<Props> = ({ setMenu, menu }) => {
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
            setMenu()
        } catch (error) {
            console.error('error:', error)
        }
    }
    return (
        <div
            className={c.menu}
            style={{
                transform: menu ? 'translateX(0)' : 'translateX(-100%)',
            }}
        >
            <div className={c.menu__header}>
                <button className={c.menu__cancel} onClick={setMenu}></button>
            </div>
            <Search onCityClick={handleClick} />
            <div className={c.items__container}>
                <article className={c.popular}>
                    <p className={c.popular__title}>popular locations</p>
                    <div onClick={setMenu} className={c.popular__ul}>
                        {CITIES.map((item) => (
                            <PopularItem
                                handleClick={handleClick}
                                key={item.lat}
                                city={item}
                            />
                        ))}
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Menu
