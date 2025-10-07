// Componenets
import Header from "./components/Header.jsx"
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Quotes from './components/Quotes.jsx'
import Footer from './components/Footer.jsx'

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
            <Footer />
        </>
    )
}

export default app