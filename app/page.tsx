import { Metadata } from "next"
import Image from "next/image"
import Layout from "components/Layout"
import CardProducts from "components/Home/CardProducts"
import Hero from "components/Home/Hero"
import UsDifferent from "components/Home/UsDifferent"
import CallToAction from "components/Home/CallToAction"

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Solimoderm | Muebles y Accesorios Premium para Baño y Cocina",
  description: "Solimoderm es una empresa dedicada a la venta de muebles y accesorios premium para baño y cocina.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://solimoderm.com",
    title: "Solimoderm | Muebles y Accesorios Premium para Baño y Cocina",
    description: "Solimoderm es una empresa dedicada a la venta de muebles y accesorios premium para baño y cocina.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/img/hero.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <Layout>
      <div className="flex min-h-32 items-center justify-center p-6">
        <Hero />
      </div>
      <section style={{ backgroundColor: "#F4FAFF", margin: "50px", borderRadius: "50px" }}>
        <div className="container mx-auto">
          <CardProducts />
        </div>
      </section>

      <section>
        <UsDifferent />
      </section>
      <section style={{ backgroundColor: "#F4FAFF", margin: "50px", borderRadius: "50px" }}>
        <CallToAction />
      </section>
    </Layout>
  )
}
