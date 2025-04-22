import React from "react"
import Layout from "components/Layout"
import Products from "components/Products"

import mueblesProducts from "data/mueblesProducts"

const BathroomFurniturePage: React.FC = () => {
  return (
    <Layout>
      <section className="container mx-auto mt-20 min-h-82 py-20">
        <h1 className="text-center text-8xl font-bold">Muebles de baño</h1>
      </section>
      <Products productsList={mueblesProducts} />
    </Layout>
  )
}

export default BathroomFurniturePage
