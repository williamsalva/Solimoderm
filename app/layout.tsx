import "styles/tailwind.css"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${montserrat.className} text-primary-500`}>{children}</body>
    </html>

    
  )
}
