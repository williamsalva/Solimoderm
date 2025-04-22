import React from "react"
import Footer from "../Footer"
import NavBar from "../NavBar"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
