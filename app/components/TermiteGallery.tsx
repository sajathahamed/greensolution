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
  return (
    <section className="w-full bg-[#f6f7f4] px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-10">
          <div className="mx-auto mb-3 h-[3px] w-full max-w-[860px] bg-[#4f8f3e]"></div>
          <h3 className="gallery-classic-title text-[1.25rem] leading-[1.25] text-[#1f1f1f] sm:text-[1.8rem]">
            <span className="block">-Environmental Engineering Consultancy -</span>
            <span className="block">-Professionals in Termite Proofing-</span>
          </h3>
          <div className="mx-auto mt-3 h-[3px] w-full max-w-[860px] bg-[#4f8f3e]"></div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {pestPhotos.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-xl border border-[#dce5d8] bg-white shadow-sm"
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
        </div>
      </div>
    </section>
  );
}
