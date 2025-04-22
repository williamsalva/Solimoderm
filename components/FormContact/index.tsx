"use client"
import React, { createContext } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.number().required("Required"),
  city: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
})

const MyForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <Field
                className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-200 p-3 text-gray-900 focus:outline-none"
                type="text"
                name="firstName"
                placeholder="Nombre*"
              />
              <ErrorMessage name="firstName" component="div" className="text-sm text-red-500" />
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
