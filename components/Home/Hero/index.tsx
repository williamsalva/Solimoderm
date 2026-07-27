"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2"

interface HeroProduct {
  id: number
  src: string
  bg: string
  ghostText: string
  categoryTag: string
  title: string
  description: string
  link: string
}

const PRODUCTS: HeroProduct[] = [
  {
    id: 0,
    src: "/img/hero-ovalin.png",
    bg: "#16466F", // Solimoderm Deep Primary Blue
    ghostText: "OVALINES 3D",
    categoryTag: "SOLIMODERM OVALINES",
    title: "OVALÍN MARMOLEADO DE CRISTAL",
    description:
      "Artesanía en cristal templado con acabado marmoleado premium, tecnología anti-manchas y resistencia superior para tu baño.",
    link: "/ovalines",
  },
  {
    id: 1,
    src: "/img/espejoProd.png",
    bg: "#0E385D", // Solimoderm Midnight Blue
    ghostText: "LUZ & TOUCH",
    categoryTag: "SOLIMODERM ESPEJOS",
    title: "ESPEJO LED BLUETOOTH INTELLIGENT",
    description:
      "Iluminación LED táctil dimeable, altavoces Bluetooth estéreo de alta definición y sistema antivaho inteligente integrado.",
    link: "/espejos",
  },
  {
    id: 2,
    src: "/img/hero-mueble.png",
    bg: "#1A507D", // Solimoderm Slate Blue
    ghostText: "DISEÑO 2026",
    categoryTag: "SOLIMODERM MUEBLES",
    title: "SET MUEBLE DE BAÑO FLOTANTE",
    description:
      "Muebles vanguardistas con estructuras impermeables al agua, lavabos cerámicos integrados y amplio almacenamiento modular.",
    link: "/muebles-de-bano",
  },
  {
    id: 3,
    src: "/img/tarjas/tarja-submontable-con-accesorios-t7546-kit-satin.webp",
    bg: "#113D63", // Solimoderm Marine Blue
    ghostText: "EDICIÓN CHEF",
    categoryTag: "SOLIMODERM TARJAS",
    title: "TARJA T7546 CON LAVACOPAS",
    description:
      "Acero inoxidable calibre 18 de alta resistencia con kit completo: lavacopas automático, tabla de picar y contracanasta.",
    link: "/producto/tarja-submontable-con-accesorios-t7546-kit-satin",
  },
]

