import Image from "next/image"
import React from "react"
import FaqSection from "components/FaqSection"
import UsDifferent from "components/Home/UsDifferent"
import Layout from "components/Layout"

const DistribuidoresPage: React.FC = () => {
  return (
    <Layout>
      <section className="container mx-auto mt-20 min-h-82 py-20">
        <h1 className="text-center text-5xl sm:text-8xl font-bold">Distribuidores</h1>
        <div className="my-20 flex flex-col-reverse items-center justify-center sm:flex-row  p-10">
          <div className="w-full sm:w-1/2">
            <h2 className="mb-5 text-4xl font-bold">Soluciones premium para tu negocio</h2>
            <p className="text-gray-600">
              Si eres arquitecto, diseñador, constructor, hotelero, desarrollador de proyectos o tienes un negocio de
              venta de productos para baño y cocina, en Solimoder te ofrecemos una amplia gama de soluciones premium a
              precios competitivos. Representamos marcas internacionales de renombre, con productos innovadores y de
              alta calidad que cumplen con los más altos estándares de funcionalidad y sostenibilidad. Con
              disponibilidad inmediata en México y un servicio personalizado, te invitamos a contactarnos para conocer
              más sobre nuestras opciones de compra al por mayor y llevar tus proyectos o negocio al siguiente nivel.
            </p>
          </div>
          <div className="w-full sm:w-1/2 mb-5 sm:mb-0">
            <Image src="/img/mayoreo.png" alt="Distribuidores" width={800} height={800} className="w-full" />
          </div>
        </div>
        <div className="my-20 flex items-center justify-center">
        <FaqSection />
        </div>
        <div className="my-20 flex items-center justify-center">
          <UsDifferent />
        </div>
      </section>
    </Layout>
  )
}

export default DistribuidoresPage
