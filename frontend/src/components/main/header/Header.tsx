import React from 'react'
import c from './Header.module.scss'

interface Props {
    openMenu: () => void
}

const Header: React.FC<Props> = ({ openMenu }) => {
    return (
        <div className={c.header}>
            <button onClick={openMenu} className={c.header__icon}>
                <span className={`${c.header__span} ${c.first}`}></span>
                <span className={`${c.header__span} ${c.second}`}></span>
                <span className={`${c.header__span} ${c.third}`}></span>
            </button>
        </div>
    )
}

export default Header
