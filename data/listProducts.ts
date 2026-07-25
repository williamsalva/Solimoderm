import { Product } from "types/products"

import mueblesBanoProducts from "./mueblesBanoProducts"
import mueblesCocinaProducts from "./mueblesCocinaProducts"
import tarjasProducts from "./tarjasProducts"
import espejosProducts from "./espejosProducts"
import ovalinesProducts from "./ovalinesProducts"
import monomandosProducts from "./monomandosProducts"
import desaguesProducts from "./desaguesProducts"
import repisasProducts from "./repisasProducts"
import inodorosProducts from "./inodorosProducts"
import tanquesProducts from "./tanquesProducts"
import exhibidoresProducts from "./exhibidoresProducts"

const listProducts: Product[] = [
  ...mueblesBanoProducts,
  ...mueblesCocinaProducts,
  ...tarjasProducts,
  ...espejosProducts,
  ...ovalinesProducts,
  ...monomandosProducts,
  ...desaguesProducts,
  ...repisasProducts,
  ...inodorosProducts,
  ...tanquesProducts,
  ...exhibidoresProducts,
]

export default listProducts
