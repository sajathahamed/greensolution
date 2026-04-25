const pestPhotos = [
  {
    src: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=80",
    title: "Termite Damage Inspection",
  },
  {
    src: "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?auto=format&fit=crop&w=900&q=80",
    title: "Cockroach Monitoring",
  },
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80",
    title: "Rodent Risk Area",
  },
  {
    src: "https://images.unsplash.com/photo-1561134643-668f9057cce0?auto=format&fit=crop&w=900&q=80",
    title: "Mosquito Source Check",
  },
  {
    src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=900&q=80",
    title: "Bed Bug Detection",
  },
  {
    src: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=900&q=80",
    title: "Wall Cavity Treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=900&q=80",
    title: "Safe Chemical Handling",
  },
  {
    src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=900&q=80",
    title: "Outdoor Pest Control",
  },
  {
    src: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=900&q=80",
    title: "Residential Prevention",
  },
  {
    src: "https://images.unsplash.com/photo-1545243424-0ce743321e11?auto=format&fit=crop&w=900&q=80",
    title: "Professional Site Visit",
  },
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
                alt={photo.title}
                loading="lazy"
                className="h-36 w-full object-cover sm:h-40"
              />
              <figcaption className="px-2 py-2 text-center text-[11px] font-medium text-[#2b2b2b] sm:text-xs">
                {photo.title}
              </figcaption>
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
