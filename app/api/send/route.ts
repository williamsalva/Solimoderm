import { Resend } from "resend"

import { EmailTemplate } from "../../../components/templates/emailTemplate.jsx"

const resend = new Resend("re_bUq5zZxA_Ah7naywCXbCmNTSDHcYqkf1t")

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name: string
      email: string
      phone: string
      city: string
      message: string
    }
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
      return new Response(JSON.stringify({ error }), { status: 500 })
    }

    return new Response(
      JSON.stringify({
        data,
        message: "Mensaje enviado correctamente",
        status: 201,
      })
    )
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error)
    return Response.json({ error })
  }
}
