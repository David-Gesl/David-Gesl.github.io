import React, { useEffect, useRef, useState } from 'react'

export default function LottiePlayer() {
  // ref to the DOM container where lottie will render the SVG     * @see {@link https://react.dev/reference/react/useRef}
  const containerRef = useRef(null)

  // ref to hold the loaded animation instance so we can call play()/pause()/destroy()
  const animRef = useRef(null)

  // component state to track whether the animation is currently playing
    // useState(true) Initializes the state with true
    // isPlaying      Variable to track the current state value (is animation playing? True by deafult )
    // setIsPlaying   Functoin to change isPlaying state value

  const [isPlaying, setIsPlaying] = useState(true)
  
  // component state that controls showing the "Submitted!" response
  const [showResponse, setShowResponse] = useState(false)

  // Effect: load the Lottie animation when the component mounts
  useEffect(() => {
    if (!containerRef.current) return

    // loadAnimation returns an animation instance we keep in animRef
    animRef.current = lottie.loadAnimation({
      container: containerRef.current, // element to render into
      renderer: 'svg',                 // render as inline SVG
      loop: true,
      autoplay: true,
      path: './BoyStudyingScience.json' // path to the animation JSON (adjust as needed)
    })

    // cleanup: destroy the animation when the component unmounts
    return () => animRef.current?.destroy()
  }, [])

  // Toggle play/pause using the animation instance API
  function togglePlay() {
    if (!animRef.current) return
    if (isPlaying) animRef.current.pause()
    else animRef.current.play()
    setIsPlaying(!isPlaying)
  }

  // Handle the form submit — set state to reveal the response message
  function handleSubmit(e) {
    e.preventDefault()
    setShowResponse(true)
  }

  // Render the animation container and a simple form with a submit button.
  // The container uses onClick to toggle play/pause instead of adding a DOM event listener.
  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        id="lottie-animation"
        className="w-64 h-64 mx-auto cursor-pointer"
        onClick={togglePlay}
        aria-label="Lottie animation"
      />
      <form onSubmit={handleSubmit} className="text-center">
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Submit test
        </button>
        <div id="form-response" className={`${showResponse ? '' : 'hidden'} mt-2 text-green-600`}>
          Submitted!
        </div>
      </form>
    </div>
  )
}