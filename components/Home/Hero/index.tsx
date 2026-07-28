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
  ghostFontSize: string
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
    src: "/hero/mueble-de-baño.png",
    bg: "#16466F", // Solimoderm Primary Blue
    ghostText: "MUEBLES DE BAÑO",
    ghostFontSize: "clamp(24px, 7vw, 105px)",
    categoryTag: "LÍNEA DE BAÑO",
    title: "MUEBLES DE BAÑO",
    subtitle: "Diseño Vanguardista e Impermeable",
    description:
      "Muebles flotantes y de piso fabricados con materiales de alta resistencia a la humedad, lavabos integrados y amplios compartimentos de almacenamiento.",
    specPill: "🛡️ 100% Resistentes al Agua",
    link: "/muebles-de-bano",
  },
  {
    id: 1,
    src: "/hero/tarjas.png",
    bg: "#113D63", // Solimoderm Marine Blue
    ghostText: "TARJAS DE COCINA",
    ghostFontSize: "clamp(24px, 7vw, 105px)",
    categoryTag: "LÍNEA DE COCINA",
    title: "TARJAS DE COCINA",
    subtitle: "Acero Inoxidable & Accesorios",
    description:
      "Fregaderos y tarjas de submontar o sobreponer en acero inoxidable calibre premium con recubrimiento antirruido y kits completos de accesorios.",
    specPill: "💧 Acero Inoxidable Calibre 18",
    link: "/tarjas",
  },
  {
    id: 2,
    src: "/hero/espejoe.png",
    bg: "#0E385D", // Solimoderm Midnight Blue
    ghostText: "ESPEJOS LED",
    ghostFontSize: "clamp(34px, 10vw, 145px)",
    categoryTag: "TECNOLOGÍA & ILUMINACIÓN",
    title: "ESPEJOS LED & BLUETOOTH",
    subtitle: "Touch & Antivaho Inteligente",
    description:
      "Espejos multifunción con luz LED dimeable de alta definición, altavoces Bluetooth estéreo e interruptores táctiles con desempañante.",
    specPill: "💡 Luz LED & Bluetooth",
    link: "/espejos",
  },
  {
    id: 3,
    src: "/hero/ovalin.png",
    bg: "#1A507D", // Solimoderm Royal Slate
    ghostText: "OVALINES DE LUJO",
    ghostFontSize: "clamp(26px, 8vw, 120px)",
    categoryTag: "DISEÑO EXCLUSIVO",
    title: "OVALINES DE LUJO",
    subtitle: "Mármol y Cristal Templado",
    description:
      "Lavabos de sobreponer en acabado marmoleado, cristal templado y cerámica esmaltada con acabados de fácil limpieza y resistencia superior.",
    specPill: "✨ Mármol & Cristal Templado",
    link: "/ovalines",
  },
  {
    id: 4,
    src: "/hero/monomando.png",
    bg: "#124B78", // Solimoderm Deep Ocean
    ghostText: "MONOMANDOS",
    ghostFontSize: "clamp(34px, 10vw, 145px)",
    categoryTag: "GRIFERÍA PREMIUM",
    title: "MONOMANDOS Y GRIFERÍA",
    subtitle: "Estilos Modernos para Baño y Cocina",
    description:
      "Mezcladoras y monomandos en acabados mate, dorado, negro y satinado con cartuchos cerámicos de alta durabilidad y ahorro de agua.",
    specPill: "🚰 Cartucho Cerámico Larga Vida",
    link: "/monomandos",
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
        return (prev + 4) % PRODUCTS.length
      })

      if (animationTimerRef.current) clearTimeout(animationTimerRef.current)
      animationTimerRef.current = setTimeout(() => {
        setIsAnimating(false)
      }, 650)
    },
    [isAnimating]
  )

  // Auto-advance slide every 8 seconds (8000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PRODUCTS.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const activeProduct = PRODUCTS[activeIndex] ?? PRODUCTS[0]!

  const getRole = (index: number): "center" | "left" | "right" | "back" => {
    if (index === activeIndex) return "center"
    if (index === (activeIndex + 4) % 5) return "left"
    if (index === (activeIndex + 1) % 5) return "right"
    return "back"
  }

  const getRoleStyles = (role: "center" | "left" | "right" | "back"): React.CSSProperties => {
    switch (role) {
      case "center":
        return {
          transform: "translate(-50%, -50%) scale(1.15)",
          filter: "blur(0px) drop-shadow(0 25px 35px rgba(0,0,0,0.35))",
          opacity: 1,
          zIndex: 20,
          left: "50%",
          top: isMobile ? "44%" : "54%",
          width: isMobile ? "80%" : "90%",
          height: isMobile ? "80%" : "90%",
        }
      case "left":
        return {
          transform: "translate(-50%, -50%) scale(0.65)",
          filter: "blur(3px)",
          opacity: 0.45,
          zIndex: 10,
          left: isMobile ? "10%" : "15%",
          top: isMobile ? "44%" : "54%",
          width: isMobile ? "55%" : "60%",
          height: isMobile ? "55%" : "60%",
        }
      case "right":
        return {
          transform: "translate(-50%, -50%) scale(0.65)",
          filter: "blur(3px)",
          opacity: 0.45,
          zIndex: 10,
          left: isMobile ? "90%" : "85%",
          top: isMobile ? "44%" : "54%",
          width: isMobile ? "55%" : "60%",
          height: isMobile ? "55%" : "60%",
        }
      case "back":
        return {
          transform: "translate(-50%, -50%) scale(0.42)",
          filter: "blur(5px)",
          opacity: 0.2,
          zIndex: 5,
          left: "50%",
          top: isMobile ? "32%" : "38%",
          width: isMobile ? "40%" : "45%",
          height: isMobile ? "40%" : "45%",
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
      {/* Navbar clearance via pt-20 / pt-24 */}
      <div className="relative min-h-screen w-full overflow-hidden pt-20 sm:pt-24">
        
        {/* Grain Noise Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-50 opacity-30"
          style={{
            backgroundImage: `url("${GRAIN_SVG_URI}")`,
            backgroundSize: "180px 180px",
            backgroundRepeat: "repeat",
          }}
        />

        {/* Giant Architectural Ghost Text */}
        <div
          className="pointer-events-none absolute inset-x-0 top-[18%] z-2 flex select-none justify-center text-center font-black uppercase tracking-wider text-white/15 sm:top-[18%]"
          style={{
            fontSize: activeProduct.ghostFontSize,
            lineHeight: 1,
            whiteSpace: "nowrap",
            width: "100%",
            overflow: "hidden",
            transition: "opacity 650ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {activeProduct.ghostText}
        </div>

        {/* Dedicated 3D Carousel Showcase Box */}
        <div className="pointer-events-none absolute inset-x-2 top-[22%] bottom-[38%] z-3 flex items-center justify-center sm:bottom-[4%] sm:left-[36%] sm:right-4 sm:top-[38%]">
          <div className="relative flex h-full w-full max-w-2xl items-center justify-center">
            {PRODUCTS.map((product, index) => {
              const role = getRole(index)
              const roleStyle = getRoleStyles(role)

              return (
                <div
                  key={product.id}
                  style={{
                    position: "absolute",
                    willChange: "transform, filter, opacity, left, top, width, height",
                    transition:
                      "transform 650ms cubic-bezier(0.4, 0, 0.2, 1), filter 650ms cubic-bezier(0.4, 0, 0.2, 1), opacity 650ms cubic-bezier(0.4, 0, 0.2, 1), left 650ms cubic-bezier(0.4, 0, 0.2, 1), top 650ms cubic-bezier(0.4, 0, 0.2, 1), width 650ms cubic-bezier(0.4, 0, 0.2, 1), height 650ms cubic-bezier(0.4, 0, 0.2, 1)",
                    ...roleStyle,
                  }}
                  className="flex items-center justify-center p-2"
                >
                  <div className="relative flex h-full w-full items-center justify-center">
                    <Image
                      src={product.src}
                      alt={product.title}
                      fill
                      priority={role === "center"}
                      draggable={false}
                      sizes="(max-width: 640px) 75vw, 40vw"
                      className="h-full w-full pointer-events-none select-none object-contain object-center drop-shadow-2xl"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Left Side Glassmorphic Product Card (Fluid width on mobile) */}
        <div className="absolute bottom-5 left-4 right-4 z-[60] rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:bottom-10 sm:left-12 sm:right-auto sm:max-w-md sm:p-7">
          <div className="mb-2 flex flex-wrap items-center gap-2 sm:mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md sm:px-3 sm:py-1 sm:text-xs">
              <HiOutlineSparkles className="h-3 w-3 text-amber-300 sm:h-3.5 sm:w-3.5" />
              COLECCIÓN 2026
            </span>
            <span className="inline-flex rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-cyan-200 sm:px-3 sm:py-1 sm:text-xs">
              {activeProduct.categoryTag}
            </span>
          </div>

          <h1 className="text-xl font-black leading-tight text-white sm:text-3xl">
            {activeProduct.title}
          </h1>

          <p className="mt-0.5 text-xs font-bold text-cyan-200 sm:mt-1 sm:text-sm">
            {activeProduct.subtitle}
          </p>

          <p className="mt-2 hidden text-xs leading-relaxed text-white/90 sm:block sm:mt-3 sm:text-sm">
            {activeProduct.description}
          </p>

          <div className="mt-2.5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-3 py-1 text-[11px] font-extrabold text-primary-500 shadow-md sm:mt-3 sm:px-3.5 sm:py-1.5 sm:text-xs">
            <span>{activeProduct.specPill}</span>
          </div>

          {/* Buttons & Slide Navigation */}
          <div className="mt-4 flex items-center justify-between gap-3 sm:mt-5 sm:justify-start sm:gap-4">
            <Link
              href={activeProduct.link}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-primary-500 shadow-lg transition-all duration-300 hover:bg-cyan-50 hover:shadow-xl sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
            >
              <span>Explorar Categoría</span>
              <HiOutlineArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>

            <div className="flex items-center gap-1.5 border-l border-white/20 pl-2 sm:gap-2 sm:pl-3">
              <button
                onClick={() => navigate("prev")}
                disabled={isAnimating}
                aria-label="Anterior"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-200 hover:bg-white/25 active:scale-95 disabled:opacity-50 sm:h-10 sm:w-10"
              >
                <HiOutlineArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <button
                onClick={() => navigate("next")}
                disabled={isAnimating}
                aria-label="Siguiente"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-200 hover:bg-white/25 active:scale-95 disabled:opacity-50 sm:h-10 sm:w-10"
              >
                <HiOutlineArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Counter (Top Right on Mobile to avoid card collision) */}
        <div className="absolute top-22 right-4 z-[60] sm:top-auto sm:bottom-10 sm:right-12">
          <div className="flex items-center gap-1.5 font-black uppercase tracking-widest text-white/80">
            <span className="text-lg text-white sm:text-2xl">0{activeIndex + 1}</span>
            <span className="text-xs text-white/50 sm:text-sm">/ 0{PRODUCTS.length}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
