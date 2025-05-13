"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  url: string;
};

export default function VideoCard({ url }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es mobile por ancho de pantalla
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // típico breakpoint móvil
    };

    checkIfMobile(); // detectar al cargar

    window.addEventListener("resize", checkIfMobile); // detectar si redimensiona

    // Configurar IntersectionObserver solo si es móvil
    let observer: IntersectionObserver | null = null;

    if (window.innerWidth <= 768) {
      observer = new IntersectionObserver(
        ([entry]) => {
          const video = videoRef.current;
          if (!video) return;

          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
        { threshold: 0.5 }
      );

      const videoEl = videoRef.current;
      if (videoEl) observer.observe(videoEl);
    }

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      if (observer && videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
      <video
        ref={videoRef}
        src={url}
        muted
        playsInline
        loop
        preload="metadata"
        controls={!isMobile} // controles solo en escritorio
        className="w-full aspect-[9/16] object-cover"
      />
    </div>
  );
}
