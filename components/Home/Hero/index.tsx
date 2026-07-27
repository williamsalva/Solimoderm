"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { HiOutlineArrowRight, HiOutlineBookOpen, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineSparkles, HiOutlineTruck } from "react-icons/hi2"

interface Slide {
  id: number
  tag: string
  title: string
  subtitle: string
  description: string
  image: string
  badgeText: string
  badgeIcon: React.ReactNode
  ctaText: string
  ctaLink: string
}

const slides: Slide[] = [
  {
    id: 1,
    tag: "Novedad 2026",
    title: "Ovalines de Mármol y Cristal Templado",
    subtitle: "Diseño Exclusivo para Tu Hogar",
    description:
      "Transforma tu baño con piezas únicas en acabado marmoleado, alta durabilidad y tecnología anti-manchas. Calidad premium importada directo de fábrica.",
    image: "/img/hero-ovalin.png",
    badgeText: "Diseño Marmoleado",
    badgeIcon: <HiOutlineSparkles className="h-5 w-5 text-amber-500" />,
    ctaText: "Ver Ovalines",
    ctaLink: "/ovalines",
  },
  {
    id: 2,
    tag: "Tecnología Avanzada",
    title: "Espejos LED Inteligentes y Bluetooth",
    subtitle: "Iluminación Táctil y Desempañante",
    description:
      "Espejos multifunción con luces LED dimeables, sensor touch de un toque, altavoces Bluetooth y sistema antivaho integrado.",
    image: "/img/espejoProd.png",
    badgeText: "Luces LED Dimeables",
    badgeIcon: <HiOutlineSparkles className="h-5 w-5 text-blue-500" />,
    ctaText: "Ver Espejos",
    ctaLink: "/espejos",
  },
  {
    id: 3,
    tag: "Tendencia en Interiores",
    title: "Muebles de Baño Flotantes y de Piso",
    subtitle: "Estilo Vanguardista y Almacenamiento",
    description:
      "Muebles con acabados resistentes a la humedad, lavabos integrados y amplios compartimentos para un espacio limpio y elegante.",
    image: "/img/hero-mueble.png",
    badgeText: "Resistentes a la Humedad",
    badgeIcon: <HiOutlineSparkles className="h-5 w-5 text-emerald-500" />,
    ctaText: "Ver Muebles",
    ctaLink: "/muebles-de-bano",
  },
  {
    id: 4,
    tag: "Alta Resistencia",
    title: "Tarjas y Fregaderos de Acero Inoxidable",
    subtitle: "Funcionalidad Premium para Cocina",
    description:
      "Tarjas de una y dos tinas con accesorios completos, recubrimiento antirruido y acabados satinados o de alto impacto.",
    image: "/img/hero-tarja.png",
    badgeText: "Acero de Alto Impacto",
    badgeIcon: <HiOutlineTruck className="h-5 w-5 text-indigo-500" />,
    ctaText: "Ver Tarjas",
    ctaLink: "/tarjas",
  },
]

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const activeSlide: Slide = slides[current] ?? slides[0]!

  return (
    <section className="relative mt-20 w-full overflow-hidden py-8 sm:py-16">
      {/* Fondo decorativo dinámico */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Columna Izquierda: Información del Slide */}
          <div className="z-10 flex flex-col justify-center text-center lg:col-span-6 lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Badge Kicker */}
                <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-600 shadow-xs">
                  <HiOutlineSparkles className="h-4 w-4 text-primary-500" />
                  <span>{activeSlide.tag}</span>
                </div>

                {/* Título Principal */}
                <h1 className="mt-4 text-4xl font-extrabold leading-tight text-primary-500 sm:text-6xl lg:text-7xl">
                  {activeSlide.subtitle}
                </h1>

                {/* Subtítulo del Producto */}
                <h2 className="mt-2 text-xl font-semibold text-slate-800 sm:text-2xl">
                  {activeSlide.title}
                </h2>

                {/* Descripción */}
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
                  {activeSlide.description}
                </p>

                {/* Botones de Acción */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <Link
                    href={activeSlide.ctaLink}
                    className="group inline-flex items-center gap-3 rounded-full bg-primary-500 px-7 py-3.5 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-xl"
                  >
                    <span>{activeSlide.ctaText}</span>
                    <HiOutlineArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/catalogo"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-xs transition-all duration-300 hover:bg-slate-100 hover:text-slate-900"
                  >
                    <HiOutlineBookOpen className="h-5 w-5 text-primary-500" />
                    <span>Catálogo 2026</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controles del Slider e Indicadores */}
            <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">
              <div className="flex gap-2">
                {slides.map((s, index) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrent(index)
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === current ? "w-8 bg-primary-500" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Ir al slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
                <button
                  onClick={prevSlide}
                  className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-xs transition-colors hover:bg-primary-50 hover:text-primary-500"
                  aria-label="Anterior"
                >
                  <HiOutlineChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-xs transition-colors hover:bg-primary-50 hover:text-primary-500"
                  aria-label="Siguiente"
                >
                  <HiOutlineChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Imagen Destacada Animada con Círculo de Fondo */}
          <div className="relative flex items-center justify-center lg:col-span-6">
            <div className="relative w-full max-w-lg">
              
              {/* Círculo de fondo azul institucional flotante */}
              <div className="absolute inset-0 m-auto aspect-square w-4/5 rounded-full bg-primary-500/95 shadow-2xl transition-transform duration-700 group-hover:scale-105" />

              {/* Imagen del Producto con AnimatePresence */}
              <div className="relative z-10 aspect-square w-full p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative flex h-full w-full items-center justify-center"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      width={650}
                      height={650}
                      priority
                      className="max-h-full max-w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Badge Flotante sobre la Imagen */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="absolute bottom-4 left-4 z-20 flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-3.5 shadow-xl backdrop-blur-md"
                >
                  <div className="rounded-xl bg-slate-100 p-2">
                    {activeSlide.badgeIcon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Garantía Solimoderm</p>
                    <p className="text-sm font-extrabold text-slate-800">{activeSlide.badgeText}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
