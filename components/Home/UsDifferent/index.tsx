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
      <h3 className="mt-20 text-center text-7xl font-bold">¿Por qué somos diferentes?</h3>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "4rem" }}>
        {columns.map((column, index) => (
          <div key={index} style={{ textAlign: "center", width: "30%", margin: "1rem" }}>
            <div style={{ fontSize: "3em" }}>{column.icon}</div>
            <h3 className="mb-2 text-2xl font-bold">{column.title}</h3>
            <p className="text-lg text-gray-500">{column.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UsDifferent
