import React from "react"
import Layout from "components/Layout"
import { Metadata } from "next"
import Image from "next/image"

const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce más sobre nosotros.",
}

const nosotros = () => {
  return (
    <Layout>
      <section className="container mx-auto mt-20 min-h-82 py-20">
        <h1 className="text-center text-6xl font-bold text-primary-500 sm:text-8xl">Nosotros</h1>
        <div className="my-20 flex flex-col items-center justify-center p-10 md:flex-row">
          <div className="w-full md:w-1/2 sm:mr-5">
            <Image
              src="/img/solimoderm.png"
              alt="Descripción de la imagen"
              className="mb-5 w-full rounded-tr-3xl rounded-bl-3xl md:mb-0"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="mb-10 text-4xl font-bold">¿Quiénes somos?</h2>
            <p className="text-gray-600">
              Somos una empresa dedicada a la venta de muebles y accesorios premium para baño y cocina. Importamos
              directamente de fábrica para ofrecerte los mejores estilos a precios competitivos.
            </p>
            <p className="mt-5 text-gray-600">
              En Solimoderm, nos especializamos en la importación de marcas premium para baño y cocina, ofreciendo
              productos innovadores y funcionales que cumplen con los más altos estándares de calidad. Atendemos a
              profesionales del sector con soluciones que integran tecnología, ahorro de agua y energía, y diseños
              vanguardistas para proyectos residenciales, hoteleros e institucionales. Nuestra amplia disponibilidad de
              productos en México y nuestro compromiso con el servicio al cliente garantizan el éxito y posicionamiento
              de las marcas que representamos.
            </p>
          </div>
        </div>
        <div className="my-20 flex flex-col items-center justify-center">
          <div className="mb-20 w-9/12">
            <h2 className="mb-10 text-4xl font-bold">Misión</h2>
            <p className="text-gray-600">
              Nuestra misión es ofrecer a nuestros clientes productos de calidad, innovadores y funcionales, que cumplan
              con los más altos estándares de calidad y diseño. Nos esforzamos por brindar un servicio personalizado y
              de excelencia, que garantice la satisfacción de nuestros clientes y el éxito de sus proyectos.
            </p>
          </div>
          <div className="w-9/12">
            <h2 className="mb-10 text-4xl font-bold">Vision</h2>
            <p className="text-gray-600">
              Nuestra visión es ser la empresa líder en la importación y distribución de marcas premium para baño y
              cocina en México, reconocida por su calidad, innovación y servicio al cliente. Nos esforzamos por ser un
              socio estratégico para nuestros clientes, ofreciendo soluciones integrales y personalizadas que superen
              sus expectativas y contribuyan al éxito de sus proyectos.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-10">
          <h2 className="mt-14 mb-6 text-center text-6xl leading-none font-bold text-[#19456E]">Valores</h2>
          <p className="text-center text-lg text-[#19456E]">
            Los valores sobre los que se sostiene esta estrategia de crecimiento y diferenciación en el servicio son:
          </p>
          <div className="my-5 mb-12 grid grid-cols-1 gap-10 text-center md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <span className="mb-5 text-5xl">💼</span>
              <h3 className="mb-5 text-4xl font-bold text-[#19456E]">Trabajo </h3>
              <p className="text-center text-base">
                Trabajamos duro día a día para mejorar la web, el servicio de atención al cliente y la calidad de los
                productos.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <span className="mb-5 text-5xl">🤝</span>
              <h3 className="mb-5 text-4xl font-bold text-[#19456E]">Colaboración </h3>
              <p className="text-center text-base">
                Nos esforzamos y trabajamos en colaboración con nuestros proveedores para mejorar los productos finales
                tanto en calidad como en precio.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <span className="mb-5 text-5xl">🛠️</span>
              <h3 className="mb-5 text-4xl font-bold text-[#19456E]">Servicio </h3>
              <p className="text-center text-base">
                Cumplimos nuestros compromisos, los plazos de entrega y la garantía de los productos basándonos en una
                gran voluntad de servicio hacia nuestros clientes.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <span className="mb-5 text-5xl">📞</span>
              <h3 className="mb-5 text-4xl font-bold text-[#19456E]">Comunicación</h3>
              <p className="text-center text-base">
                Mantenemos al cliente siempre informado del estado de su pedido y ofreciéndole toda la ayuda y apoyo pre
                y post venta.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <span className="mb-5 text-5xl">🔄</span>
              <h3 className="mb-5 text-4xl font-bold text-[#19456E]">Mejora Continua </h3>
              <p className="text-center text-base">
                Nunca abandonamos nuestro afán de crecer, de mejorar y de buscar fabricantes y productos exclusivos para
                nuestros clientes, eso nos hace diferentes.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <span className="text-6xl">💡</span>
              <h3 className="mb-5 text-4xl font-bold text-[#19456E]">Innovación</h3>
              <p className="text-center text-base">
                Buscamos siempre productos innovadores y de calidad que nos permitan ofrecer a nuestros clientes
                soluciones únicas y exclusivas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default nosotros
