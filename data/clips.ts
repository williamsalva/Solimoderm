import fs from "fs"
import path from "path"

export interface ClipItem {
  id: string
  url: string
  folder: string
  title: string
}

function getAllVideoFiles(dirPath: string, relativePath = ""): { relativePath: string; fileName: string }[] {
  let results: { relativePath: string; fileName: string }[] = []
  if (!fs.existsSync(dirPath)) return results

  const items = fs.readdirSync(dirPath, { withFileTypes: true })

  for (const item of items) {
    const fullPath = path.join(dirPath, item.name)
    const rel = relativePath ? path.join(relativePath, item.name) : item.name

    if (item.isDirectory()) {
      results = results.concat(getAllVideoFiles(fullPath, rel))
    } else if (item.isFile()) {
      const ext = path.extname(item.name).toLowerCase()
      if (ext === ".mp4" || ext === ".mov" || ext === ".webm") {
        results.push({ relativePath: rel, fileName: item.name })
      }
    }
  }

  return results
}

export function getClipList(): ClipItem[] {
  const clipsDir = path.join(process.cwd(), "public", "clips")
  const videoFiles = getAllVideoFiles(clipsDir)

  // Prioritize 2026 videos first
  videoFiles.sort((a, b) => {
    const a2026 = a.relativePath.startsWith("2026")
    const b2026 = b.relativePath.startsWith("2026")
    if (a2026 && !b2026) return -1
    if (!a2026 && b2026) return 1
    return a.relativePath.localeCompare(b.relativePath)
  })

  return videoFiles.map((file, index) => {
    const is2026 = file.relativePath.startsWith("2026")
    return {
      id: `clip-${index}`,
      url: `/clips/${file.relativePath}`,
      folder: is2026 ? "2026" : "General",
      title: is2026 ? "Clip Colección 2026" : "Solimoderm Clip",
    }
  })
}
