// Componenets
import LottiePlayer from './components/LottiePlayer.jsx'       //TODO Remove this since its already used in hero?
import Header from "./components/Header.jsx"
import Hero from './components/hero.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'

const app = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
            </main>
        </>
    )
}


export default app