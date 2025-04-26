"use client"

import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import Image from "next/image"

const links = [
  { href: "/", label: "Inicio" },
  {
    href: "#",
    label: "Productos",
    subLinks: [
      { href: "/tarjas", label: "Tarjas" },
      { href: "/muebles-de-bano", label: "Muebles de baño" },
      { href: "/espejos", label: "Espejos" },
      { href: "/repisas", label: "Repisas" },
      { href: "/ovalines", label: "Ovalines" },
    
    ],
  },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/distribuidores", label: "Distribuidores" },
  { href: "/contacto", label: "Contacto" },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isMobile = useMediaQuery({ maxWidth: 1023 })
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [headerColor, setHeaderColor] = useState("bg-white transition-colors duration-500")
  const [textColor, setTextColor] = useState("text-primary-500 transition-colors duration-500")
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900 && isDesktop || isMobile && window.scrollY > 200) {
        setHeaderColor("bg-primary-500 transition-colors duration-500")
        setTextColor("text-white hover:text-primary-500 transition-colors duration-500")
        setIsScrolling(true)
      } else {
        setHeaderColor("bg-white transition-colors duration-500")
        setTextColor("text-primary-500 transition-colors duration-500")
        setIsScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`${headerColor} fixed top-0 left-0 z-50 w-full p-4`}>
      <div className="container mx-auto flex items-center justify-between">
        {!isScrolling ? (
          <Image src="/img/solimoderm.png" alt="Logo" width={150} height={100} />
        ) : (
          <Image src="/img/logo-white.png" alt="Logo" width={100} height={50} />
        )}

        {isDesktop ? (
          <nav className="flex space-x-4">
            {links.map((link) => (
              <div key={link.label} className="relative">
                <a
                  href={link.href}
                  className={`block flex items-center rounded px-4 py-2 ${textColor} hover:bg-gray-300`}
                  onClick={(e) => {
                    if (link.subLinks) {
                      e.preventDefault()
                      setIsSubMenuOpen(!isSubMenuOpen)
                    }
                  }}
                >
                  {link.label}
                  {link.subLinks && (
                    <svg
                      className={`ml-2 h-4 w-4 transition-transform ${isSubMenuOpen ? "rotate-180" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {link.subLinks && isSubMenuOpen && (
                  <ul className="bg-primary-500 absolute mt-2 space-y-2 rounded shadow-lg">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.label}>
                        <a
                          href={subLink.href}
                          className="hover:text-primary-500 block rounded px-4 py-2 text-white hover:bg-gray-300"
                        >
                          {subLink.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        ) : (
          <>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none lg:hidden">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isOpen ? "100vh" : 0 }}
              className="bg-primary-500 fixed top-0 left-0 z-50 w-full overflow-hidden duration-300 ease-in-out"
            >
              <Image src="/img/logo-white.png" alt="Logo" width={100} height={50} className="m-4" />
              <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <ul className="flex h-full flex-col items-start justify-center space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.subLinks) {
                          e.preventDefault()
                          setIsSubMenuOpen(!isSubMenuOpen)
                        }
                      }}
                      className="flex items-center rounded px-4 py-2 text-3xl text-white hover:bg-gray-700"
                    >
                      {link.label}
                      {link.subLinks && (
                        <svg
                          className={`ml-2 h-4 w-4 transition-transform ${isSubMenuOpen ? "rotate-180" : ""}`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </a>
                    {link.subLinks && isSubMenuOpen && (
                      <ul className="mt-2 space-y-2 bg-gray-800 p-4">
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.label}>
                            <a
                              href={subLink.href}
                              className="block rounded px-4 py-2 text-3xl text-white hover:bg-gray-700"
                            >
                              {subLink.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </div>
    </header>
  )
}

export default NavBar
// ;("use client")

// import { motion } from "framer-motion"
// import { useMediaQuery } from "react-responsive"
// import React, { useState } from "react"
// import Image from "next/image"

// const links = [
//   { href: "#", label: "Inicio" },
//   {
//     href: "#",
//     label: "Productos",
//     subLinks: [
//       { href: "#", label: "Tarjas" },
//       { href: "#", label: "Muebles de baño" },
//       { href: "#", label: "Espejos" },
//       { href: "#", label: "Repisas" },
//     ],
//   },
//   { href: "#", label: "Nosotros" },
//   { href: "#", label: "Distribuidores" },
//   { href: "#", label: "Contacto" },
// ]

// const NavBar = () => {
//   const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

//   return (
//     <header className="bg-gray-800">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
//         <div className="text-white">
//           {" "}
//           <Image src="/img/logo-white.png" alt="Logo" width={100} height={50} />
//         </div>
//         <nav className="hidden space-x-4 md:flex">
//           {links.map((link) => (
//             <div key={link.label} className="relative">
//               <a
//                 href={link.href}
//                 className="block flex items-center rounded px-4 py-2 text-white hover:bg-gray-700"
//                 onClick={(e) => {
//                   if (link.subLinks) {
//                     e.preventDefault()
//                     setIsSubMenuOpen(!isSubMenuOpen)
//                   }
//                 }}
//               >
//                 {link.label}
//                 {link.subLinks && (
//                   <svg
//                     className={`ml-2 h-4 w-4 transition-transform ${isSubMenuOpen ? "rotate-180" : ""}`}
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 )}
//               </a>
//               {link.subLinks && isSubMenuOpen && (
//                 <ul className="absolute mt-2 space-y-2 rounded bg-gray-800 shadow-lg">
//                   {link.subLinks.map((subLink) => (
//                     <li key={subLink.label}>
//                       <a href={subLink.href} className="block rounded px-4 py-2 text-white hover:bg-gray-700">
//                         {subLink.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </nav>
//         <button className="md:hidden">
//           <svg
//             className="h-6 w-6 text-white"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </button>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="absolute top-16 left-0 w-full bg-gray-800 md:hidden"
//         >
//           <ul className="flex h-full flex-col items-center justify-center space-y-4">
//             {links.map((link) => (
//               <li key={link.label}>
//                 <a
//                   href={link.href}
//                   className="block flex items-center rounded px-4 py-2 text-white hover:bg-gray-700"
//                   onClick={(e) => {
//                     if (link.subLinks) {
//                       e.preventDefault()
//                       setIsSubMenuOpen(!isSubMenuOpen)
//                     }
//                   }}
//                 >
//                   {link.label}
//                   {link.subLinks && (
//                     <svg
//                       className={`ml-2 h-4 w-4 transition-transform ${isSubMenuOpen ? "rotate-180" : ""}`}
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   )}
//                 </a>
//                 {link.subLinks && isSubMenuOpen && (
//                   <ul className="mt-2 space-y-2">
//                     {link.subLinks.map((subLink) => (
//                       <li key={subLink.label}>
//                         <a href={subLink.href} className="block rounded px-4 py-2 text-white hover:bg-gray-700">
//                           {subLink.label}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </header>
//   )
// }

// export default NavBar
