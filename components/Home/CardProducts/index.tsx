import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaArrowRight } from "react-icons/fa"

import categories from "data/categories"
import listProducts from "data/listProducts"

// La portada de cada categoría es el primer producto del catálogo.
// Las destacadas van primero para que abran la retícula con su fila de dos,
// sin alterar el orden del catálogo en `data/categories`.
const cards = [...categories]
  .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
  .map((category) => ({
    ...category,
    image: listProducts.find((product) => product.category === category.slug)?.image,
  }))

const CardProducts = () => (
  <section className="px-4 py-12 sm:px-8 sm:py-20">
    <div className="mx-auto max-w-6xl">
      <header className="text-center">
        <span className="inline-flex rounded-full bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
          Catálogo 2026
        </span>
        <h2 className="mt-5 text-4xl font-bold text-primary-500 sm:text-6xl lg:text-7xl">Nuestros Productos</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          Descubre los productos que tenemos para ti. Diseños exclusivos y calidad inigualable.
        </p>
      </header>

      {/* 6 columnas en desktop: las destacadas ocupan 3 (fila de dos) y el resto 2 (filas de tres) */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
        {cards.map((card, index) => {
          const isFeatured = Boolean(card.featured)
          // La última tarjeta cierra la retícula de 2 columnas en vez de quedar huérfana
          const isOrphan = !isFeatured && index === cards.length - 1

          return (
            <Link
              key={card.slug}
              href={`/${card.slug}`}
              className={`group relative isolate flex overflow-hidden rounded-3xl bg-primary-500 shadow-[0_10px_30px_-12px_rgba(22,70,111,0.45)] transition duration-300 hover:shadow-[0_24px_50px_-12px_rgba(22,70,111,0.55)] focus-visible:outline-4 focus-visible:outline-offset-4 motion-safe:hover:-translate-y-1 ${
                isFeatured ? "h-72 sm:h-80 lg:col-span-3" : "h-64 sm:h-72 lg:col-span-2"
              } ${isOrphan ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              {/* El azul claro del hover cruza en opacidad en vez de saltar de golpe */}
              <span
                aria-hidden
                className="absolute inset-0 -z-10 bg-[#7FA6C1] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div
                className={`flex flex-1 flex-col ${
                  // La destacada se lee como banner: bloque centrado en vez de texto arriba y CTA hasta abajo
                  isFeatured ? "justify-center p-6 sm:p-8" : "justify-between p-5 sm:p-6"
                }`}
              >
                <div>
                  <h3
                    className={`font-bold leading-tight text-white transition-colors duration-300 group-hover:text-primary-500 ${
                      isFeatured ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
                    }`}
                  >
                    {card.name}
                  </h3>
                  <p
                    className={`mt-3 text-primary-50 transition-colors duration-300 group-hover:text-primary-700 ${
                      isFeatured ? "max-w-md text-sm sm:text-base" : "line-clamp-3 text-xs sm:text-sm"
                    }`}
                  >
                    {card.tagline}
                  </p>
                </div>
                <span
                  className={`inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-2.5 text-sm font-semibold text-white transition duration-300 group-hover:bg-white group-hover:text-primary-500 ${
                    isFeatured ? "mt-6" : "mt-4"
                  }`}
                >
                  {/* En touch no hay hover, así que la etiqueta se muestra siempre en móvil */}
                  <span className="max-w-40 overflow-hidden whitespace-nowrap pr-2 transition-all duration-300 sm:max-w-0 sm:pr-0 sm:group-hover:max-w-40 sm:group-hover:pr-2">
                    Ver categoría
                  </span>
                  <FaArrowRight
                    aria-hidden
                    className="shrink-0 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5"
                  />
                </span>
              </div>

              {card.image && (
                // El catálogo son fotos con fondo blanco: se enmarcan en un panel propio
                // para que se integren a la tarjeta en vez de flotar sobre el azul
                // En la destacada el panel se ajusta al ancho de la foto para no dejar
                // márgenes blancos enormes; en las de la retícula va a ancho fijo para
                // que las filas de tres se vean parejas
                <div
                  className={`flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg ${
                    isFeatured ? "my-6 mr-6 max-w-[45%] p-5 sm:my-8 sm:mr-8 sm:p-6" : "my-5 mr-5 w-2/5 p-3 sm:p-4"
                  }`}
                >
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={400}
                    height={400}
                    sizes={isFeatured ? "(max-width: 640px) 40vw, 380px" : "(max-width: 640px) 40vw, 240px"}
                    className="h-full w-auto max-w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                </div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  </section>
)

export default CardProducts
