"use client"
import React, { useState } from 'react';


const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-24 pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-center text-5xl sm:text-6xl font-bold">
            Preguntas frecuentes
          </h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 ${
                activeIndex === index ? 'bg-gray-100 border-gray-600' : ''
              } mb-8 lg:p-4`}
            >
              <button
  className="accordion-toggle group flex items-center justify-between text-left text-lg font-normal leading-8 w-full transition duration-500 hover:text-gray-600"
  aria-controls={`faq-content-${index}`}
  onClick={() => toggleAccordion(index)}
  aria-expanded={activeIndex === index}
>
  <h5 className="text-2xl font-bold flex-1">{item.question}</h5>
  <div className="flex-shrink-0 w-6 h-6">
    <svg
      className={`text-gray-900 transition duration-500 ${
        activeIndex === index ? 'hidden' : 'block'
      } group-hover:text-gray-600`}
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12H18M12 18V6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
    <svg
      className={`text-gray-900 transition duration-500 ${
        activeIndex === index ? 'block' : 'hidden'
      } group-hover:text-gray-600`}
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12H18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </div>
</button>
              <div
                id={`faq-content-${index}`}
                className="accordion-content w-full overflow-hidden pr-4 transition-all duration-500"
                aria-labelledby={`faq-heading-${index}`}
                style={{
                  maxHeight: activeIndex === index ? '200px' : '0px',
                }}
              >
                <p className="text-base mt-5 text-gray-600 font-normal leading-6">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqItems = [
  {
    question: '¿Qué se necesita para comprar al mayoreo o ser distribuidor?',
    answer:
      'Solo necesitas ponerte en contacto con nosotros a través del formulario de contacto o WhatsApp. Te daremos toda la información sobre requisitos, beneficios y descuentos especiales.',
  },
  {
    question: '¿El envío es gratis?',
    answer:
      'Sí, el envío es gratuito en compras mayores a cierto monto. Consulta nuestras políticas de envío para más detalles.',
  },
  {
    question: '¿Dónde puedo distribuir sus productos?',
    answer:
      'Puedes distribuir en cualquier parte de México. Te apoyamos con material promocional y asesoría comercial.',
  },
  {
    question: '¿Cuál es el monto mínimo de compra?',
    answer:
      'El monto mínimo varía según el tipo de compra (menudeo o mayoreo). Contáctanos para darte el detalle según tu caso.',
  },
  {
    question: '¿Puedo comprar si solo quiero productos para uso personal?',
    answer:
      'Sí, también vendemos al menudeo. Puedes comprar directamente en nuestra tienda en línea sin necesidad de ser distribuidor.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer:
      'Aceptamos pagos con tarjeta de crédito, débito, transferencias bancarias y algunos métodos digitales como PayPal o Mercado Pago.',
  },
];

export default FaqSection;