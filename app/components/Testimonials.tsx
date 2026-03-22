const testimonials = [
  {
    quote:
      "Green Solution treated our entire house for termites. Professional team, great results. No termites for 2 years now!",
    name: "Mohamed Rizwan",
    location: "Batticaloa",
    initials: "MR",
    color: "bg-accent",
  },
  {
    quote:
      "Fast response! Called at 8am, they came by 11am. Cockroach problem completely solved.",
    name: "Thilaga Krishnamoorthy",
    location: "Trincomalee",
    initials: "TK",
    color: "bg-primary",
  },
  {
    quote:
      "Our warehouse has been pest-free since their annual contract. Worth every rupee!",
    name: "Suresh Pathmanathan",
    location: "Ampara",
    initials: "SP",
    color: "bg-secondary",
  },
];

function StarRating() {
  return (
    <div className="mb-3 flex gap-1">
      {[...Array(5)].map((_, i) => (
        <i key={i} className="fas fa-star text-amber-400"></i>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl bg-bg p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <StarRating />
              <blockquote className="mb-6 text-sm leading-relaxed text-text-light italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${t.color} text-sm font-bold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
