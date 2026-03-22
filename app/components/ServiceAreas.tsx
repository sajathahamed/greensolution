const districts = [
  {
    name: "Batticaloa District",
    towns: [
      "Batticaloa Town",
      "Kallady",
      "Chenkaladi",
      "Eravur",
      "Valaichenai",
      "Kattankudy",
      "Oddamavadi",
      "Manmunai",
    ],
    color: "border-accent",
    badge: "bg-accent/10 text-accent",
  },
  {
    name: "Trincomalee District",
    towns: [
      "Trincomalee Town",
      "Kinniya",
      "Muttur",
      "Thampalakamam",
      "Kantale",
      "Seruvila",
      "Gomarankadawala",
    ],
    color: "border-primary",
    badge: "bg-primary/10 text-primary",
  },
  {
    name: "Ampara District",
    towns: [
      "Ampara Town",
      "Kalmunai",
      "Sammanthurai",
      "Akkaraipattu",
      "Mahaoya",
      "Dehiattakandiya",
      "Pottuvil",
    ],
    color: "border-secondary",
    badge: "bg-secondary/10 text-secondary",
  },
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="w-full bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            Serving All of Eastern Province
          </h2>
          <p className="text-text-light">
            Fast response times across all major towns
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {districts.map((district) => (
            <div
              key={district.name}
              className={`rounded-xl border-t-4 ${district.color} bg-bg p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="mb-4 flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-lg text-accent"></i>
                <h3 className="text-lg font-bold text-primary">
                  {district.name}
                </h3>
              </div>
              <ul className="mb-4 space-y-2">
                {district.towns.map((town) => (
                  <li
                    key={town}
                    className="flex items-center gap-2 text-sm text-text-light"
                  >
                    <i className="fas fa-check text-xs text-secondary"></i>
                    {town}
                  </li>
                ))}
              </ul>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${district.badge}`}
              >
                <i className="fas fa-check-circle"></i>
                We Serve This Area
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
