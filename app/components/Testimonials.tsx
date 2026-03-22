const testimonials = [
  {
    quote:
      "Green Solution treated our entire house for termites. Highly professional team with excellent results. No termite activity for over two years now.",
    name: "Mohamed Rizwan",
    location: "Batticaloa",
    initials: "MR",
  },
  {
    quote:
      "Impressive response time — called at 8 AM, their technician was on site by 11 AM. Cockroach issue completely resolved in one visit.",
    name: "Thilaga Krishnamoorthy",
    location: "Trincomalee",
    initials: "TK",
  },
  {
    quote:
      "Our warehouse has been completely pest-free since we started their annual maintenance contract. Outstanding service and value.",
    name: "Suresh Pathmanathan",
    location: "Ampara",
    initials: "SP",
  },
];

function StarRating() {
  return (
    <div className="mb-3 flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <i key={i} className="fas fa-star text-sm text-amber-400"></i>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Testimonials
          </p>
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-gray-100 bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <i className="fas fa-quote-left absolute right-5 top-5 text-2xl text-primary/[0.06]"></i>
              <StarRating />
              <blockquote className="mb-6 text-[13px] leading-relaxed text-text-light">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  <p className="text-[11px] text-text-muted">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
