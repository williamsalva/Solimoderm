"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { HiOutlineArrowRight, HiOutlineMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2"

import listProducts from "data/listProducts"
import { Product } from "types/products"

interface SearchBarProps {
  textColor?: string
}

const normalizeText = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

const SearchBar: React.FC<SearchBarProps> = ({ textColor = "text-primary-500" }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Product[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  // Enfocar input automáticamente al abrir
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setQuery("")
      setResults([])
    }
  }, [isOpen])

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Filtrar productos cuando el query tenga 3 o más caracteres
  useEffect(() => {
    const trimmed = query.trim()
    if (trimmed.length >= 3) {
      const normalizedQuery = normalizeText(trimmed)
      const filtered = listProducts.filter((product) => {
        const nameMatch = normalizeText(product.name).includes(normalizedQuery)
        const titleMatch = normalizeText(product.title).includes(normalizedQuery)
        const modelMatch = normalizeText(product.model || "").includes(normalizedQuery)
        const categoryMatch = normalizeText(product.category || "").includes(normalizedQuery)
        const brandMatch = normalizeText(product.brand || "").includes(normalizedQuery)
        return nameMatch || titleMatch || modelMatch || categoryMatch || brandMatch
      })
      setResults(filtered.slice(0, 8))
    } else {
      setResults([])
    }
  }, [query])

  return (
    <>
      {/* Botón de la Lupa en el Nav */}
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center justify-center rounded-full p-2.5 transition-colors duration-300 ${textColor} hover:bg-black/10 focus:outline-none`}
        aria-label="Buscar producto"
        title="Buscar productos"
      >
        <HiOutlineMagnifyingGlass className="h-6 w-6" />
      </button>

      {/* Overlay Animado de Ancho Completo */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-2 sm:px-6">
              {/* Barra de búsqueda de ancho completo */}
              <div className="relative flex items-center justify-between gap-4">
                <div className="relative flex flex-1 items-center">
                  <HiOutlineMagnifyingGlass className="absolute left-4 h-6 w-6 text-slate-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Escribe al menos 3 letras para buscar productos (ej. tarja, espejo, monomando)..."
                    className="w-full rounded-2xl bg-slate-100 py-3.5 pl-12 pr-10 text-lg font-medium text-slate-900 placeholder-slate-400 outline-none ring-2 ring-transparent transition-all focus:bg-white focus:ring-primary-500"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="absolute right-3 rounded-full p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700"
                    >
                      <HiOutlineXMark className="h-5 w-5" />
                    </button>
                  )}
                </div>

                {/* Botón Cerrar */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200 hover:text-slate-900"
                >
                  <span>Cerrar</span>
                  <HiOutlineXMark className="h-5 w-5" />
                </button>
              </div>

              {/* Mensaje de instrucciones (< 3 caracteres) */}
              {query.trim().length > 0 && query.trim().length < 3 && (
                <div className="py-6 text-center text-sm font-medium text-slate-500">
                  Escribe al menos <span className="font-bold text-primary-500">3 letras</span> para ver las opciones de productos.
                </div>
              )}

              {/* Lista de Resultados de Productos (>= 3 caracteres) */}
              {query.trim().length >= 3 && (
                <div className="mt-4 max-h-[60vh] overflow-y-auto rounded-2xl border border-slate-100 bg-white p-2 shadow-inner">
                  {results.length > 0 ? (
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {results.map((product) => (
                        <Link
                          key={product.id}
                          href={`/producto/${product.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-colors hover:border-slate-200 hover:bg-slate-50"
                        >
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100 p-1">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={64}
                              height={64}
                              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="truncate text-sm font-bold text-slate-900 group-hover:text-primary-500">
                              {product.name}
                            </h4>
                            <p className="truncate text-xs text-slate-500">{product.model}</p>
                            <span className="mt-1 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-slate-600 uppercase">
                              {product.category}
                            </span>
                          </div>
                          <HiOutlineArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-primary-500" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="py-8 text-center text-slate-500">
                      No se encontraron productos que coincidan con &quot;<span className="font-semibold text-slate-800">{query}</span>&quot;.
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SearchBar
