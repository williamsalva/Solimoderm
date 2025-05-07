import React from "react"
import Layout from "components/Layout"
import Products from "components/Products"

import espejosProducts from "data/espejosProducts"

const EspejosPage: React.FC = () => {
  return (
    <Layout>
      <section className="container mx-auto mt-20 min-h-82 py-20">
        <h1 className="text-center text-6xl sm:text-8xl font-bold">Espejos</h1>
      </section>
      <Products productsList={espejosProducts} />
    </Layout>
  )
}

export default EspejosPage
