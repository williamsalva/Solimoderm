import Image from "next/image"
import Link from "next/link"
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary-500 py-10 text-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-around">
            <div className="sm:mr-5 sm:w-full md:w-1/3 lg:w-1/4">
                <div className="relative -top-10 sm:left-0 rounded-b-xl bg-white p-3 pt-5 flex justify-center">
                <Link href="/">
                  <Image alt="Solimoderm" src="/img/solimoderm.png" width={250} height={150} />
                </Link>
                </div>
              <div className="ml-5 sm:ml-0 mt-5 mb-5">
                <p className="text-md mb-2">
                  Solimoderm es una empresa dedicada a la importación y distribución de productos de baño y cocina. Nos
                  especializamos en ofrecer tarjas, espejos LED y muebles de baño con diseños premium y calidad
                  inigualable.
                </p>
              </div>
            </div>
            <div className="xs:w-1/2 md:w-1/2 lg:w-2/5">
              <div className="mt-20 flex">
                <div className="lg:w-1/4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/">Inicio</Link>
                    </li>
                    <li>
                      <a href="/nosotros">Nosotros</a>
                    </li>
                    <li>
                      <a href="/distribuidores">Distribuidores</a>
                    </li>
                    <li>
                        <a href="/contacto">Contáctanos</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="xs:w-1/2 text-right md:w-1/3 lg:w-1/6">
              <div className="mt-20 inline-block text-left">
                <p className="text-2xl">Nuestras redes</p>
                <div className="mt-5 flex space-x-4">
                  <a className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600" href="https://www.facebook.com/solimoderm2020/?locale=es_LA">
                  <FaFacebookF className="text-xl"  />
                  </a>
                  <a className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600" href="https://www.instagram.com/solimoderm/">
                    
                    <IoLogoInstagram className="text-xl" />
                  </a>
                  <a className="flex h-10 w-10 items-center justify-center rounded-full bg-black" href="https://www.tiktok.com/@solimoderm1">
                    
                    <FaTiktok className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="text-center">
              <p className="text-md text-gray-400 hover:text-gray-200">
                Copyright © Solimoderm {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
