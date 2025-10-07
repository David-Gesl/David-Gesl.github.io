// Componenets
import LottiePlayer from './components/LottiePlayer.jsx'       //TODO Remove this since its already used in hero?
import Header from "./components/Header.jsx"
import Hero from './components/hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'

const app = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Experience />   {/* new section */}
                <Projects />
            </main>
        </>
    )
}


export default app