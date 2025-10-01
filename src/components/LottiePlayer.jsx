import { useEffect, useRef, useState } from 'react'
import animationData from '../assets/BoyStudyingScience.json'  // Bundled animation JSON

/*
  LottiePlayer
  Renders a Lottie animation (using the global window.lottie loaded via a CDN script in index.html)
  and lets the user click the animation to toggle play / pause.
  
  Props:
    className : Tailwind (or other) classes that MUST include explicit width & height
    loop      : Whether the animation loops
    autoplay  : Whether it starts playing immediately
    showForm  : Optional demo form to show how local state can control extra UI
*/
export default function LottiePlayer({
  className = 'w-64 h-64',
  loop = true,
  autoplay = true,
  showForm = false
}) {
  // Holds the DOM node that Lottie will render into
  const containerRef = useRef(null)

  // Stores the Lottie animation instance so we can call play(), pause(), destroy()
  const animRef = useRef(null)

  // Tracks whether we consider the animation currently playing (for UI text + toggle)
  const [isPlaying, setIsPlaying] = useState(autoplay)

  // Demo state for the optional form submission feedback
  const [showResponse, setShowResponse] = useState(false)

  /*
    Effect: (re)initialize the animation whenever loop or autoplay props change.
    - Grabs window.lottie (provided by CDN script)
    - Destroys any previous instance to avoid duplicates (important in React StrictMode)
    - Creates a new animation using the imported animationData
    Cleanup: destroys the animation on unmount or before re-init.
  */
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const lottie = window.lottie
    if (!lottie) {
      console.warn('[LottiePlayer] window.lottie not found. Ensure CDN script loads before main.jsx.')
      return
    }

    // Destroy an existing animation before creating a new one
    if (animRef.current) {
      animRef.current.destroy()
      animRef.current = null
    }

    // Initialize the animation
    animRef.current = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop,
      autoplay,
      animationData
    })

    // Sync internal state with autoplay prop
    setIsPlaying(autoplay)

    // Cleanup
    return () => {
      animRef.current?.destroy()
      animRef.current = null
    }
  }, [loop, autoplay])

  // Click handler: toggles between play and pause using Lottie instance methods
  const togglePlay = () => {
    const anim = animRef.current
    if (!anim) return
    if (isPlaying) anim.pause()
    else anim.play()
    setIsPlaying(prev => !prev)
  }

  // Demo form submit handler: prevents page reload and shows a temporary message
  const handleSubmit = (e) => {
    e.preventDefault()
    setShowResponse(true)
  }

  return (
    <div className="space-y-4">
      {/* Animation container (clickable for play/pause) */}
      <div
        ref={containerRef}
        onClick={togglePlay}
        className={`cursor-pointer select-none ${className}`}
        aria-label="Lottie animation (click to toggle play/pause)"
        role="button"
      />
      {/* Simple status text below animation */}
      <div className="text-center text-xs text-zinc-500">
        {isPlaying ? 'Playing (click to pause)' : 'Paused (click to play)'}
      </div>

      {/* Optional demo form (only rendered when showForm=true) */}
      {showForm && (
        <form onSubmit={handleSubmit} className="text-center">
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-500 active:scale-95 transition"
          >
            Submit test
          </button>
          <div className={`mt-2 text-green-600 text-sm ${showResponse ? '' : 'hidden'}`}>
            Submitted!
          </div>
        </form>
      )}
    </div>
  )
}