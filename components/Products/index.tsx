import Image from "next/image"

interface productsProps {
  productsList: _Product[]
}

export default function Products({ productsList }: productsProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productsList.map((product) => (
            <a key={product.id} href={`producto/${product.url}`} className="group relative">
              <Image
                alt={product.name}
                src={product.image}
                width={500}
                height={500}
                className="overflow-hidden [clip-path:inset(5px)] aspect-square w-full rounded-lg bg-gray-200 object-cover transition-transform duration-300 group-hover:translate-y-[-10px] xl:aspect-7/8"
              />
              <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
