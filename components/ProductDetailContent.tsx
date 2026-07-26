"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

import ProductIcon, { dimensionIcon, functionLabels } from "components/icons/ProductIcons"
import { Product, ProductFinish } from "types/products"

const WHATSAPP = "5213316966041"

interface ProductDetailContentProps {
  product: Product
  relatedProducts: Product[]
}

export default function ProductDetailContent({ product, relatedProducts }: ProductDetailContentProps) {
  // El acabado cambia el modelo mostrado, no la foto: las miniaturas del
  // catálogo son muestras de color, no fotografías del producto completo.
  const [selectedFinish, setSelectedFinish] = useState<ProductFinish | null>(null)

  const currentModel = selectedFinish?.code ?? product.model

  const whatsappText = encodeURIComponent(
    `Hola, estoy interesado en el producto ${product.name} (Modelo: ${currentModel})`
  )

  return (
    <div>
      <section className="container mx-auto mt-24 min-h-[70vh] px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Imagen principal y los tres datos de la ficha del catálogo */}
          <div className="flex flex-1 flex-col justify-between">
            <div className="relative mx-auto flex aspect-square w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-4 shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                width={700}
                height={700}
                className="max-h-full object-contain"
                priority
              />
            </div>

            <div className="mx-auto mt-8 grid w-full max-w-2xl grid-cols-3 gap-4">
              {[
                { label: "Modelo", value: currentModel },
                { label: "Marca", value: product.brand },
                { label: "Caja máster", value: product.masterBox },
              ].map((badge) => (
                <div key={badge.label} className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {badge.label}
                  </span>
                  <span className="block text-base font-bold text-gray-800 sm:text-lg">{badge.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Características, medidas y acabados */}
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h1 className="text-3xl font-black leading-tight text-gray-900 sm:text-5xl">{product.title}</h1>
              {product.variant && (
                <p className="mt-1 text-2xl font-bold text-primary-500 sm:text-3xl">{product.variant}</p>
              )}
              <p className="mb-8 mt-4 text-lg leading-relaxed text-gray-600">{product.description}</p>

              {product.features && product.features.length > 0 && (
                <div className="mb-8 border-t border-gray-100 pt-8">
                  <h2 className="mb-4 text-lg font-bold text-gray-900">Características</h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50/50 p-3"
                      >
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-primary-500 shadow-sm">
                          <ProductIcon name={feature.icon} className="size-7" />
                        </div>
                        <div>
                          <span className="block text-sm font-semibold text-gray-800">{feature.text}</span>
                          {feature.code && (
                            <span className="mt-0.5 block font-mono text-xs text-gray-500">COD: {feature.code}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.functions && product.functions.length > 0 && (
                <div className="mb-8 border-t border-gray-100 pt-8">
                  <h2 className="mb-4 text-lg font-bold text-gray-900">Funciones</h2>
                  <div className="flex flex-wrap gap-3">
                    {product.functions.map((fn) => (
                      <span
                        key={fn}
                        className="flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/5 px-4 py-2 text-sm font-semibold text-primary-500"
                      >
                        <ProductIcon name={fn} className="size-5" />
                        {functionLabels[fn] ?? fn}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.dimensions && product.dimensions.length > 0 && (
                <div className="mb-8 border-t border-gray-100 pt-8">
                  <h2 className="mb-4 text-lg font-bold text-gray-900">Dimensiones</h2>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {product.dimensions.map((dimension) => (
                      <div
                        key={dimension.label}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3"
                      >
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-primary-500 shadow-sm">
                          <ProductIcon name={dimensionIcon(dimension.label)} className="size-7" />
                        </div>
                        <div>
                          <span className="block text-xs font-semibold uppercase text-gray-500">{dimension.label}</span>
                          <span className="block text-base font-bold text-gray-800">{dimension.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.finishes && product.finishes.length > 0 && (
                <div className="mb-8 border-t border-gray-100 pt-8">
                  <h2 className="mb-4 text-lg font-bold text-gray-900">Acabados disponibles</h2>
                  <div className="flex flex-wrap gap-3">
                    {product.finishes.map((finish) =>
                      finish.image ? (
                        <button
                          key={finish.code}
                          type="button"
                          onClick={() => setSelectedFinish(finish)}
                          className={`flex items-center gap-3 rounded-xl border p-2 pr-4 text-left transition-all duration-300 ${
                            selectedFinish?.code === finish.code
                              ? "border-primary-500 bg-primary-500/5 ring-2 ring-primary-500/10"
                              : "border-gray-200 bg-white hover:border-gray-300"
                          }`}
                        >
                          <span className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                            <Image
                              src={finish.image}
                              alt={finish.code}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </span>
                          <span className="text-sm font-bold text-gray-800">{finish.code}</span>
                        </button>
                      ) : (
                        <span
                          key={finish.code}
                          className="flex items-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800"
                        >
                          {finish.code}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <button className="flex w-full items-center justify-center gap-3 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-500/25 transition duration-300 hover:-translate-y-0.5 hover:bg-green-600">
                  <FaWhatsapp className="text-2xl" />
                  Preguntar por WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mt-12 border-t border-gray-200/50 bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-3xl font-black text-gray-900">Productos relacionados</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  href={`/producto/${related.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative mb-4 flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                    <Image
                      alt={related.name}
                      src={related.image}
                      width={400}
                      height={400}
                      className="max-h-[85%] object-contain p-2"
                    />
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-gray-800 line-clamp-2 transition-colors group-hover:text-primary-500">
                    {related.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
