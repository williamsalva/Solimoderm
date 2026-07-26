import Image from "next/image"
import Link from "next/link"

import { Product } from "types/products"

interface ProductsProps {
  productsList: Product[]
}

export default function Products({ productsList }: ProductsProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productsList.map((product) => (
            <Link key={product.id} href={`/producto/${product.slug}`} className="group relative">
              <Image
                alt={product.name}
                src={product.image}
                width={500}
                height={500}
                className="aspect-square w-full rounded-lg bg-white object-contain p-4 ring-1 ring-gray-200 transition duration-300 group-hover:-translate-y-2.5 group-hover:shadow-lg group-hover:ring-gray-300"
              />
              <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.model}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
