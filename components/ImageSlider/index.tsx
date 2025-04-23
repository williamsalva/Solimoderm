"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import image3 from "../../public/img/hero-mueble.png";
import image1 from "../../public/img/hero-ovalin.png";
import image2 from "../../public/img/hero-tarja.png";

// Interface for image data
interface ImageData {
  src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1); // Start at 1 for the first "real" image
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Create a new array with duplicated images for infinite effect
  const infiniteImages = [
    images[images.length - 1], // Last image duplicated at the start
    ...images,
    images[0], // First image duplicated at the end
  ];

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  useEffect(() => {
    if (currentIndex === 0) {
      // Desactiva la transición y salta al último índice real
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
      }, 0); // Cambia inmediatamente
    } else if (currentIndex === infiniteImages.length - 1) {
      // Desactiva la transición y salta al primer índice real
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 0); // Cambia inmediatamente
    } else {
      // Activa la transición para los casos normales
      setIsTransitioning(true);
    }
  }, [currentIndex]);

  const handleMouseOver = (): void => setIsHovered(true);
  const handleMouseLeave = (): void => setIsHovered(false);

  return (
    <div className="relative w-full mx-auto mt-4">
      <div
        className="relative group overflow-hidden"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`transition-transform duration-600 ease-in-out ${
            isTransitioning ? "" : "transition-none"
          }`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            display: "flex",
          }}
        >
          {infiniteImages.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={`Slider Image ${index}`}
              layout="responsive"
              width={300}
              height={100}
              className="flex-shrink-0"
            />
          ))}
        </div>
      </div>
      {/* Optional navigation buttons */}
      
    </div>
  );
}

export default ImageSlider;