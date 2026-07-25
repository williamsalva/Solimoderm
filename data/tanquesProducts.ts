import { Product } from "types/products"

// Generado del catalogo Solimoderm 2026 (Tanques para gas)
const tanquesProducts: Product[] = [
  {
    id: 10001,
    slug: "tanque-portatil-para-gas-cil-lp9",
    name: "Tanque portátil para gas",
    title: "Tanque portátil",
    category: "tanques-gas",
    image: "/img/tanques-gas/tanque-portatil-para-gas-cil-lp9.webp",
    description: "Tanque portátil para gas modelo CIL-LP9 de Solimoderm. Incluye fabricado en acero de alta resistencia, recubrimiento en pintura electroestática y capacidad de 10 kg.",
    model: "CIL-LP9",
    brand: "SOLIMODERM",
    masterBox: "1 PIEZA",
    variant: "Para gas",
    features: [
      {
        text: "Fabricado en acero de alta resistencia",
        icon: "acero",
      },
      {
        text: "Recubrimiento en pintura electroestática",
        icon: "pintura",
      },
      {
        text: "Capacidad de 10 kg",
        icon: "capacidad",
      },
      {
        text: "Producto altamente flamable",
        icon: "flamable",
      },
      {
        text: "Cumple con Norma Oficial Mexicana",
        icon: "norma",
      },
      {
        text: "Producto a presión",
        icon: "presion",
      },
    ],
  },
]

export default tanquesProducts
