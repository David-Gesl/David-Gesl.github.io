import React from 'react'


// Componenets 
import LottiePlayer from './LottiePlayer'
import { ButtonPrimary, ButtonOutline } from './Button'
 
const Hero = () => {
  return (
    <section id="home" className='pt-28 lg:pt-36'>

        <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>

            <div>
                <div className='flex items-center gap-3'>
                    <figure className='img-box w-9 h-9 rounded-lg '>
                        <img src="" alt="" />
                        {/* Insert lottie player componnent here insteaed of the image
                        Set the width and the height to 40 eac. Give the class img-cover  */}
                            {/* const containerRef = useRef(null)

                            // ref to hold the loaded animation instance so we can call play()/pause()/destroy()
                            const animRef = useRef(null)
                            animRef.current = lottie.loadAnimation({
                            container: containerRef.current, // element to render into
                            renderer: 'svg',                 // render as inline SVG
                            loop: true,
                            autoplay: true,
                            path: './BoyStudyingScience.json' // path to the animation JSON (adjust as needed)
                            }) */}
                            {/* LottiePlayer()? */}
                    </figure>

                    <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide '>
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className='absolute inset-0 rounded-full bg-emerald-400 animage-ping'></span>
                        </span>

                        Available for Work
                    </div>
                </div>
                <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
                    Try Fail, Try again.
                </h2>
                
                <div className='flex items-center gap-3'>
                    <ButtonPrimary 
                        label="Download Resume"
                        icon="download"     //chekc later. Might not be imported properly
                    />

                    <ButtonOutline
                        href="#about"
                        label="Scroll Down"
                        icon ="arrow_downward"
                    />
                </div>
            </div>

            <div className='hidden lg:block '>
                <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden '>
                    <img src="~/BoyStudyingScience.json" width={656} height={800} alt="" className='w-full' />
                </figure>
            </div>

        </div>

    </section>
  )
}

export default Hero