import { Category, CategorySlug } from "types/products"

// Orden del catálogo Solimoderm 2026
const categories: Category[] = [
  {
    slug: "muebles-de-bano",
    name: "Muebles de baño",
    tagline: "Sets flotantes, de piso y metálicos con lavabo y monomando incluidos",
  },
  {
    slug: "muebles-de-cocina",
    name: "Muebles de cocina",
    tagline: "Muebles con parrilla, con tarja y dispensador de agua",
  },
  {
    slug: "tarjas",
    name: "Tarjas de cocina",
    tagline: "Tarjas de acero inoxidable con accesorios",
  },
  {
    slug: "espejos",
    name: "Espejos multifunción",
    tagline: "Espejos LED, biled, bluetooth y desempañantes",
  },
  {
    slug: "ovalines",
    name: "Ovalines y lozas",
    tagline: "Ovalines de cristal templado, resina, mármol y ónix",
  },
  {
    slug: "monomandos",
    name: "Monomandos para lavabo",
    tagline: "Monomandos altos y bajos con cartucho cerámico",
  },
  {
    slug: "desagues",
    name: "Desagües",
    tagline: "Contras de push y de moneda con céspol flexible",
  },
  {
    slug: "repisas",
    name: "Repisas multiusos",
    tagline: "Repisas esquineras y rectangulares de cristal",
  },
  {
    slug: "inodoros",
    name: "Inodoros",
    tagline: "Inodoros one piece de cerámica con asiento incluido",
  },
  {
    slug: "tanques-gas",
    name: "Tanques para gas",
    tagline: "Tanques portátiles de acero de alta resistencia",
  },
  {
    slug: "exhibidores",
    name: "Exhibidores",
    tagline: "Exhibidores de piso, de pared y giratorios para punto de venta",
  },
]

export const categoryBySlug = (slug: string): Category | undefined =>
  categories.find((category) => category.slug === slug)

export const isCategorySlug = (slug: string): slug is CategorySlug =>
  categories.some((category) => category.slug === slug)

export default categories
