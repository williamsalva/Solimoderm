import React from "react"
import { HiOutlineArrowDownTray, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2"
import Layout from "components/Layout"

export const metadata = {
  title: "Catálogo 2026 | Solimoderm",
  description: "Explora nuestro catálogo completo de productos 2026: tarjas, espejos LED, muebles de baño y acabados de alta calidad.",
}

const CatalogoPage = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-slate-50 pt-40 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="mt-8 text-center text-5xl font-bold text-primary-500 sm:text-8xl">
              Catálogo 2026
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 sm:text-xl">
              Explora nuestra línea completa de productos, tarjas, espejos LED y muebles de baño.
            </p>

            {/* Acciones */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/catalogo-2026.pdf"
                download="Solimoderm_Catalogo_2026.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-7 py-3.5 font-semibold text-white shadow-md transition duration-200 hover:bg-primary-600 hover:shadow-lg"
              >
                <HiOutlineArrowDownTray className="h-5 w-5" />
                Descargar Catálogo (PDF)
              </a>

              <a
                href="/catalogo-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-xs transition duration-200 hover:bg-slate-100 hover:text-slate-900"
              >
                <HiOutlineArrowTopRightOnSquare className="h-5 w-5" />
                Abrir en pantalla completa
              </a>
            </div>
          </div>

          {/* Visualizador de PDF */}
          <div className="mt-14 mb-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <iframe
              src="/catalogo-2026.pdf#toolbar=1&navpanes=0&scrollbar=1"
              title="Catálogo Solimoderm 2026"
              className="h-[90vh] w-full min-h-[850px] sm:min-h-[1000px] border-0"
            >
              <div className="p-10 text-center">
                <p className="text-lg text-slate-700">
                  Tu navegador no soporta la visualización directa de archivos PDF.
                </p>
                <a
                  href="/catalogo-2026.pdf"
                  download="Solimoderm_Catalogo_2026.pdf"
                  className="mt-4 inline-block rounded-lg bg-primary-500 px-6 py-3 text-white"
                >
                  Haz clic aquí para descargar el catálogo PDF
                </a>
              </div>
            </iframe>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CatalogoPage
