import c from './Star.module.scss'

const Star: React.FC = () => {
    return (
        <div className={c.falling_star}>
            <div className={c.star}></div>
            <div className={c.shine}></div>
        </div>
    )
}

export default Star
