import React from "react"

/**
 * Iconos de línea al estilo del catálogo Solimoderm 2026.
 *
 * Las claves son las que traen `ProductFeature.icon` y `ProductFunction`
 * en los archivos de data/. Heredan el color con `currentColor`.
 */

type IconProps = React.SVGProps<SVGSVGElement>

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

const Svg = ({ children, ...props }: IconProps) => (
  <svg {...base} aria-hidden="true" {...props}>
    {children}
  </svg>
)

/** Cubo isométrico de las medidas, igual que en el catálogo impreso. */
const Cubo = () => (
  <>
    <path d="M11 3.2 17.2 6.8v7.4L11 17.8 4.8 14.2V6.8L11 3.2Z" />
    <path d="M4.8 6.8 11 10.5l6.2-3.7M11 10.5v7.3" />
  </>
)

const paths: Record<string, React.ReactNode> = {
  // --- materiales y cuerpos ---
  mdf: (
    <>
      <path d="M12 3 3 7l9 4 9-4-9-4Z" />
      <path d="M3 12l9 4 9-4M3 17l9 4 9-4" />
    </>
  ),
  herreria: (
    <>
      <path d="M4 4v16M20 4v16M4 9h16M4 15h16" />
    </>
  ),
  acero: (
    <>
      <path d="M4 6h16v4a8 8 0 0 1-16 0V6Z" />
      <path d="M9 3v3M15 3v3" />
    </>
  ),
  cristal: (
    <>
      <path d="M4 5h16v11H4z" />
      <path d="m7 8 4 5M13 8l4 5" />
    </>
  ),
  ceramica: (
    <>
      <path d="M5 9h14l-1.5 9a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 9Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </>
  ),
  cuerpo: (
    <>
      <path d="M8 3h8l-1 5 2 3v10H7V11l2-3-1-5Z" />
    </>
  ),
  marco: (
    <>
      <path d="M4 3h16v18H4z" />
      <path d="M7 6h10v12H7z" />
    </>
  ),

  // --- piezas de baño ---
  lavabo: (
    <>
      <ellipse cx="12" cy="8.6" rx="8" ry="3" />
      <path d="M4 8.6c0 4.5 3.6 8.2 8 8.2s8-3.7 8-8.2" />
      <ellipse cx="12" cy="10.4" rx="1.4" ry="0.7" />
    </>
  ),
  loza: (
    <>
      <ellipse cx="12" cy="10" rx="9" ry="3.5" />
      <path d="M3 10v1a9 3.5 0 0 0 18 0v-1" />
      <path d="M6 15.5 7 20h10l1-4.5" />
    </>
  ),
  monomando: (
    <>
      <path d="M8.8 20.8h6.4" />
      <path d="M10.8 20.8V10.4h2.4v10.4" />
      <path d="M13.2 11.6h2.2a2.4 2.4 0 0 1 2.4 2.4v1.8" />
      <path d="m10.8 11.4-2.4-1.6" />
      <circle cx="7.4" cy="9.2" r="1" />
    </>
  ),
  mezcladora: (
    <>
      <path d="M12 21V10" />
      <path d="M6 10h12a6 6 0 0 0-12 0Z" />
      <path d="M8 21h8M12 10V4" />
    </>
  ),
  // Vectorizado del icono original del catálogo (Canva), por eso va relleno
  // en vez de trazado como el resto. Sigue heredando el color.
  cespol: (
    <g fill="currentColor" fillRule="evenodd" stroke="none">
      <path d="M8.8 22.8C8.6 22.6 8.4 22.6 7.9 22.7C7.2 22.7 7.2 22.7 6.9 22.3C6.7 21.9 6.6 21.8 6.3 21.8C5.5 21.8 5.3 21.6 5.3 20.8C5.3 20.2 5.3 20.2 4.9 20.0C4.3 19.8 4.2 19.4 4.5 18.8C4.7 18.5 4.7 18.4 4.5 18.3C3.8 18.1 3.7 17.4 4.2 16.8L4.5 16.5L4.2 16.2C3.9 16.0 3.9 15.8 3.9 15.4C4.0 15.1 4.0 14.9 3.8 14.6C3.5 14.1 3.5 12.7 3.9 12.4L4.3 12.2L4.3 9.6C4.3 7.2 4.3 7.1 4.0 6.9C3.8 6.8 3.7 6.6 3.7 6.3C3.7 6.0 3.6 5.7 3.5 5.5C3.3 5.2 3.3 5.2 3.7 4.8C4.2 4.3 4.1 3.3 3.5 3.1C2.8 3.0 2.7 2.8 3.0 2.5C3.1 2.4 3.2 2.1 3.2 2.0C3.3 1.7 3.4 1.6 3.9 1.5C4.2 1.4 4.7 1.2 4.9 1.1C5.5 0.8 6.5 0.8 7.1 1.2C7.4 1.3 7.7 1.4 7.9 1.4C8.3 1.4 8.7 1.7 8.7 2.0C8.7 2.2 8.8 2.4 8.9 2.5C9.1 2.7 8.8 2.9 8.3 3.1C7.7 3.3 7.5 4.5 8.1 4.7C8.4 4.8 8.5 5.4 8.3 5.6C8.2 5.7 8.2 6.0 8.2 6.3C8.2 6.6 8.1 6.8 7.9 6.9C7.6 7.1 7.6 7.2 7.6 9.6L7.6 12.2L8.0 12.4C8.4 12.7 8.4 14.1 8.1 14.6C7.8 15.0 7.8 15.4 8.2 15.8C8.4 16.1 8.4 16.2 8.3 16.5C8.2 16.8 8.2 16.9 8.3 17.0C8.4 17.2 8.6 17.5 8.6 17.8C8.9 18.8 9.7 18.8 9.7 17.9C9.8 17.5 9.9 17.3 10.1 17.2C10.4 17.1 10.4 17.0 10.4 16.6C10.3 16.0 10.5 15.7 11.2 15.7C11.5 15.7 11.5 15.7 11.5 15.2C11.5 14.8 11.5 14.6 11.6 14.5C11.8 14.4 12.0 14.4 12.7 14.6C12.9 14.7 13.0 14.7 13.0 14.3C13.0 13.4 13.3 13.3 14.1 13.7C14.5 13.9 14.5 13.9 14.7 13.4C14.8 13.1 14.9 13.0 15.1 13.0C15.5 12.9 15.8 12.6 15.8 12.2C15.8 12.0 15.9 11.8 16.1 11.6C16.4 11.4 16.4 11.4 16.5 9.9L16.5 8.4L16.9 8.2C17.6 7.9 20.1 8.0 20.6 8.3C21.0 8.6 21.2 10.9 20.9 11.8C20.7 12.1 20.7 12.2 20.9 12.5C21.3 13.0 21.2 13.4 20.7 13.8C20.3 14.0 20.2 14.1 20.3 14.3C20.6 15.4 20.5 15.6 19.7 15.9C19.3 16.0 19.1 16.1 19.1 16.3C19.1 17.0 18.9 17.1 18.1 17.0C17.4 16.9 17.3 17.0 17.2 17.2C17.1 17.5 16.8 17.7 16.5 17.5C16.3 17.4 16.2 17.3 16.1 17.3C15.9 17.3 14.8 18.4 14.8 18.6C14.8 18.7 14.7 18.8 14.7 18.9C14.7 19.0 14.6 19.2 14.4 19.2C14.1 19.3 14.0 19.4 14.1 19.8C14.2 20.3 14.0 20.7 13.5 20.8C13.2 20.8 13.1 20.9 13.1 21.3C13.0 21.8 13.0 21.8 12.5 21.9C12.1 21.9 11.9 22.0 11.8 22.2C11.6 22.6 11.2 22.7 10.8 22.6C10.5 22.5 10.4 22.5 10.1 22.8C9.6 23.2 9.1 23.2 8.8 22.8ZM9.9 22.4L10.3 22.0L10.0 21.4C9.9 21.1 9.7 20.5 9.6 19.9C9.3 18.8 9.0 18.7 8.9 19.5C8.8 19.8 8.5 20.5 8.2 21.2C7.7 22.3 7.7 22.4 8.2 22.2C8.4 22.0 8.5 22.1 8.8 22.4C9.2 22.8 9.5 22.8 9.9 22.4ZM11.5 21.9C11.6 21.6 11.7 21.5 12.2 21.5C13.0 21.5 12.9 21.0 12.1 20.4C11.7 20.2 11.1 19.7 10.7 19.3C9.8 18.4 9.6 18.5 9.9 19.6C10.4 21.8 11.0 22.7 11.5 21.9ZM8.0 20.7C8.8 18.9 8.8 18.4 7.7 19.2C7.4 19.4 6.8 19.8 6.4 19.9C5.8 20.1 5.8 20.1 5.8 20.7L5.8 21.3L6.4 21.3C6.8 21.4 7.0 21.5 7.1 21.6C7.3 22.0 7.5 21.8 8.0 20.7ZM13.6 20.3C13.8 20.1 13.6 19.5 13.3 19.3C12.6 18.8 11.6 18.2 11.1 17.8C10.0 16.9 9.9 17.9 11.0 19.0C12.2 20.2 13.2 20.7 13.6 20.3ZM6.8 19.3C8.4 18.5 8.7 17.7 7.2 18.1C6.7 18.2 6.1 18.3 5.9 18.3C5.3 18.3 5.0 18.5 4.8 19.0C4.5 19.8 5.4 20.0 6.8 19.3ZM14.2 18.8C14.4 18.6 14.4 18.5 13.6 17.9C13.1 17.5 12.4 17.0 12.1 16.7C11.5 16.0 10.7 15.9 10.8 16.5C10.9 17.5 13.6 19.3 14.2 18.8ZM14.8 17.8C14.8 17.6 14.7 17.4 14.4 17.1C14.2 16.9 13.8 16.4 13.6 16.0C13.1 15.3 12.6 14.9 12.1 14.9C11.7 14.9 11.9 15.7 12.5 16.4C13.7 17.7 14.8 18.4 14.8 17.8ZM7.1 17.7C7.9 17.5 8.4 17.2 7.9 17.2C7.8 17.2 7.8 17.1 7.7 17.0C7.7 16.6 5.0 16.6 4.6 17.0C3.7 17.8 5.0 18.2 7.1 17.7ZM15.6 17.1C15.7 16.9 15.7 16.7 15.4 16.2C15.2 15.8 14.9 15.3 14.8 15.0C14.7 14.5 14.6 14.4 14.1 14.2C13.3 13.8 13.4 13.8 13.4 14.3C13.4 15.5 15.2 17.8 15.6 17.1ZM16.9 17.0C16.9 16.5 17.2 16.4 17.8 16.6C18.8 16.8 18.9 16.5 18.0 16.0C17.1 15.5 16.1 14.5 15.7 13.8C15.1 12.8 14.8 13.6 15.3 14.8C15.8 16.3 16.9 17.8 16.9 17.0ZM7.9 16.2C7.9 16.2 7.8 16.0 7.7 15.9C7.6 15.8 7.5 15.5 7.5 15.4C7.5 14.9 4.5 15.0 4.3 15.5C4.2 15.9 4.6 16.2 5.4 16.3C6.0 16.4 7.8 16.3 7.9 16.2ZM18.8 15.8C18.8 15.7 19.1 15.6 19.4 15.5C20.2 15.4 20.2 14.1 19.4 14.1C18.8 14.1 17.3 13.6 16.7 13.2C16.1 12.7 15.9 12.7 15.9 13.0C15.9 13.8 18.5 16.3 18.8 15.8ZM7.5 14.5C7.9 14.3 8.1 12.8 7.8 12.8C7.7 12.8 7.6 12.9 7.6 13.0C7.6 13.3 7.0 13.5 6.0 13.5C5.1 13.5 4.3 13.3 4.3 13.0C4.3 12.9 4.2 12.8 4.1 12.8C3.9 12.8 4.0 14.2 4.2 14.4C4.8 14.9 6.9 14.9 7.5 14.5ZM20.3 13.5C20.8 13.2 20.8 13.0 20.5 12.5C20.2 12.2 20.2 12.1 20.3 11.9C20.4 11.7 20.5 11.1 20.5 10.5L20.5 9.4L19.9 9.5C19.6 9.6 19.0 9.7 18.7 9.7C18.3 9.7 17.7 9.6 17.4 9.5L16.9 9.4L16.9 10.7C16.9 11.8 16.8 11.9 16.5 11.9C16.1 12.0 16.1 12.1 16.5 12.5C17.7 13.5 19.5 14.0 20.3 13.5ZM7.2 10.2L7.2 7.3L6.0 7.3L4.7 7.3L4.7 10.1C4.7 13.3 4.6 13.1 6.1 13.0L7.2 13.0L7.2 10.2ZM20.2 9.0C20.6 8.8 20.5 8.7 19.9 8.5C18.8 8.2 16.6 8.5 17.0 8.9C17.3 9.3 19.6 9.4 20.2 9.0ZM7.3 6.8C7.7 6.6 7.8 6.6 7.8 6.1C7.8 5.7 7.8 5.4 7.9 5.3C8.2 5.1 8.0 5.0 7.5 5.2C7.0 5.5 4.7 5.5 4.3 5.2C4.0 5.0 3.7 5.1 4.0 5.3C4.1 5.4 4.1 5.7 4.1 6.1C4.1 6.8 5.7 7.2 7.3 6.8ZM7.3 4.1L7.4 3.3L6.0 3.4C5.2 3.4 4.6 3.4 4.5 3.4C4.3 3.4 4.4 4.7 4.6 4.9C4.7 5.0 5.1 5.0 6.0 5.0L7.3 5.0L7.3 4.1ZM7.8 2.8C8.5 2.6 8.4 1.9 7.8 1.8C7.5 1.8 7.2 1.7 7.1 1.6C6.7 1.2 5.6 1.2 5.0 1.5C4.8 1.7 4.4 1.8 4.1 1.9C3.5 2.0 3.4 2.6 4.0 2.7C4.2 2.7 4.4 2.8 4.5 2.8C4.7 2.9 7.4 2.9 7.8 2.8Z" />
    </g>
  ),
  tubo: (
    <>
      <path d="M4 8c3 0 3 8 6 8s3-8 6-8 3 8 4 8" />
    </>
  ),
  cartucho: (
    <>
      <rect x="8" y="3" width="8" height="18" rx="2" />
      <path d="M8 9h8M8 15h8" />
    </>
  ),
  acabado: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" stroke="none" />
    </>
  ),

  // --- cocina ---
  parrilla: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <circle cx="8" cy="11" r="1.6" />
      <circle cx="16" cy="11" r="1.6" />
      <circle cx="8" cy="15.5" r="1.6" />
      <circle cx="16" cy="15.5" r="1.6" />
    </>
  ),
  tarja: (
    <>
      <rect x="3" y="9" width="18" height="10" rx="2" />
      <path d="M12 9V5a2 2 0 0 1 2-2h3" />
      <circle cx="12" cy="14" r="2" />
    </>
  ),
  tabla: (
    <>
      <path d="M6 4h9a4 4 0 0 1 0 14H6z" />
      <path d="M18 4h2v4h-2" />
    </>
  ),
  contracanasta: (
    <>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 5v14M5 12h14M7.5 7.5l9 9M16.5 7.5l-9 9" />
    </>
  ),
  jabon: (
    <>
      <path d="M9 8h6l1 11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2L9 8Z" />
      <path d="M11 8V5a1 1 0 0 1 1-1h3" />
    </>
  ),
  escurridor: (
    <>
      <path d="M3 8h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Z" />
      <path d="M7 19h10" />
    </>
  ),
  lavacopas: (
    <>
      <path d="M7 4h10l-1.5 6a4 4 0 0 1-7 0L7 4Z" />
      <path d="M12 14v6M9 20h6" />
    </>
  ),
  deposito: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M14 6v12" />
    </>
  ),
  garrafon: (
    <>
      <path d="M9 3h6v3l2 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-3V3Z" />
      <path d="M7 13h10" />
    </>
  ),

  // --- inodoros y tanques ---
  onepiece: (
    <>
      <path d="M7 3h9v5H7z" />
      <path d="M6 8h11l-1 7a4 4 0 0 1-4 3H9l-3 3V8Z" />
    </>
  ),
  asiento: (
    <>
      <ellipse cx="12" cy="12" rx="8" ry="6" />
      <ellipse cx="12" cy="12" rx="4" ry="2.5" />
    </>
  ),
  herraje: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </>
  ),
  presion: (
    <>
      <circle cx="12" cy="13" r="7" />
      <path d="M12 13 15 9M12 4V2" />
    </>
  ),
  flamable: (
    <>
      <path d="M12 3c3 4 5 6 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 .5 1 1 1.5 2 1.5C11 7 12 5 12 3Z" />
    </>
  ),
  norma: (
    <>
      <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  pintura: (
    <>
      <rect x="4" y="4" width="12" height="7" rx="1" />
      <path d="M16 7h3v4a2 2 0 0 1-2 2h-5v3h-2v-3" />
    </>
  ),
  capacidad: (
    <>
      <path d="M6 3h12l-1 16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 3Z" />
      <path d="M6.6 12h10.8" />
    </>
  ),

  // --- exhibidores / genéricos ---
  espacio: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18" />
    </>
  ),
  interior: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M12 4v16M6 9h3M15 9h3" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  dimension: (
    <>
      <Cubo />
    </>
  ),
  alto: (
    <>
      <Cubo />
      <path d="M19.8 15.2V5.8" />
      <path d="m18.2 7.4 1.6-1.6 1.6 1.6" />
    </>
  ),
  ancho: (
    <>
      <Cubo />
      <path d="M4.4 20h13.2" />
      <path d="m16 18.4 1.6 1.6-1.6 1.6" />
    </>
  ),
  profundo: (
    <>
      <Cubo />
      <path d="m7.6 22.4 9-5.2" />
      <path d="M14.2 17.4 16.6 17.2 15.3 19.2" />
    </>
  ),
  largo: (
    <>
      <Cubo />
      <path d="M3.4 20.6h15.2" />
      <path d="m5 19-1.6 1.6L5 22.2M17 19l1.6 1.6-1.6 1.6" />
    </>
  ),
  diametro: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M5.2 12h13.6" />
      <path d="m7.6 9.6-2.4 2.4 2.4 2.4M16.4 9.6l2.4 2.4-2.4 2.4" />
    </>
  ),

  // --- funciones de espejo ---
  led: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3 11v1h6v-1a6 6 0 0 0-3-11Z" />
    </>
  ),
  touch: (
    <>
      <path d="M9 11V6a2 2 0 0 1 4 0v6" />
      <path d="M13 12v-1a2 2 0 0 1 4 0v5a5 5 0 0 1-5 5h-1a4 4 0 0 1-3.2-1.6L5 15.5a1.6 1.6 0 0 1 2.4-2.1L9 15" />
    </>
  ),
  dimeable: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
  bluetooth: (
    <>
      <path d="m7 7 10 10-5 4V3l5 4L7 17" />
    </>
  ),
  desempanante: (
    <>
      <path d="M4 8h11a3 3 0 1 0-3-3" />
      <path d="M4 13h14a3 3 0 1 1-3 3" />
      <path d="M4 18h8" />
    </>
  ),
  reloj: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
}

/**
 * Icono que le toca a cada medida. El catálogo dibuja el cubo con una flecha
 * distinta según el eje, así que `Alto` y `Altura` comparten glifo, igual que
 * `Profundo` y `Profundidad`.
 */
const dimensionIcons: Record<string, string> = {
  alto: "alto",
  altura: "alto",
  ancho: "ancho",
  profundo: "profundo",
  profundidad: "profundo",
  largo: "largo",
  diametro: "diametro",
}

export function dimensionIcon(label: string): string {
  const clave = label
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
  return dimensionIcons[clave] ?? "dimension"
}

/** Etiquetas de las funciones de los espejos, para la ficha de producto. */
export const functionLabels: Record<string, string> = {
  led: "LED",
  touch: "Touch",
  dimeable: "Dimeable",
  bluetooth: "Bluetooth",
  desempanante: "Desempañante",
  reloj: "Reloj",
}

export default function ProductIcon({ name, ...props }: { name: string } & IconProps) {
  const path = paths[name] ?? paths.check
  return <Svg {...props}>{path}</Svg>
}
