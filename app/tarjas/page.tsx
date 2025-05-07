import React from "react"
import Layout from "components/Layout"
import Products from "components/Products"

import tarjasProducts from "data/tarjasProducts"

const KitchenSinksPage: React.FC = () => {
  return (
    <Layout>
      <section className="container mx-auto mt-20 min-h-82 py-20">
        <h1 className="text-center text-6xl sm:text-8xl font-bold">Tarjas</h1>
      </section>
      <Products productsList={tarjasProducts} />
    </Layout>
  )
}

export default KitchenSinksPage
