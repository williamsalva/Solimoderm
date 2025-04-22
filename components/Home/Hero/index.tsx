import Image from "next/image"
import React from "react"
import ImageSlider from "components/ImageSlider"

const Hero = () => {
  return (
    <div className="mt-20 flex items-center justify-between p-5">
      <div className="flex-1 pl-8">
        <h1 className="mb-10 text-8xl font-bold">Diseño Exclusivo para Tu Hogar</h1>
        <p className="text-md text-gray-600">
          Descubre tarjas, espejos LED y muebles de baño con diseños premium y calidad inigualable. Importamos directo
          de fábrica para ofrecerte los mejores estilos a precios competitivos.
        </p>
        
      </div>
      <div className="w-1/2">
        {/* <Image
          src="/img/hero-ovalin.png"
          alt="Descripción de la imagen"
          layout="responsive"
          width={300}
          height={100}
          className="rounded-tr-3xl rounded-bl-3xl"
        /> */}
        <ImageSlider />
      </div>
    </div>
  )
}

export default Hero
