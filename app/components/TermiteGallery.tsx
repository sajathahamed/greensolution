"use client";

import { useState, useEffect } from "react";

const pestPhotos = [
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.14%20AM.jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.14%20AM%20(1).jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.15%20AM.jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.15%20AM%20(1).jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.15%20AM%20(2).jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.16%20AM.jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.16%20AM%20(1).jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.17%20AM.jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.17%20AM%20(1).jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.17%20AM%20(2).jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.18%20AM.jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.18%20AM%20(1).jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.19%20AM.jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.19%20AM%20(1).jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.44.19%20AM%20(2).jpeg" },
  { src: "/gallery/WhatsApp%20Image%202026-04-25%20at%209.46.27%20AM.jpeg" },
];

export default function TermiteGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % pestPhotos.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(pestPhotos[nextIndex].src);
      }
      if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + pestPhotos.length) % pestPhotos.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(pestPhotos[prevIndex].src);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  const openLightbox = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % pestPhotos.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(pestPhotos[nextIndex].src);
  };

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + pestPhotos.length) % pestPhotos.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(pestPhotos[prevIndex].src);
  };

  return (
    <section className="w-full bg-[#f6f7f4] px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {pestPhotos.map((photo, index) => (
            <figure
              key={photo.src}
              onClick={() => openLightbox(photo.src, index)}
              className="cursor-pointer overflow-hidden rounded-xl border border-[#dce5d8] bg-white shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={photo.src}
                alt="Gallery photo"
                loading="lazy"
                className="h-36 w-full object-cover sm:h-40"
              />
            </figure>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <a
            href="https://www.youtube.com/watch?v=MO5Fd54Ap_k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#2f5f2e] bg-white px-6 py-2.5 text-sm font-semibold text-[#1f3b1e] transition-colors hover:bg-[#ecf4e8]"
          >
            <i className="fab fa-youtube text-base text-red-600"></i>
            Watch Our YouTube Video
          </a>
          <div className="mt-4">
            <a
              href="https://share.google/F0w3526i4eK6sqXjz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-blue-700 bg-white px-6 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
            >
              <i className="fas fa-link text-base text-blue-700"></i>
              View Our Google Share
            </a>
          </div>

          <div className="mt-8 text-center sm:mt-10">
            <div className="mx-auto mb-3 h-[3px] w-full max-w-[860px] bg-[#4f8f3e]"></div>
            <h3 className="gallery-classic-title text-[1.25rem] leading-[1.25] text-[#1f1f1f] sm:text-[1.8rem]">
              <span className="block">-Environmental Engineering Consultancy -</span>
              <span className="block">-Professionals in Termite Proofing-</span>
            </h3>
            <div className="mx-auto mt-3 h-[3px] w-full max-w-[860px] bg-[#4f8f3e]"></div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <i className="fas fa-times text-xl"></i>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left text-xl"></i>
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Gallery preview"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          />

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Next image"
          >
            <i className="fas fa-chevron-right text-xl"></i>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
            {currentIndex + 1} / {pestPhotos.length}
          </div>
        </div>
      )}
    </section>
  );
}
