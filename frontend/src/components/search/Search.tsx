import { useState, useEffect } from 'react'
import { API_KEY } from '../../constants'
import { CityItem } from '../../interfaces'
import c from './Search.module.scss'
import searchIcon from './search.png'
import { fetchCities } from '../../functions'
import { CityCord } from '../../interfaces'

interface Props {
    onCityClick: (lat: number, lon: number) => void
}

const Search: React.FC<Props> = ({ onCityClick }) => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<CityItem[] | []>([])

    useEffect(() => {
        const fetchData = async () => {
            if (query.length > 0) {
                const data = await fetchCities(query)
                setResults(data)
            }
        }

        fetchData()
    }, [query])

    const OnCityButtonClick = (lat: number, lon: number) => {
        onCityClick(lat, lon)
        setQuery('')
    }

    return (
        <div className={c.search}>
            <div className={c.search__input}>
                <img className={c.search__icon} src={searchIcon} alt="search" />
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            {results.length > 0 && query.length > 0 && (
                <ul className={c.search__ul}>
                    {results.map((item, index) => (
                        <button
                            onClick={() =>
                                OnCityButtonClick(item.lat, item.lon)
                            }
                            className={c.search__li}
                            key={index}
                        >
                            {item.name}, {item.country}
                        </button>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Search
