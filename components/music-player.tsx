"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true) // Start with true so music plays by default
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const hasTriedAutoPlay = useRef(false)

  // Initialize audio properties
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.volume = 0.35

    // Sync state with audio events
    const handlePlay = () => {
      setIsPlaying(true)
     
    }
    const handlePause = () => {
      setIsPlaying(false)
     
    }
    const handleEnded = () => {
      setIsPlaying(false)
    }

    audio.addEventListener("play", handlePlay)
    audio.addEventListener("playing", handlePlay)
    audio.addEventListener("pause", handlePause)
    audio.addEventListener("ended", handleEnded)

    // Try auto-play when audio is ready (may be blocked by browser)
    const tryAutoPlay = () => {
      if (hasTriedAutoPlay.current) return
      
      audio.play()
        .then(() => {
          hasTriedAutoPlay.current = true
          setIsPlaying(true)
        })
        .catch(() => {
          // Autoplay blocked - this is normal, will start on first user click
          setIsPlaying(false)
        })
    }

    // Try to play when audio is ready
    if (audio.readyState >= 2) {
      tryAutoPlay()
    } else {
      audio.addEventListener("canplay", tryAutoPlay, { once: true })
      audio.addEventListener("loadeddata", tryAutoPlay, { once: true })
      audio.addEventListener("canplaythrough", tryAutoPlay, { once: true })
    }

    return () => {
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("playing", handlePlay)
      audio.removeEventListener("pause", handlePause)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("canplay", tryAutoPlay)
      audio.removeEventListener("loadeddata", tryAutoPlay)
      audio.removeEventListener("canplaythrough", tryAutoPlay)
    }
  }, [])

  // Control audio based on isPlaying state
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio started successfully
          })
          .catch((error) => {
            // Silently handle autoplay blocking - this is normal browser behavior
            setIsPlaying(false)
          })
      }
    } else {
      audio.pause()
    }
  }, [isPlaying])

  // Start music on first user interaction (click anywhere on page)
  useEffect(() => {
    let hasStarted = false
    
    const handleFirstInteraction = () => {
      if (!hasStarted && audioRef.current) {
        hasStarted = true
        hasTriedAutoPlay.current = true
        // Start music immediately on first interaction
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(() => {
            setIsPlaying(false)
          })
      }
    }

    // Listen for any user interaction - use capture phase to catch early
    const options = { once: true, capture: true }
    document.addEventListener("click", handleFirstInteraction, options)
    document.addEventListener("touchstart", handleFirstInteraction, options)
    document.addEventListener("keydown", handleFirstInteraction, options)
    document.addEventListener("mousedown", handleFirstInteraction, options)

    return () => {
      document.removeEventListener("click", handleFirstInteraction, { capture: true })
      document.removeEventListener("touchstart", handleFirstInteraction, { capture: true })
      document.removeEventListener("keydown", handleFirstInteraction, { capture: true })
      document.removeEventListener("mousedown", handleFirstInteraction, { capture: true })
    }
  }, [])

  // Handle button click - start music if not started, otherwise toggle
  const handleToggle = () => {
    const audio = audioRef.current
    if (!audio) return

    // If music hasn't started yet, start it
    if (!hasTriedAutoPlay.current) {
      hasTriedAutoPlay.current = true
      audio.play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch(() => {
          setIsPlaying(false)
        })
    } else {
      // Toggle play/pause
      setIsPlaying((prev) => !prev)
    }
  }

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/vande_matram.mp3" 
        preload="auto"
        autoPlay
      />
      <button
        onClick={handleToggle}
        type="button"
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white flex items-center justify-center cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label={isPlaying ? "Stop music" : "Start music"}
      >
        {isPlaying ? (
          <VolumeX className="w-6 h-6 pointer-events-none" /> // F1 mute icon - music is PLAYING, click to STOP
        ) : (
          <Volume2 className="w-6 h-6 pointer-events-none" /> // F3 sound icon - music is STOPPED, click to START
        )}
      </button>
    </>
  )
}

