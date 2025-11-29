"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Control audio based on isPlaying state
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio started playing")
          })
          .catch((error) => {
            console.error("Error playing:", error)
            setIsPlaying(false)
          })
      }
    } else {
      audio.pause()
      console.log("Audio paused")
    }
  }, [isPlaying])

  // Initialize audio properties
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.volume = 0.45

    // Sync state with audio events
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)
    audio.addEventListener("ended", handleEnded)

    // Try auto-play (may be blocked by browser)
    const tryAutoPlay = () => {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }

    if (audio.readyState >= 2) {
      tryAutoPlay()
    } else {
      audio.addEventListener("canplay", tryAutoPlay, { once: true })
    }

    return () => {
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("canplay", tryAutoPlay)
    }
  }, [])

  // Handle button click - simply toggle state
  const handleToggle = () => {
    console.log("Button clicked! Toggling from:", isPlaying, "to:", !isPlaying)
    setIsPlaying((prev) => !prev)
  }

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/vande_matram.mp3" 
        preload="auto"
      />
      <button
        onClick={handleToggle}
        type="button"
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white flex items-center justify-center cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 pointer-events-none" />
        ) : (
          <Play className="w-6 h-6 pointer-events-none" />
        )}
      </button>
    </>
  )
}

