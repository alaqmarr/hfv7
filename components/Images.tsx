"use client";

import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="p-4 flex flex-col items-center gap-4">
      {/* Vertical Column of Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className="w-full rounded-xl shadow-lg overflow-hidden cursor-pointer p-1"
          onClick={() => openLightbox(index)}
        >
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-auto block"
          />
        </div>
      ))}

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>

          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>

          <button
            className="absolute top-4 right-4 text-white text-3xl p-2"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
