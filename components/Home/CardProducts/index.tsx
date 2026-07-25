"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { FaArrowRight } from "react-icons/fa"

import categories from "data/categories"
import listProducts from "data/listProducts"

// La portada de cada categoría es el primer producto del catálogo
const cards = categories.map((category) => ({
  ...category,
  image: listProducts.find((product) => product.category === category.slug)?.image,
}))

const CardProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-10 sm:py-20">
      <h2 className="mb-8 text-center text-5xl font-bold sm:text-7xl">Nuestros Productos</h2>
      <p className="text-center text-gray-600">
        Descubre los productos que tenemos para ti. Diseños exclusivos y calidad inigualable.
      </p>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 p-10 sm:grid-cols-2">
          {cards.map((card, index) => (
            <Link
              key={card.slug}
              href={`/${card.slug}`}
              className="relative m-5 flex h-80 w-full transform items-center justify-between rounded-3xl shadow-md transition-transform hover:scale-105 sm:p-4"
              style={{ backgroundColor: hoveredIndex === index ? "#7FA6C1" : "#19456E" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3
                className={`absolute bottom-1 left-4 mb-5 text-4xl font-bold sm:top-4 sm:text-6xl ${
                  hoveredIndex === index ? "text-primary-500" : "text-white"
                }`}
              >
                {card.name}
              </h3>
              {card.image && (
                <Image
                  src={card.image}
                  alt={card.name}
                  width={300}
                  height={300}
                  className="absolute bottom-20 max-h-56 w-auto object-contain sm:bottom-auto sm:right-10"
                />
              )}
              <span className="absolute bottom-4 right-4 hidden size-12 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-600 sm:flex">
                <FaArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardProducts
