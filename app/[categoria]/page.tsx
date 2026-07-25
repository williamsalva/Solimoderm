import { Metadata } from "next"
import { notFound } from "next/navigation"
import React from "react"

import Layout from "components/Layout"
import Products from "components/Products"
import categories, { categoryBySlug } from "data/categories"
import listProducts from "data/listProducts"

export async function generateStaticParams() {
  return categories.map((category) => ({ categoria: category.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>
}): Promise<Metadata> {
  const { categoria } = await params
  const category = categoryBySlug(categoria)
  if (!category) return {}
  return { title: `${category.name} | Solimoderm`, description: category.tagline }
}

const CategoryPage = async ({ params }: { params: Promise<{ categoria: string }> }) => {
  const { categoria } = await params
  const category = categoryBySlug(categoria)

  if (!category) {
    notFound()
  }

  const products = listProducts.filter((product) => product.category === category.slug)

  return (
    <Layout>
      <section className="container mx-auto mt-20 min-h-82 py-20">
        <h1 className="text-center text-6xl font-bold sm:text-8xl">{category.name}</h1>
        <p className="mt-6 text-center text-lg text-gray-500">{category.tagline}</p>
      </section>
      <Products productsList={products} />
    </Layout>
  )
}

export default CategoryPage
