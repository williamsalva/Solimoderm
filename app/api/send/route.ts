import { Resend } from "resend"

import { EmailTemplate } from "../../../components/templates/emailTemplate.jsx"

const resend = new Resend("re_bUq5zZxA_Ah7naywCXbCmNTSDHcYqkf1t")

export async function POST(req, res) {
  try {
    const body = await req.json()
    const { name, email, phone, city, message } = body
    console.log("🚀 ~ POST ~ email, name :", email, name)

    const { data, error } = await resend.emails.send({
      from: "hola@solimoderm.com",
      to: "solimodermcontacto@gmail.com",
      subject: "¡Tienes un nuevo mensaje en tu pagina Solimoderm.com!",
      react: EmailTemplate({ name, email, phone, city, message }),
    })
    console.log("🚀 ~ POST ~ data:", data)

    if (error) {
      return Response.json({ error })
    }

    return Response.json({
      data,
      message: "Mensaje enviado correctamente",
      status: 201,
    })
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error)
    return Response.json({ error })
  }
}
