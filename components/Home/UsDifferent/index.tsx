import React from "react"

const UsDifferent: React.FC = () => {
  const columns = [
    {
      icon: "🌎",
      title: "Importación Directa, Mejores Precios",
      description:
        "Traemos nuestros productos directo de fábrica, asegurando precios competitivos y mayor rentabilidad para distribuidores.",
    },
    {
      icon: "🏆",
      title: "Diseño Moderno y Calidad Superior",
      description:
        "Ofrecemos tarjas, espejos LED y muebles de baño con materiales premium y diseños elegantes que marcan tendencia.",
    },
    {
      icon: "🤝",
      title: "Oportunidad para Distribuidores",
      description:
        "Accede a precios preferenciales, un catálogo exclusivo y el respaldo de un proveedor confiable para hacer crecer tu negocio.",
    },
    {
      icon: "🚚",
      title: "Envíos a Todo México",
      description:
        "Realizamos envíos a todo México, asegurando que nuestros productos lleguen a tiempo y en perfectas condiciones a tu negocio.",
    },
  ]

  return (
    <section className="rounded-3xl p-10">
      <h3 className="mt-20 text-center text-4xl font-bold sm:text-7xl">¿Por qué somos diferentes?</h3>
      <div className="flex flex-wrap justify-center gap-8 p-4 sm:justify-around sm:p-10">
      {columns.map((column, index) => (
        <div
        key={index}
        className="text-center w-full sm:w-1/3 sm:mx-4"
        >
        <div className="text-5xl sm:text-6xl">{column.icon}</div>
        <h3 className="mb-2 text-xl font-bold sm:text-2xl">{column.title}</h3>
        <p className="text-base text-gray-500 sm:text-lg">{column.description}</p>
        </div>
      ))}
      </div>
    </section>
  )
}

export default UsDifferent
