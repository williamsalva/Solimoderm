import Layout from "components/Layout"
import ClipsSection from "components/ClipsSection"
import { getClipList } from "data/clips"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Clips Solimoderm 2026 | Demostraciones y Vídeos de Productos",
  description:
    "Descubre los mejores clips y vídeos de demostración en alta definición de nuestras tarjas, muebles de baño, espejos y grifería Solimoderm Colección 2026.",
}

export default async function ClipsPage() {
  const clips = getClipList()

  return (
    <Layout>
      <section className="container mx-auto pt-28 pb-20 px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-primary-500 mb-3">
            Vídeos & Demostraciones
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Clips <span className="text-primary-500">Solimoderm</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Explora nuestros clips de producto en acción, demostraciones de kits completos y acabados de la Colección 2026.
          </p>
        </div>

        <ClipsSection clips={clips} />
      </section>
    </Layout>
  )
}
