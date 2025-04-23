"use client"
import { url } from "inspector"
import Image from "next/image"
import React, { useState } from "react"
import { FaArrowRight } from "react-icons/fa"

const CardProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  const products = [
    { name: "Espejos", bgColor: "#19456E", hoverBgColor: "#7FA6C1", imgSrc: "/img/espejoProd.png", url: "/espejos" },
    { name: "Tarjas", bgColor: "#19456E", hoverBgColor: "#7FA6C1", imgSrc: "/img/tarjaProd.png", url: "/tarjas" },
    { name: "Muebles de Baño", bgColor: "#19456E", hoverBgColor: "#7FA6C1", imgSrc: "/img/mueblesProd.png", url: "/muebles-de-bano" },
    { name: "Ovalines", bgColor: "#19456E", hoverBgColor: "#7FA6C1", imgSrc: "/img/ovalinProd.png", url: "/ovalines" },
    // { name: "Repisas", bgColor: "#19456E", hoverBgColor: "#7FA6C1", imgSrc: "/img/ovalinProd.png", url: "/repisas" },
  ]

  return (
    <section className="py-20">
      <h2 className="mb-8 text-center text-7xl font-bold">Nuestros Productos</h2>
      <p className="text-center text-gray-600">
        Descubre los productos que tenemos para ti. Diseños exclusivos y calidad inigualable.
      </p>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 p-10 sm:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative m-5 flex h-80 w-full transform items-center justify-between rounded-3xl p-4 shadow-md transition-transform hover:scale-105`}
              style={{
              backgroundColor: hoveredIndex === index ? product.hoverBgColor : product.bgColor,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => window.location.href = product.url}
            >
                <h3
                className={`absolute top-4 left-4 text-7xl font-bold ${
                  hoveredIndex === index ? ` text-primary-500` : "text-white"
                }`}
                >
                {product.name}
                </h3>
              {product.imgSrc ? (
              <Image src={product.imgSrc} alt={product.name} width={350} height={350} className="absolute right-10" />
              ) : null}
              <button className="absolute right-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-600">
              <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardProducts
