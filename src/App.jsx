// Componenets
import Header from "./components/Header.jsx"
import Hero from './components/hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Quotes from './components/Quotes.jsx'

const app = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Quotes />
            </main>
        </>
    )
}


export default app