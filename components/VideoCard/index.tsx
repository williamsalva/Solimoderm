"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  url: string;
};

function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export default function VideoCard({ url }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = isMobileDevice();
    setIsMobile(mobile);

    if (!mobile) return; // Solo ejecutar IntersectionObserver en móviles

    const observer = new IntersectionObserver(
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

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
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
