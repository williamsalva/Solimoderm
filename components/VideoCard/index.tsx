"use client"

import React, { useEffect, useRef, useState } from "react"
import { HiSpeakerWave, HiSpeakerXMark, HiPlay, HiPause } from "react-icons/hi2"

type Props = {
  url: string
}

export default function VideoCard({ url }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  // Pause all other videos on the page when this video starts playing
  const pauseOtherVideos = () => {
    const allVideos = document.querySelectorAll<HTMLVideoElement>("video")
    allVideos.forEach((video) => {
      if (video !== videoRef.current) {
        video.pause()
      }
    })
  }

  const handlePlayEvent = () => {
    pauseOtherVideos()
    setIsPlaying(true)
  }

  const handlePauseEvent = () => {
    setIsPlaying(false)
  }

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      pauseOtherVideos()
      video.muted = isMuted
      video.play().catch(() => {
        // Fallback for strict browser policies if gesture wasn't detected
        video.muted = true
        setIsMuted(true)
        video.play().catch(() => {})
      })
    } else {
      video.pause()
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    const newMutedState = !isMuted
    setIsMuted(newMutedState)
    video.muted = newMutedState

    // If unmuting and video was paused, start playback with sound
    if (!newMutedState && video.paused) {
      pauseOtherVideos()
      video.play().catch(() => {})
    }
  }

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    // IntersectionObserver to handle scroll auto-pause/play safely
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting && !videoEl.paused) {
          videoEl.pause()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(videoEl)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-950 group">
      <video
        ref={videoRef}
        src={url}
        muted={isMuted}
        playsInline
        loop
        preload="metadata"
        controls
        onPlay={handlePlayEvent}
        onPause={handlePauseEvent}
        onClick={togglePlay}
        className="w-full aspect-[9/16] object-cover cursor-pointer"
      />

      {/* Audio Toggle Button (Top Right) */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Activar Sonido" : "Silenciar"}
        className="absolute top-3 right-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:bg-black/80 active:scale-95"
      >
        {isMuted ? (
          <HiSpeakerXMark className="h-5 w-5 text-amber-300" />
        ) : (
          <HiSpeakerWave className="h-5 w-5 text-green-400" />
        )}
      </button>

      {/* Play/Pause Overlay indicator when tapped */}
      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 cursor-pointer transition-opacity duration-300 hover:bg-black/30"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-primary-500 shadow-2xl backdrop-blur-md transition-transform duration-200 hover:scale-110">
            <HiPlay className="h-7 w-7 ml-0.5" />
          </div>
        </div>
      )}
    </div>
  )
}
