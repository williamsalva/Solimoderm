import { Form } from "formik"
import React from "react"
import { FaWhatsapp } from "react-icons/fa"
import FormContact from "components/FormContact"
import Layout from "components/Layout"

const ContactPage = () => {
  return (
    <Layout>
      <section className="min-h-screen">
        <div className="container mx-auto mt-20 min-h-82 py-20">
          <h1 className="text-center text-6xl font-bold sm:text-8xl">Contacto</h1>
          <div className="my-20 flex flex-col items-center justify-center sm:flex-row">
            <div className="w-full p-4 sm:w-1/2">
              <h2 className="mb-5 text-6xl font-bold">¿Tienes alguna duda? 🤔</h2>
              <p className="text-lg text-gray-500">
                Si tienes alguna duda, comentario o sugerencia, no dudes en contactarnos. En Solimoder estamos para
                ayudarte. Llena el formulario de contacto o comunícate con nosotros a través de nuestras redes sociales.
              </p>

              <div className="mt-10">
                <h3 className="text-5xl font-bold">Mándanos un WhatsApp</h3>
                <a
                  href="https://wa.me/5213316966041?text=👋Hola%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20Productos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full max-w-xs transform items-center justify-center rounded-full bg-green-500 px-4 py-2 font-medium text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-green-600 sm:max-w-md sm:px-10 sm:py-3"
                >
                  <FaWhatsapp className="mr-2 text-xl" />
                  Envianos un WhatsApp
                </a>
              </div>
            </div>
            <div className="mt-10 w-full p-4 sm:mt-0 sm:w-1/2">
              <FormContact />
            </div>
          </div>
          {/* Ubicación en Google Maps */}
          <div className="my-20 flex flex-col justify-center">
            <h3 className="mt-4 mb-10 text-center text-lg font-bold sm:text-4xl">
              📍 Visítanos en nuestra ubicación para más información y asistencia personalizada.
            </h3>

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
      </section>
    </Layout>
  )
}

export default ContactPage
