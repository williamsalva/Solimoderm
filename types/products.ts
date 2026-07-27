export type CategorySlug =
  | "muebles-de-bano"
  | "muebles-de-cocina"
  | "tarjas"
  | "espejos"
  | "ovalines"
  | "monomandos"
  | "desagues"
  | "repisas"
  | "inodoros"
  | "tanques-gas"
  | "exhibidores"

/** Funciones de los espejos multifunción; el catálogo sólo lista las activas. */
export type ProductFunction = "led" | "touch" | "dimeable" | "bluetooth" | "desempanante" | "reloj"

export interface ProductFeature {
  text: string
  /** Código de la pieza en el catálogo, p. ej. "SF-11852". */
  code?: string
  /** Clave del icono en components/icons/ProductIcons. */
  icon: string
}

export interface ProductFinish {
  code: string
  /** Miniatura del acabado; algunos del catálogo no la traen. */
  image?: string
}

export interface ProductDimension {
  /** Alto, Ancho, Profundo, Largo, Diámetro… según el producto. */
  label: string
  value: string
}

export interface Product {
  id: number
  slug: string
  /** Nombre completo para listados: título + variante. */
  name: string
  /** Título sin la variante, como en la ficha del catálogo. */
  title: string
  /** "De piso", "Flotante", "Biled"… */
  variant?: string
  category: CategorySlug
  image: string
  /** Dibujo técnico acotado, como el que el catálogo pone bajo la ficha. */
  blueprint?: string
  description: string
  model: string
  brand: string
  masterBox: string
  dimensions?: ProductDimension[]
  features?: ProductFeature[]
  functions?: ProductFunction[]
  finishes?: ProductFinish[]
}

export interface Category {
  slug: CategorySlug
  /** Título de la página de categoría. */
  name: string
  /** Texto corto para la portada y las tarjetas. */
  tagline: string
  /** Las destacadas ocupan una fila completa en la portada. */
  featured?: boolean
}
