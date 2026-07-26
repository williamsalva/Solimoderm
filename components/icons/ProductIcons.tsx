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
  cespol: (
    <>
      <ellipse cx="6.6" cy="4" rx="3.4" ry="1.5" />
      <path d="M6.6 5.5v2.6" />
      <path d="M4.2 8.1h4.8v5.6a3.6 3.6 0 0 0 3.6 3.6h2.2" />
      <path d="M4.9 9.9h3.4M4.9 11.7h3.4M5.3 13.5h3.7M6.4 15.3h3.4" />
      <path d="M14.8 15.3h3.4v3.6h-3.4z" />
    </>
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
