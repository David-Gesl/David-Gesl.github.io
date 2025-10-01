import { useEffect, useRef, useState } from 'react'
import animationData from '../assets/BoyStudyingScience.json'

export default function LottiePlayer({
  className = 'w-64 h-64',
  loop = true,
  autoplay = true,
  showForm = false,
  showStatus = false   // default off for cleaner embedding
}) {
  const containerRef = useRef(null)
  const animRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [showResponse, setShowResponse] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const lottie = window.lottie
    if (!lottie) {
      console.warn('[LottiePlayer] window.lottie missing (CDN script order?)')
      return
    }

    if (animRef.current) {
      animRef.current.destroy()
      animRef.current = null
    }

    animRef.current = lottie.loadAnimation({
      container: el,
      renderer: 'svg',
      loop,
      autoplay,
      animationData,
      rendererSettings: {
        // Helps avoid unexpected padding / odd clipping perception
        preserveAspectRatio: 'xMidYMid meet'
      }
    })

    setIsPlaying(autoplay)

    return () => {
      animRef.current?.destroy()
      animRef.current = null
    }
  }, [loop, autoplay])

  const togglePlay = () => {
    const anim = animRef.current
    if (!anim) return
    if (isPlaying) anim.pause()
    else anim.play()
    setIsPlaying(p => !p)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowResponse(true)
  }

  return (
    <div className={showForm || showStatus ? 'space-y-3' : undefined}>
      <div
        ref={containerRef}
        onClick={togglePlay}
        className={`block cursor-pointer select-none ${className}`}
        aria-label="Lottie animation (click to toggle play/pause)"
        role="button"
      />
      {showStatus && (
        <div className="text-center text-xs text-zinc-600">
          {isPlaying ? 'Playing (click to pause)' : 'Paused (click to play)'}
        </div>
      )}
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