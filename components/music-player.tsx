"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true) // Start with true so music plays by default
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const hasTriedAutoPlay = useRef(false)

  // Initialize audio and start playing automatically on site load
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Set audio properties
    audio.loop = true
    audio.volume = 0.35

    // Sync state with audio events
    const handlePlay = () => {
      setIsPlaying(true)
      // Skip first 11 seconds, start from 12 seconds
      if (audio.currentTime < 12) {
        audio.currentTime = 12
      }
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

    // Try to auto-play immediately when audio is ready
    const tryAutoPlay = () => {
      if (hasTriedAutoPlay.current) return
      hasTriedAutoPlay.current = true
      
      // Set start time to 12 seconds before playing
      audio.currentTime = 12
      
      audio.play()
        .then(() => {
          setIsPlaying(true)
          // Ensure we're at 12 seconds
          if (audio.currentTime < 12) {
            audio.currentTime = 12
          }
        })
        .catch(() => {
          // Autoplay blocked by browser - user will need to click button
          setIsPlaying(false)
        })
    }

    // Try multiple strategies to start audio
    const startAudio = () => {
      if (audio.readyState >= 2) {
        tryAutoPlay()
      } else {
        audio.addEventListener("canplay", tryAutoPlay, { once: true })
        audio.addEventListener("loadeddata", tryAutoPlay, { once: true })
        audio.addEventListener("canplaythrough", tryAutoPlay, { once: true })
      }
    }

    // Try immediately
    startAudio()

    // Also try when window loads
    if (typeof window !== 'undefined') {
      window.addEventListener("load", startAudio, { once: true })
    }

    return () => {
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("playing", handlePlay)
      audio.removeEventListener("pause", handlePause)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("canplay", tryAutoPlay)
      audio.removeEventListener("loadeddata", tryAutoPlay)
      audio.removeEventListener("canplaythrough", tryAutoPlay)
      if (typeof window !== 'undefined') {
        window.removeEventListener("load", startAudio)
      }
    }
  }, [])

  // Control audio based on isPlaying state
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      // Set start time to 12 seconds before playing
      if (audio.currentTime < 12) {
        audio.currentTime = 12
      }
      
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Ensure we're at 12 seconds
            if (audio.currentTime < 12) {
              audio.currentTime = 12
            }
          })
          .catch(() => {
            // Silently handle autoplay blocking
            setIsPlaying(false)
          })
      }
    } else {
      audio.pause()
    }
  }, [isPlaying])

  // Handle button click - toggle play/pause
  const handleToggle = () => {
    setIsPlaying((prev) => !prev)
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
        className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 shadow-lg backdrop-blur-md bg-orange-600/30 border border-orange-400/50 hover:bg-orange-600/40 active:bg-orange-600/50 text-white flex items-center justify-center cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2"
        aria-label={isPlaying ? "Stop music" : "Start music"}
      >
        {isPlaying ? (
          <VolumeX className="w-5 h-5 pointer-events-none" /> // F1 mute icon - music is PLAYING, click to STOP
        ) : (
          <Volume2 className="w-5 h-5 pointer-events-none" /> // F3 sound icon - music is STOPPED, click to START
        )}
      </button>
    </>
  )
}

