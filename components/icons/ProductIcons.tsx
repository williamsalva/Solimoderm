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
  marco: (
    <>
      <path d="M4 3h16v18H4z" />
      <path d="M7 6h10v12H7z" />
    </>
  ),

  // --- piezas de baño ---
  mezcladora: (
    <>
      <path d="M12 21V10" />
      <path d="M6 10h12a6 6 0 0 0-12 0Z" />
      <path d="M8 21h8M12 10V4" />
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
