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
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header de la sección */}
      <div className="text-center">
        <h2 className="mt-8 text-center text-4xl font-bold text-primary-500 sm:text-7xl">
          ¿Por qué somos diferentes?
        </h2>
      </div>

      {/* Grid de tarjetas planas con emojis y sin degradados */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((column, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
          >
            <div className="text-4xl sm:text-5xl">{column.icon}</div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              {column.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              {column.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UsDifferent


