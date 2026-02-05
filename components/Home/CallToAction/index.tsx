"use client"
import dynamic from "next/dynamic"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import * as animationData from "./icon.json"

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player), { ssr: false })

export default function CallToAction() {
  return (
    <section className="flex flex-col items-center justify-between rounded-2xl bg-gray-100 p-8 md:flex-row">
      {/* Texto e Información */}
      <div className="text-center sm:ml-10 md:w-1/2 md:text-left">
        <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Conéctate con Nosotros en un Click! 🚀</h2>
        <p className="mb-6 text-xl text-gray-500">
          Conviértete en distribuidor o consigue los mejores productos para tu hogar al mejor precio. ¡Contáctanos y
          cotiza sin compromiso!
        </p>

        <a
          href="https://wa.me/5213316966041?text=👋Hola%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20Productos"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full max-w-xs transform items-center justify-center rounded-full bg-green-500 px-4 py-2 font-medium text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-green-600 sm:max-w-md sm:px-10 sm:py-3"
        >
          <FaWhatsapp className="mr-2 text-xl" />
          Escríbenos por WhatsApp
        </a>
      </div>

      {/* Espacio para Imagen */}
      <div className="mt-6 flex justify-center md:mt-0 md:w-1/2">
        <Image
          src="/img/phoneCall.png"
          alt="Imagen de productos"
          width={500}
          height={500}
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </section>
  )
}
