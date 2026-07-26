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
  marco: (
    <>
      <path d="M4 3h16v18H4z" />
      <path d="M7 6h10v12H7z" />
    </>
  ),

  // --- piezas de baño ---
  garrafon: (
    <>
      <path d="M9 3h6v3l2 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-3V3Z" />
      <path d="M7 13h10" />
    </>
  ),

  // --- inodoros y tanques ---
  // --- exhibidores / genéricos ---
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

/**
 * Iconos vectorizados del catálogo impreso. Viven en `public/img/icons/` y se
 * pintan con `mask-image`, así que siguen tomando el color del texto pero no
 * pesan en el bundle de JS: los paths trazados son demasiado grandes para
 * incrustarlos. El resto de iconos son de línea y van inline.
 */
const trazados: Record<string, string> = {
  monomando: "monomando",
  cespol: "cespol",
  // el catálogo usa un solo glifo de capas para cualquier material
  mdf: "capas",
  acero: "capas",
  cuerpo: "capas",
  herreria: "capas",
  // y un solo tazón para lavabo y loza
  lavabo: "tazon",
  loza: "tazon",
  espacio: "espacio",
  acabado: "acabado",
  jabon: "jabon",
  // funciones de los espejos
  touch: "touch",
  bluetooth: "bluetooth",
  dimeable: "dimeable",
  led: "led",
  desempanante: "desempanante",
  reloj: "reloj",
  // cocina, tarjas y desagües
  cristal: "capas",
  tabla: "tabla",
  contracanasta: "contracanasta",
  cartucho: "cartucho",
  tubo: "tubo",
  tarja: "tarja",
  mezcladora: "mezcladora",
  escurridor: "escurridor",
  lavacopas: "lavacopas",
  deposito: "deposito",
  // inodoros, tanque y parrillas
  ceramica: "capas",
  onepiece: "onepiece",
  asiento: "asiento",
  herraje: "herraje",
  parrilla: "parrilla",
  pintura: "pintura",
  capacidad: "capacidad",
  flamable: "flamable",
  norma: "norma",
  presion: "presion",
}

export default function ProductIcon({ name, className, style, ...props }: { name: string } & IconProps) {
  const archivo = trazados[name]
  if (archivo) {
    const url = `url(/img/icons/${archivo}.svg)`
    return (
      <span
        aria-hidden="true"
        className={className}
        style={{
          display: "inline-block",
          backgroundColor: "currentColor",
          maskImage: url,
          WebkitMaskImage: url,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          ...style,
        }}
      />
    )
  }
  return (
    <Svg className={className} style={style} {...props}>
      {paths[name] ?? paths.check}
    </Svg>
  )
}
