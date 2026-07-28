"use client"

import React, { useEffect, useRef, useState } from "react"
import { HiOutlineSparkles, HiSpeakerWave, HiSpeakerXMark, HiPlay } from "react-icons/hi2"

const VIDEO_SRC = "/clips/2026/WhatsApp%20Video%202026-07-27%20at%2012.27.49%20PM%20(4).mp4"

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    // Auto-play when video reaches viewport focus on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          videoEl.play().then(() => setIsPlaying(true)).catch(() => {})
        } else {
          videoEl.pause()
          setIsPlaying(false)
        }
      },
      { threshold: 0.45 }
    )

    observer.observe(videoEl)
    return () => observer.disconnect()
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {})
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    const newMuted = !isMuted
    setIsMuted(newMuted)
    video.muted = newMuted
  }

  return (
    <section className="my-12 sm:my-20 mx-4 sm:mx-16">
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[44px] bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 p-6 sm:p-12 shadow-2xl border border-white/10">
        
        {/* Glow Ambient Light */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-1.5 text-xs font-extrabold text-amber-300 backdrop-blur-md mb-4">
              <HiOutlineSparkles className="h-4 w-4 text-amber-300" />
              COLECCIÓN 2026 EN ACCIÓN
            </span>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Calidad y Acabados <span className="text-cyan-300">Reales</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              Descubre en este vídeo demostrativo el diseño impecable, la resistencia al agua y la precisión en cada uno de nuestros acabados Solimoderm.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Material Impermeable</h4>
                  <p className="text-[11px] text-cyan-200">Resistente a la humedad extrema</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Container (Vertical aspect ratio video frame) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-black group">
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                muted={isMuted}
                playsInline
                loop
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={togglePlay}
                className="w-full aspect-[9/16] object-cover cursor-pointer"
              />

              {/* Mute/Unmute Audio Button */}
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Activar Sonido" : "Silenciar"}
                className="absolute top-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:bg-black/80 active:scale-95 border border-white/20"
              >
                {isMuted ? (
                  <HiSpeakerXMark className="h-5 w-5 text-amber-300" />
                ) : (
                  <HiSpeakerWave className="h-5 w-5 text-cyan-400" />
                )}
              </button>

              {/* Play Overlay indicator when paused */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity duration-300 hover:bg-black/40"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary-500 shadow-2xl backdrop-blur-md transition-transform duration-200 hover:scale-110">
                    <HiPlay className="h-8 w-8 ml-1" />
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
