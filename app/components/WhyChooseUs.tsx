const trustCards = [
  {
    icon: "fa-trophy",
    emoji: "🏆",
    title: "Licensed & Certified",
    desc: "Registered pest control operators with government certification",
  },
  {
    icon: "fa-flask",
    emoji: "🧪",
    title: "Eco-Friendly Products",
    desc: "WHO-approved, safe for children, pets and the environment",
  },
  {
    icon: "fa-bolt",
    emoji: "⚡",
    title: "Same-Day Response",
    desc: "Emergency pest control available across all 3 districts",
  },
  {
    icon: "fa-check-double",
    emoji: "💯",
    title: "Satisfaction Guarantee",
    desc: "Not happy? We return and re-treat at zero cost",
  },
  {
    icon: "fa-clipboard-list",
    emoji: "📋",
    title: "Detailed Reports",
    desc: "Full inspection report and treatment documentation provided",
  },
  {
    icon: "fa-handshake",
    emoji: "🤝",
    title: "Local Experts",
    desc: "Born and raised in Eastern Province, we understand local pest challenges",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full bg-bg px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            Why Eastern Province Trusts Green Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((card, i) => (
            <div
              key={i}
              className="rounded-xl bg-secondary/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-2xl">
                {card.emoji}
              </div>
              <h3 className="mb-2 text-lg font-bold text-primary">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