// Fractal noise SVG data URI for subtle grain texture
const GRAIN_SVG_URI =
  "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E"

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Handle window resize for mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Preload product images on mount
  useEffect(() => {
    PRODUCTS.forEach((product) => {
      const img = new window.Image()
      img.src = product.src
    })
  }, [])

  // Navigation logic with 650ms animation lock
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

  // Determine relative 3D roles based on activeIndex
  const getRole = (index: number): "center" | "left" | "right" | "back" => {
    if (index === activeIndex) return "center"
    if (index === (activeIndex + 3) % 4) return "left"
    if (index === (activeIndex + 1) % 4) return "right"
    return "back"
  }

  // Get inline 3D positioning styles for each role
  const getRoleStyles = (role: "center" | "left" | "right" | "back"): React.CSSProperties => {
    switch (role) {
      case "center":
        return {
          transform: `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`,
          filter: "blur(0px)",
          opacity: 1,
          zIndex: 20,
          left: "50%",
          height: isMobile ? "60%" : "88%",
          bottom: isMobile ? "22%" : "0%",
        }
      case "left":
        return {
          transform: "translateX(-50%) scale(1)",
          filter: "blur(2px)",
          opacity: 0.85,
          zIndex: 10,
          left: isMobile ? "20%" : "30%",
          height: isMobile ? "16%" : "28%",
          bottom: isMobile ? "32%" : "12%",
        }
      case "right":
        return {
          transform: "translateX(-50%) scale(1)",
          filter: "blur(2px)",
          opacity: 0.85,
          zIndex: 10,
          left: isMobile ? "80%" : "70%",
          height: isMobile ? "16%" : "28%",
          bottom: isMobile ? "32%" : "12%",
        }
      case "back":
        return {
          transform: "translateX(-50%) scale(1)",
          filter: "blur(4px)",
          opacity: 1,
          zIndex: 5,
          left: "50%",
          height: isMobile ? "13%" : "22%",
          bottom: isMobile ? "32%" : "12%",
        }
    }
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: activeProduct.bg,
        transition: "background-color 650ms cubic-bezier(0.4, 0, 0.2, 1)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="relative h-screen w-full overflow-hidden">
        
        {/* 1. Grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-50"
          style={{
            backgroundImage: `url("${GRAIN_SVG_URI}")`,
            backgroundSize: "200px 200px",
            backgroundRepeat: "repeat",
            opacity: 0.4,
          }}
        />

        {/* 2. Giant ghost text */}
        <div
          className="pointer-events-none absolute inset-x-0 top-[18%] z-2 flex select-none items-center justify-center text-center font-black uppercase text-white"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(80px, 26vw, 370px)",
            fontWeight: 900,
            opacity: 0.28,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
            transition: "opacity 650ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {activeProduct.ghostText}
        </div>

        {/* 3. Top-left brand label */}
        <div className="absolute left-4 top-6 z-[60] text-xs font-semibold uppercase tracking-[0.18em] text-white opacity-90 sm:left-8 sm:top-8">
          SOLIMODERM | CATÁLOGO 2026
        </div>

        {/* 4. 3D Layered Carousel Items */}
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
                  className="h-full w-full object-contain object-bottom drop-shadow-2xl select-none pointer-events-none"
                />
              </div>
            )
          })}
        </div>

        {/* 5. Bottom-left text + Navigation Circular Buttons */}
        <div className="absolute bottom-6 left-4 z-[60] max-w-[320px] sm:bottom-16 sm:left-20 sm:max-w-md">
          <p className="mb-2 text-base font-bold uppercase tracking-wider text-white opacity-95 sm:mb-3 sm:text-[22px]">
            {activeProduct.categoryTag}
          </p>

          <p className="mb-4 hidden text-xs leading-relaxed text-white opacity-85 sm:mb-6 sm:block sm:text-sm">
            {activeProduct.description}
          </p>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("prev")}
              disabled={isAnimating}
              aria-label="Producto anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-transparent text-white transition-all duration-150 hover:scale-108 hover:bg-white/15 active:scale-95 disabled:opacity-50 sm:h-16 sm:w-16"
            >
              <HiOutlineArrowLeft className="h-6 w-6 stroke-[2.25] text-white sm:h-7 sm:w-7" />
            </button>

            <button
              onClick={() => navigate("next")}
              disabled={isAnimating}
              aria-label="Producto siguiente"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-transparent text-white transition-all duration-150 hover:scale-108 hover:bg-white/15 active:scale-95 disabled:opacity-50 sm:h-16 sm:w-16"
            >
              <HiOutlineArrowRight className="h-6 w-6 stroke-[2.25] text-white sm:h-7 sm:w-7" />
            </button>
          </div>
        </div>

        {/* 6. Bottom-right link "DESCUBRIR PRODUCTO" */}
        <div className="absolute bottom-6 right-4 z-[60] sm:bottom-16 sm:right-12">
          <Link
            href={activeProduct.link}
            className="group flex items-center gap-2 font-normal uppercase text-white opacity-95 transition-opacity duration-200 hover:opacity-100"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(22px, 4.5vw, 56px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            <span>DESCUBRIR PRODUCTO</span>
            <HiOutlineArrowRight className="h-6 w-6 shrink-0 stroke-[2.25] transition-transform duration-300 group-hover:translate-x-2 sm:h-9 sm:w-9" />
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Hero
