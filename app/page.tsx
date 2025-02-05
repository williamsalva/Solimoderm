import { Metadata } from "next"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

export const metadata: Metadata = {
  title: " Solimoderm | Muebles y Accesorios Premium para Baño y Cocina",
  description: "Solimoderm es una empresa dedicada a la venta de muebles y accesorios premium para baño y cocina.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://solimoderm.com",
    title: "Solimoderm | Muebles y Accesorios Premium para Baño y Cocina",
    description: "Solimoderm es una empresa dedicada a la venta de muebles y accesorios premium para baño y cocina.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/img/solimoderm.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
        <div className="text-center">
          {/* Logotipo en grande */}
          <div className="mb-6">
            <Image
              src="/img/solimoderm.png"
              alt="Logotipo"
              width={700}
              height={700}
              className="mx-auto w-full sm:max-w-md md:max-w-lg"
            />
          </div>

          <h1 className="text-3xl font-bold text-[#18446E] sm:text-5xl md:text-6xl lg:text-7xl">
            🚧 ¡Estamos renovando nuestra página!
          </h1>

          {/* Botón de WhatsApp */}
          <div className="flex flex-col items-center">
            <p className="mt-4 text-lg text-gray-600 sm:text-xl">🚀 Escríbenos para cualquier consulta o cotización.</p>
            <a
              href="https://wa.me/5213317943279?text=👋Hola%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20Productos"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full max-w-xs transform items-center justify-center rounded-full bg-green-500 px-4 py-2 font-medium text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-green-600 sm:max-w-md sm:px-10 sm:py-3"
            >
              <FaWhatsapp className="mr-2 text-xl" />
              WhatsApp
            </a>
          </div>
          {/* Ubicación en Google Maps */}
          <div className="mt-6 flex flex-col justify-center">
            <p className="mt-4 mb-10 text-lg text-gray-600 sm:text-xl">
              📍 Visítanos en nuestra ubicación para más información y asistencia personalizada.
            </p>

            {/* Ubicación en Google Maps */}
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.988658740469!2d-103.32237479999999!3d20.670040399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b187b158b9a5%3A0xe3ba18f338334a1e!2sAcabados%20soli-moderm!5e0!3m2!1ses-419!2smx!4v1738761962999!5m2!1ses-419!2smx"
                width="80%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
