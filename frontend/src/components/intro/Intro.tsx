import React from 'react'
import c from './Intro.module.scss'
import point from './point.png'
import planet from './planet.png'
import Star from './star/Star'

interface Props {}

const Intro: React.FC<Props> = ({}) => {
    return (
        <article className={c.intro}>
            <Star />
            <div className={c.intro__container}>
                <img className={c.intro__point} src={point} alt="point" />
                <img className={c.intro__planet} src={planet} alt="planet" />
                <p className={c.intro__title}>WEATHER</p>
            </div>
        </article>
    )
}

export default Intro
