"use client";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery2({ images }: ImageGalleryProps) {
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* Vertical Column of Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className="w-full rounded-xl shadow-lg overflow-hidden p-1"
        >
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-auto block"
          />
        </div>
      ))}
    </div>
  );
}
