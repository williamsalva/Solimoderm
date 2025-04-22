import React from "react"
import Layout from "components/Layout"
import Products from "components/Products"

import ovalinesProducts from "data/ovalinesProducts"

const OvalinesPage: React.FC = () => {
  return (
    <Layout>
      <section className="container mx-auto mt-20 min-h-82 py-20">
        <h1 className="text-center text-8xl font-bold">Ovalines</h1>
      </section>
      <Products productsList={ovalinesProducts} />
    </Layout>
  )
}

export default OvalinesPage
