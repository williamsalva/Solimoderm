"use client"

import React, { useState } from "react"
import VideoCard from "../VideoCard"
import { ClipItem } from "data/clips"
import { HiOutlineSparkles, HiOutlineFilm } from "react-icons/hi2"

interface ClipsSectionProps {
  clips: ClipItem[]
}

export default function ClipsSection({ clips }: ClipsSectionProps) {
  const [filter, setFilter] = useState<"all" | "2026" | "general">("all")

  const filteredClips = clips.filter((clip) => {
    if (filter === "2026") return clip.folder === "2026"
    if (filter === "general") return clip.folder === "General"
    return true
  })

  const count2026 = clips.filter((c) => c.folder === "2026").length
  const countGeneral = clips.filter((c) => c.folder === "General").length

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setFilter("all")}
          className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-extrabold transition-all duration-300 ${
            filter === "all"
              ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-105"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <HiOutlineFilm className="h-4 w-4" />
          <span>Todos los Clips ({clips.length})</span>
        </button>

        <button
          onClick={() => setFilter("2026")}
          className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-extrabold transition-all duration-300 ${
            filter === "2026"
              ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-105"
              : "bg-amber-50 border border-amber-200 text-amber-900 hover:bg-amber-100"
          }`}
        >
          <HiOutlineSparkles className="h-4 w-4 text-amber-500" />
          <span>Colección 2026 ({count2026})</span>
        </button>

        <button
          onClick={() => setFilter("general")}
          className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-extrabold transition-all duration-300 ${
            filter === "general"
              ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-105"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span>Catálogo Solimoderm ({countGeneral})</span>
        </button>
      </div>

      {/* Grid of Video Clips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredClips.map((clip) => (
          <div key={clip.id} className="relative group">
            {clip.folder === "2026" && (
              <div className="absolute top-3 left-3 z-20 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-500/90 px-3 py-1 text-[11px] font-extrabold text-white shadow-lg backdrop-blur-md">
                  <HiOutlineSparkles className="h-3 w-3 text-amber-300" />
                  COLECCIÓN 2026
                </span>
              </div>
            )}
            <VideoCard url={clip.url} />
          </div>
        ))}
      </div>
    </div>
  )
}
