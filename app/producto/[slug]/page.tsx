
import Image from "next/image"
import React from "react"

import { FaWhatsapp } from "react-icons/fa"
import Layout from "../../../components/Layout"
import listProducts from "../../../data/listProducts"

interface Product {
  id: number
  name: string
  image: string
  description: string
  url: string
}

export async function generateStaticParams() {
  const paths = listProducts.map((product) => ({
    params: { slug: product.url },
  }))

  return paths
}

const ProductDetail = async ({ params }: { params: Promise<{ slug: string }>}) => {
  const { slug } =  await params
  console.log(listProducts)
  console.log(slug)
  const product = listProducts.find((product) => product.url === slug)

  // Filtrar productos relacionados aleatoriamente
  const relatedProducts = listProducts
    .filter((p) => p.url !== slug) // Excluir el producto actual
    .sort(() => 0.5 - Math.random()) // Ordenar aleatoriamente
    .slice(0, 4) // Seleccionar los primeros 8 productos

  if (!product) {
    return (
      <Layout>
        <div>
          <h1>Producto no encontrado</h1>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <section className="container mx-auto mt-20 min-h-82 py-20">
        <div className="flex flex-row p-5">
          <div className="flex-1 overflow-hidden [clip-path:inset(10px)]">
            <Image
              className="rounded-lg"
              src={product.image}
              alt={product.name}
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-20 ml-10 flex-1 pl-5">
            <h1 className="mb-4 text-6xl font-bold">{product.name}</h1>
            <p className="mb-4">{product.description}</p>
            <a
              href={`https://wa.me/5213317943279?text=Estoy%20interesado%20en%20el%20producto%20${product.name}%20${product.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 flex w-full max-w-xs transform items-center justify-center rounded-full bg-green-500 px-4 py-2 font-medium text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-green-600 sm:max-w-md sm:px-10 sm:py-3">
                <FaWhatsapp className="mr-2 text-xl" />
                Comprar en WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="m-15 rounded-3xl bg-gray-100 p-10">
        <div className="container mx-auto my-20 flex flex-col justify-center">
          <h3 className="mt-4 mb-20 text-center text-6xl font-bold sm:text-6xl">Productos Relacionados</h3>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((product) => (
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
      </section>
    </Layout>
  )
}

export default ProductDetail
