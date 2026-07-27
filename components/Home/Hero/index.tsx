"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { HiOutlineArrowLeft, HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi2"

interface HeroProduct {
  id: number
  src: string
  bg: string
  ghostText: string
  categoryTag: string
  title: string
  subtitle: string
  description: string
  specPill: string
  link: string
}

const PRODUCTS: HeroProduct[] = [
  {
    id: 0,
    src: "/img/hero-ovalin.png",
    bg: "#16466F", // Solimoderm Primary Blue
    ghostText: "SOLIMODERM",
    categoryTag: "OVALINES DE LUJO",
    title: "OVALÍN MARMOLEADO",
    subtitle: "Cristal Templado Premium",
    description:
      "Artesanía en cristal templado con acabado marmoleado exclusivo, superficie anti-manchas y durabilidad inigualable.",
    specPill: "✨ Mármol & Cristal",
    link: "/ovalines",
  },
  {
    id: 1,
    src: "/img/espejoProd.png",
    bg: "#0E385D", // Solimoderm Midnight Blue
    ghostText: "ESPEJOS LED",
    categoryTag: "ESPEJOS MULTIFUNCIÓN",
    title: "ESPEJO INTELLIGENT",
    subtitle: "Touch & Bluetooth",
    description:
      "Iluminación LED ambiental dimeable, altavoces Bluetooth estéreo integrados y sistema antivaho de un solo toque.",
    specPill: "💡 Sensor Touch LED",
    link: "/espejos",
  },
  {
    id: 2,
    src: "/img/hero-mueble.png",
    bg: "#1A507D", // Solimoderm Royal Slate
    ghostText: "MUEBLES 2026",
    categoryTag: "MUEBLES DE BAÑO",
    title: "SET FLOTANTE PREMIUM",
    subtitle: "Diseño Impermeable",
    description:
      "Muebles con acabados resistentes a la humedad, lavabos integrados y amplios compartimentos de almacenamiento.",
    specPill: "🛡️ 100% Resistente al Agua",
    link: "/muebles-de-bano",
  },
  {
    id: 3,
    src: "/img/tarjas/tarja-submontable-con-accesorios-t7546-kit-satin.webp",
    bg: "#113D63", // Solimoderm Deep Marine
    ghostText: "TARJAS CHEF",
    categoryTag: "TARJAS DE COCINA",
    title: "TARJA T7546 SATÍN",
    subtitle: "Con Lavacopas Automático",
    description:
      "Acero inoxidable calibre 18 de alta resistencia con kit completo: lavacopas automático, tabla de picar y contracanasta.",
    specPill: "💧 Acero Inoxidable Calibre 18",
    link: "/producto/tarja-submontable-con-accesorios-t7546-kit-satin",
  },
]

