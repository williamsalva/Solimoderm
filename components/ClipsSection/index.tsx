"use client"

import React from "react"
import VideoCard from "../VideoCard"
import { ClipItem } from "data/clips"
import { HiOutlineSparkles } from "react-icons/hi2"

interface ClipsSectionProps {
  clips: ClipItem[]
}

export default function ClipsSection({ clips }: ClipsSectionProps) {
  return (
    <div className="w-full">
      {/* Category Header Badge */}
      <div className="mb-10 flex items-center justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-sm font-extrabold text-amber-900 shadow-sm">
          <HiOutlineSparkles className="h-4 w-4 text-amber-500" />
          <span>Colección 2026 ({clips.length} Vídeos)</span>
        </span>
      </div>

      {/* Grid of Video Clips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {clips.map((clip) => (
          <div key={clip.id} className="relative group">
            <div className="absolute top-3 left-3 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-500/90 px-3 py-1 text-[11px] font-extrabold text-white shadow-lg backdrop-blur-md">
                <HiOutlineSparkles className="h-3 w-3 text-amber-300" />
                COLECCIÓN 2026
              </span>
            </div>
            <VideoCard url={clip.url} />
          </div>
        ))}
      </div>
    </div>
  )
}
