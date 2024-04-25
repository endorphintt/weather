import c from './App.module.scss'
import { useEffect, useState } from 'react'
import Intro from './components/intro/Intro'
import Menu from './components/menu/Menu'
import Header from './components/main/header/Header'
import Main from './components/main/Main'

function App() {
    const [loading, setLoading] = useState<boolean>(true)
    const [menu, setMenu] = useState<boolean>(false)

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
                    <Header openMenu={() => setMenu(true)} />
                    <Main />
                </div>
            )}
        </div>
    )
}

export default App
