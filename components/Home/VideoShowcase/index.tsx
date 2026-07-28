"use client"

import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { HiOutlineSparkles, HiSpeakerWave, HiSpeakerXMark, HiPlay } from "react-icons/hi2"

const VIDEO_SRC = "/clips/2026/WhatsApp%20Video%202026-07-27%20at%2012.27.49%20PM%20(4).mp4"

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    // Auto-play with audio when video reaches viewport focus on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          videoEl.muted = isMuted
          videoEl.play().then(() => setIsPlaying(true)).catch(() => {
            // Fallback to muted autoplay if strict browser policy requires gesture
            videoEl.muted = true
            setIsMuted(true)
            videoEl.play().then(() => setIsPlaying(true)).catch(() => {})
          })
        } else {
          videoEl.pause()
          setIsPlaying(false)
        }
      },
      { threshold: 0.45 }
    )

    observer.observe(videoEl)
    return () => observer.disconnect()
  }, [isMuted])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.muted = isMuted
      video.play().then(() => setIsPlaying(true)).catch(() => {
        video.muted = true
        setIsMuted(true)
        video.play().then(() => setIsPlaying(true)).catch(() => {})
      })
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
    <section className="my-8 sm:my-14 mx-4 sm:mx-16">
      {/* Solimoderm Brand Solid Primary Blue Box */}
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[44px] bg-[#16466F] p-6 sm:p-8 shadow-xl border border-white/10">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          {/* Text Content & Logo */}
          <div className="lg:col-span-5 text-white">
            
            {/* Large Official Solimoderm Logo Card */}
            <div className="mb-5 inline-block rounded-2xl bg-white p-4 sm:p-5 shadow-xl border border-white/30">
              <Image
                src="/img/solimoderm.png"
                alt="Solimoderm Logo"
                width={380}
                height={190}
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </div>

            <div className="mb-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-extrabold text-white backdrop-blur-md">
                <HiOutlineSparkles className="h-4 w-4 text-amber-300" />
                VENTA AL MAYOREO & DISTRIBUCIÓN
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              ¿Eres Mayorista? <br />
              <span className="text-cyan-200">Tu Tienda de Baño y Cocina Está Aquí</span>
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
              Sabemos que tú también eres una marca. Fabricamos y distribuimos productos de calidad comprobada a precios mayoristas: desde tarjas, espejos y monomandos, hasta muebles listos para exhibir. Productos que se venden solos y precios diseñados para darte el máximo margen.
            </p>

            {/* Feature Pills */}
            <div className="mt-5 flex flex-col gap-2.5">
              <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-3.5 py-2.5 backdrop-blur-md">
                <span className="text-lg">💼</span>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Calidad que te Deja Ganancia</h4>
                  <p className="text-[11px] text-cyan-200">Precios especiales pensados para distribuidores y tiendas</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-3.5 py-2.5 backdrop-blur-md">
                <span className="text-lg">🚚</span>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Proveedor 100% Confiable</h4>
                  <p className="text-[11px] text-cyan-200">Muebles, tarjas, espejos y grifería listos para exhibir</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Container Frame (Capped height max-h-[500px] for elegant section proportion) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm max-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-black group">
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
                className="w-full max-h-[500px] aspect-[9/16] object-cover cursor-pointer"
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
                  <HiSpeakerWave className="h-5 w-5 text-cyan-300" />
                )}
              </button>

              {/* Play Overlay indicator when paused */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity duration-300 hover:bg-black/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-primary-500 shadow-2xl backdrop-blur-md transition-transform duration-200 hover:scale-110">
                    <HiPlay className="h-7 w-7 ml-0.5" />
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
