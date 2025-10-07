// Node modules 
import { useState } from "react"

// Components
import Navbar from "./Navbar"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

return (
    // Fixed header
        <header className="fixed top-0 left-0 w-full h-20 bg-white flex items-center z-40
        bg-gradient-to-b from-green-400 to-green-200/0">
            
            <div className="max-w-screen-2xl w-full mx-auto px-4 
            flex justify-between items-center md:px-6 md:grid-cols-[1fr,3fr,1fr]">

                <div className="relative md:justify-self-center">
                    <button className="menu-btn md:hidden" 
                            onClick={ () => setNavOpen((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>

                    </button>

                    <Navbar navOpen={navOpen}/>
                </div>
            </div>
        </header>
    )
}

export default Header