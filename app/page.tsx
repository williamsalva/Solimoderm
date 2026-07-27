import { Metadata } from "next"
import CallToAction from "components/Home/CallToAction"
import CardProducts from "components/Home/CardProducts"
import Hero from "components/Home/Hero"
import UsDifferent from "components/Home/UsDifferent"
import Layout from "components/Layout"
import FaqSection from "components/FaqSection"

export const metadata: Metadata = {
  metadataBase: new URL("http://solimoderm.com"),
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
      <Hero />
      <section className="my-8 mx-4 sm:my-16 sm:mx-16 rounded-[28px] sm:rounded-[50px] bg-[#F4FAFF]">
        <div className="mx-auto">
          <CardProducts />
        </div>
      </section>

      <section>
        <UsDifferent />
      </section>
      <div className="my-16 flex items-center justify-center">
        <FaqSection />
      </div>
      <section className="my-8 mx-4 sm:my-16 sm:mx-16 overflow-hidden rounded-[28px] sm:rounded-[50px]">
        <CallToAction />
      </section>
    </Layout>
  )
}
