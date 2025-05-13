// /lib/getClips.ts
import fs from "fs"
import path from "path"

export function getClipList(): { id: string; url: string }[] {
  const dirPath = path.join(process.cwd(), "public", "clips")
  const files = fs.readdirSync(dirPath)

  return files
    .filter((file) => file.endsWith(".MP4"))
    .map((file, index) => ({
      id: `clip-${index}`,
      url: `/clips/${file}`,
    }))
}
