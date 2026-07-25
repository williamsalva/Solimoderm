import { Metadata } from "next"
import { notFound } from "next/navigation"
import React from "react"

import Layout from "components/Layout"
import ProductDetailContent from "components/ProductDetailContent"
import listProducts from "data/listProducts"

export async function generateStaticParams() {
  return listProducts.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = listProducts.find((item) => item.slug === slug)
  if (!product) return {}
  return {
    title: `${product.name} ${product.model} | Solimoderm`,
    description: product.description,
  }
}

const ProductDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const product = listProducts.find((item) => item.slug === slug)

  if (!product) {
    notFound()
  }

  // Se muestran otros productos de la misma categoría
  const relatedProducts = listProducts
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 4)

  return (
    <Layout>
      <ProductDetailContent product={product} relatedProducts={relatedProducts} />
    </Layout>
  )
}

export default ProductDetail
