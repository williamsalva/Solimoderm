import Image from "next/image"
import React from "react"
import { HiOutlineMapPin, HiOutlineTruck, HiOutlineUserGroup } from "react-icons/hi2"

import FaqSection from "components/FaqSection"
import UsDifferent from "components/Home/UsDifferent"
import Layout from "components/Layout"

const estadosColumna1 = [
  "Jalisco",
  "Aguascalientes",
  "Nayarit",
  "Colima",
  "Zacatecas",
  "Michoacán",
  "Guanajuato",
  "Durango",
  "Sonora",
  "Chihuahua",
]

const estadosColumna2 = [
  "Ciudad de México",
  "Querétaro",
  "Guerrero",
  "Hidalgo",
  "Sinaloa",
  "Nuevo León",
  "Puebla",
  "San Luis Potosí",
  "Baja California",
]

const DistribuidoresPage: React.FC = () => {
  return (
    <Layout>
      <section className="container mx-auto min-h-82 py-20 pt-36">
        <h1 className="text-center text-6xl font-bold text-primary-500 sm:text-8xl">Distribuidores</h1>

        {/* Sección Soluciones Premium */}
        <div className="my-16 flex flex-col-reverse items-center justify-center p-6 sm:flex-row sm:p-10">
          <div className="w-full sm:w-1/2">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 sm:text-4xl">Soluciones premium para tu negocio</h2>
            <p className="leading-relaxed text-slate-600">
              Si eres arquitecto, diseñador, constructor, hotelero, desarrollador de proyectos o tienes un negocio de
              venta de productos para baño y cocina, en Solimoderm te ofrecemos una amplia gama de soluciones premium a
              precios competitivos. Representamos marcas internacionales de renombre, con productos innovadores y de
              alta calidad que cumplen con los más altos estándares de funcionalidad y sostenibilidad. Con
              disponibilidad inmediata en México y un servicio personalizado, te invitamos a contactarnos para conocer
              más sobre nuestras opciones de compra al por mayor y llevar tus proyectos o negocio al siguiente nivel.
            </p>
          </div>
          <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-8">
            <Image src="/img/mayoreo.png" alt="Distribuidores" width={800} height={800} className="w-full rounded-2xl" />
          </div>
        </div>

        {/* Sección Presencia Nacional y Mapa de Distribuidores */}
        <div className="my-20 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-12">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600">
              Red de Cobertura
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-primary-500 sm:text-6xl">
              PRESENCIA NACIONAL
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
              Nuestra red de distribuidores nos permite tener presencia en diversos estados de la República Mexicana, ofreciendo productos de calidad y un servicio confiable para atender las necesidades de nuestros clientes.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Imagen del Mapa recortada (solo el gráfico) */}
            <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md lg:w-1/2">
              <Image
                src="/img/mapa-mexico-solo.png"
                alt="Mapa de Presencia Nacional Solimoderm"
                width={1000}
                height={700}
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Listado de Estados */}
            <div className="w-full rounded-2xl border border-slate-200 bg-white p-8 shadow-xs lg:w-1/2">
              <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900">
                <HiOutlineMapPin className="h-6 w-6 text-primary-500" />
                Estados en los que tenemos presencia:
              </h3>

              <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                <ul className="space-y-2.5">
                  {estadosColumna1.map((estado, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm font-medium text-slate-700 sm:text-base">
                      <span className="h-2 w-2 rounded-full bg-primary-500"></span>
                      {estado}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2.5">
                  {estadosColumna2.map((estado, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm font-medium text-slate-700 sm:text-base">
                      <span className="h-2 w-2 rounded-full bg-primary-500"></span>
                      {estado}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Destacados Inferiores */}
          <div className="mt-12 grid grid-cols-1 gap-6 rounded-2xl bg-primary-500 p-8 text-white sm:grid-cols-2">
            <div className="flex items-center justify-center gap-4 text-center sm:text-left">
              <HiOutlineTruck className="h-10 w-10 shrink-0 text-white" />
              <div>
                <h4 className="text-xl font-bold">Cobertura a Nivel Nacional</h4>
                <p className="text-sm text-primary-100">Envíos a todo México con entregas garantizadas.</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-center border-t border-primary-400/40 pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8 sm:text-left">
              <HiOutlineUserGroup className="h-10 w-10 shrink-0 text-white" />
              <div>
                <h4 className="text-xl font-bold">Más de 500 Distribuidores Autorizados</h4>
                <p className="text-sm text-primary-100">Red confiable de socios comerciales en constante crecimiento.</p>
              </div>
            </div>
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
