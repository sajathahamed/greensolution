const trustCards = [
  {
    icon: "fa-award",
    title: "Licensed & Certified",
    desc: "Registered pest control operators with government certification and professional accreditation",
  },
  {
    icon: "fa-flask",
    title: "Eco-Friendly Products",
    desc: "WHO-approved formulations that are safe for children, pets and the environment",
  },
  {
    icon: "fa-bolt",
    title: "Same-Day Response",
    desc: "Emergency pest control and rapid deployment across all three Eastern Province districts",
  },
  {
    icon: "fa-rotate-left",
    title: "Satisfaction Guarantee",
    desc: "Complimentary re-treatment at zero cost if the issue persists after our service",
  },
  {
    icon: "fa-file-lines",
    title: "Detailed Reporting",
    desc: "Comprehensive inspection reports, treatment documentation and environmental assessments",
  },
  {
    icon: "fa-users",
    title: "Local Expertise",
    desc: "Eastern Province specialists with deep understanding of regional pest patterns and conditions",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Why Choose Us
          </p>
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            Eastern Province&apos;s Trusted Consultancy
          </h2>
          <p className="mx-auto max-w-lg text-sm text-text-muted">
            Professional standards, local knowledge, guaranteed results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((card, i) => (
            <div
              key={i}
              className="group rounded-xl border border-gray-100 bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <h3 className="mb-2 text-sm font-bold text-text">
                {card.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-text-muted">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
