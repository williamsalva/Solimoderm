"use client"
import React, { createContext } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(50, "Debe tener 50 caracteres o menos")
    .required("El nombre es obligatorio"),
  email: Yup.string()
    .email("Correo electrónico no válido")
    .required("El correo electrónico es obligatorio"),
  phone: Yup.string()
    .matches(/^\d+$/, "El número de teléfono debe ser numérico")
    .min(10, "Debe tener al menos 10 dígitos")
    .max(15, "Debe tener 15 dígitos o menos")
    .required("El número de teléfono es obligatorio"),
  city: Yup.string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(100, "Debe tener 100 caracteres o menos")
    .required("La ciudad es obligatoria"),
  message: Yup.string()
    .min(10, "Debe tener al menos 10 caracteres")
    .max(500, "Debe tener 500 caracteres o menos")
    .required("El mensaje es obligatorio"),
})

const MyForm = () => {


  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const [success, setSuccess] = React.useState(false)


  const handleSuccess = () => {
    setLoading(false)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  }


  const initialValues = {
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  };

  const handleSumit = async (
    values: { name: string; email: string; phone: string; city: string; message: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setSubmitting(false)
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Especifica el tipo de contenido del cuerpo de la solicitud
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          city: values.city,
          message: values.message,
        }),
         
        
      });
      const data = await response.json();
      console.log("🚀 ~ submitHandler ~ data:", data);
      handleSuccess();
    } catch (error) {
      console.log("🚀 ~ submitHandler ~ error:", error);
      setLoading(false);
      setError("Ocurrió un error al enviar el mensaje, intenta de nuevo");
    }
    setSubmitting(false);
  };


  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center">
        <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-300 fill-primary-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
          <p className="mt-2 text-2xl font-bold">Enviando mensaje...</p>
        </div>
      </div>
    )
  }
  if (success) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-32 w-32 text-green-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path d="M9 12l2 2 4-4" />
            </svg>
          <p className="mt-2 text-2xl font-bold">Mensaje enviado correctamente</p>
        </div>
      </div>
    )
  }


  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={handleSumit}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2 className="mb-5 text-5xl sm:text-6xl font-bold">Contáctanos</h2>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <Field
                className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-200 p-3 text-gray-900 focus:outline-none"
                type="text"
                name="name"
                placeholder="Nombre*"
              />
              <ErrorMessage name="name" component="div" className="text-sm text-red-500" />
            </div>
            <div>
              <Field
                className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-200 p-3 text-gray-900 focus:outline-none"
                type="email"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage name="email" component="div" className="text-sm text-red-500" />
            </div>
            <div>
              <Field
                className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-200 p-3 text-gray-900 focus:outline-none"
                type="number"
                name="phone"
                placeholder="WhatsApp*"
              />
              <ErrorMessage name="phone" component="div" className="text-sm text-red-500" />
            </div>
            <div>
              <Field
                className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-200 p-3 text-gray-900 focus:outline-none"
                type="text"
                name="city"
                placeholder="Ciudad*"
              />
              <ErrorMessage name="city" component="div" className="text-sm text-red-500" />
            </div>
          </div>
          <div className="my-4">
            <Field
              as="textarea"
              name="message"
              placeholder="Mensaje*"
              className="focus:shadow-outline mt-2 h-32 w-full rounded-lg bg-gray-200 p-3 text-gray-900 focus:outline-none"
            />
            <ErrorMessage name="message" component="div" className="text-sm text-red-500" />
          </div>
          <div className="my-2 w-full">
            <button
              type="submit"
              className="focus:shadow-outline bg-primary-500 hover:bg-primary-600 w-full rounded-lg p-3 text-xl font-bold tracking-wide text-gray-100 shadow-lg transition duration-300 ease-in-out hover:scale-105 focus:outline-none"
              disabled={isSubmitting}
            >
              🚀 Enviar mensaje
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default MyForm
