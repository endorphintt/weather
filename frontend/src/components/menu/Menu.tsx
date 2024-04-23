import { CITIES } from '../../constants'
import Search from '../search/Search'
import c from './Menu.module.scss'
import PopularItem from './PopularItem/PopularItem'
import { onCityClick } from '../../functions'

interface Props {
    setMenu: () => void
    menu: boolean
}

const Menu: React.FC<Props> = ({ setMenu, menu }) => {
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
            <Search onCityClick={onCityClick} />
            <article className={c.popular}>
                <p className={c.popular__title}>popular locations</p>
                <div className={c.popular__ul}>
                    {CITIES.map((item) => (
                        <PopularItem key={item.lat} city={item} />
                    ))}
                </div>
            </article>
        </div>
    )
}

export default Menu
