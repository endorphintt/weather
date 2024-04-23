import c from './App.module.scss'
import { useEffect, useState } from 'react'
import Intro from './components/intro/Intro'
import Menu from './components/menu/Menu'

function App() {
    const [loading, setLoading] = useState<boolean>(true)
    const [menu, setMenu] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 0)
    })

    return (
        <div className={c.app}>
            {loading ? (
                <Intro />
            ) : (
                <div className={c.app__container}>
                    <Menu menu={menu} setMenu={() => setMenu(false)} />
                </div>
            )}
        </div>
    )
}

export default App
