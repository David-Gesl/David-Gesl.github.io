// Componenets
import LottiePlayer from './components/LottiePlayer.jsx'       //TODO Remove this since its already used in hero?
import Header from "./components/Header.jsx"
import Hero from './components/hero.jsx'
import About from './components/About.jsx'
import WorkExperience from './components/WorkExperience.jsx'

const app = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <WorkExperience />
            </main>
        </>
    )
}


export default app