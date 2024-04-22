import c from './App.module.scss'
import { useEffect, useState } from 'react'
import Intro from './components/intro/Intro'

function App() {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 6000)
    })

    return (
        <div className={c.app__container}>
            {loading ? <Intro /> : <div className={c.app}>app</div>}
        </div>
    )
}

export default App