// Subtle noise texture overlay
const GRAIN_SVG_URI =
  "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E"

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Preload product images
  useEffect(() => {
    PRODUCTS.forEach((product) => {
      const img = new window.Image()
      img.src = product.src
    })
  }, [])

  const navigate = useCallback(
    (direction: "next" | "prev") => {
      if (isAnimating) return
      setIsAnimating(true)

      setActiveIndex((prev) => {
        if (direction === "next") {
          return (prev + 1) % PRODUCTS.length
        }
        return (prev + 3) % PRODUCTS.length
      })

      if (animationTimerRef.current) clearTimeout(animationTimerRef.current)
      animationTimerRef.current = setTimeout(() => {
        setIsAnimating(false)
      }, 650)
    },
    [isAnimating]
  )

  const activeProduct = PRODUCTS[activeIndex] ?? PRODUCTS[0]!

  const getRole = (index: number): "center" | "left" | "right" | "back" => {
    if (index === activeIndex) return "center"
    if (index === (activeIndex + 3) % 4) return "left"
    if (index === (activeIndex + 1) % 4) return "right"
    return "back"
  }

  const getRoleStyles = (role: "center" | "left" | "right" | "back"): React.CSSProperties => {
    switch (role) {
      case "center":
        return {
          transform: `translateX(-50%) scale(${isMobile ? 1.2 : 1.62})`,
          filter: "blur(0px) drop-shadow(0 20px 30px rgba(0,0,0,0.3))",
          opacity: 1,
          zIndex: 20,
          left: "50%",
          height: isMobile ? "58%" : "84%",
          bottom: isMobile ? "20%" : "2%",
        }
      case "left":
        return {
          transform: "translateX(-50%) scale(1)",
          filter: "blur(2.5px)",
          opacity: 0.75,
          zIndex: 10,
          left: isMobile ? "18%" : "28%",
          height: isMobile ? "16%" : "26%",
          bottom: isMobile ? "30%" : "12%",
        }
      case "right":
        return {
          transform: "translateX(-50%) scale(1)",
          filter: "blur(2.5px)",
          opacity: 0.75,
          zIndex: 10,
          left: isMobile ? "82%" : "72%",
          height: isMobile ? "16%" : "26%",
          bottom: isMobile ? "30%" : "12%",
        }
      case "back":
        return {
          transform: "translateX(-50%) scale(1)",
          filter: "blur(4px)",
          opacity: 0.4,
          zIndex: 5,
          left: "50%",
          height: isMobile ? "13%" : "20%",
          bottom: isMobile ? "32%" : "14%",
        }
    }
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: activeProduct.bg,
        transition: "background-color 650ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="relative h-screen w-full overflow-hidden">
        
        {/* Grain Noise Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-50 opacity-30"
          style={{
            backgroundImage: `url("${GRAIN_SVG_URI}")`,
            backgroundSize: "180px 180px",
            backgroundRepeat: "repeat",
          }}
        />

        {/* Giant Architectural Ghost Text with Montserrat */}
        <div
          className="pointer-events-none absolute inset-x-0 top-[18%] z-2 flex select-none justify-center text-center font-black uppercase tracking-wider text-white/15"
          style={{
            fontSize: "clamp(60px, 20vw, 300px)",
            lineHeight: 0.9,
            transition: "opacity 650ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {activeProduct.ghostText}
        </div>

        {/* Header Kicker Badge */}
        <div className="absolute left-4 top-6 z-[60] flex items-center gap-3 sm:left-8 sm:top-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
            <HiOutlineSparkles className="h-4 w-4 text-amber-300" />
            SOLIMODERM • COLECCIÓN 2026
          </span>
        </div>

        {/* 3D Carousel Product Images */}
        <div className="absolute inset-0 z-3">
          {PRODUCTS.map((product, index) => {
            const role = getRole(index)
            const roleStyle = getRoleStyles(role)

            return (
              <div
                key={product.id}
                style={{
                  position: "absolute",
                  aspectRatio: "0.6 / 1",
                  willChange: "transform, filter, opacity, left, height, bottom",
                  transition:
                    "transform 650ms cubic-bezier(0.4, 0, 0.2, 1), filter 650ms cubic-bezier(0.4, 0, 0.2, 1), opacity 650ms cubic-bezier(0.4, 0, 0.2, 1), left 650ms cubic-bezier(0.4, 0, 0.2, 1), height 650ms cubic-bezier(0.4, 0, 0.2, 1), bottom 650ms cubic-bezier(0.4, 0, 0.2, 1)",
                  ...roleStyle,
                }}
              >
                <Image
                  src={product.src}
                  alt={product.title}
                  fill
                  priority={role === "center"}
                  draggable={false}
                  sizes="(max-width: 640px) 70vw, 50vw"
                  className="h-full w-full pointer-events-none select-none object-contain object-bottom"
                />
              </div>
            )
          })}
        </div>

        {/* Left Side Glassmorphic Product Card */}
        <div className="absolute bottom-6 left-4 z-[60] max-w-[340px] rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:bottom-12 sm:left-12 sm:max-w-md sm:p-7">
          <div className="mb-2 inline-flex rounded-full bg-white/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white sm:text-xs">
            {activeProduct.categoryTag}
          </div>

          <h1 className="text-2xl font-black leading-tight text-white sm:text-3xl">
            {activeProduct.title}
          </h1>

          <p className="mt-1 text-xs font-bold text-cyan-200 sm:text-sm">
            {activeProduct.subtitle}
          </p>

          <p className="mt-3 hidden text-xs leading-relaxed text-white/90 sm:block sm:text-sm">
            {activeProduct.description}
          </p>

          {/* Buttons & Slide Navigation */}
          <div className="mt-5 flex items-center gap-4">
            <Link
              href={activeProduct.link}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold text-primary-500 shadow-lg transition-all duration-300 hover:bg-cyan-50 hover:shadow-xl sm:text-sm"
            >
              <span>Explorar Producto</span>
              <HiOutlineArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex items-center gap-2 border-l border-white/20 pl-3">
              <button
                onClick={() => navigate("prev")}
                disabled={isAnimating}
                aria-label="Anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-200 hover:bg-white/25 active:scale-95 disabled:opacity-50"
              >
                <HiOutlineArrowLeft className="h-5 w-5" />
              </button>

              <button
                onClick={() => navigate("next")}
                disabled={isAnimating}
                aria-label="Siguiente"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-200 hover:bg-white/25 active:scale-95 disabled:opacity-50"
              >
                <HiOutlineArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Spec Pill Badge near top-right */}
        <div className="absolute right-4 top-6 z-[60] sm:right-12 sm:top-8">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-xs font-extrabold text-primary-500 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105">
            <span>{activeProduct.specPill}</span>
          </div>
        </div>

        {/* Bottom Right Slide Counter (01 / 04) */}
        <div className="absolute bottom-6 right-4 z-[60] sm:bottom-12 sm:right-12">
          <div className="flex items-center gap-2 font-black uppercase tracking-widest text-white/80">
            <span className="text-xl text-white sm:text-2xl">0{activeIndex + 1}</span>
            <span className="text-xs text-white/50 sm:text-sm">/ 0{PRODUCTS.length}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
