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
  },
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="w-full bg-bg px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Coverage Area
          </p>
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            Serving All of Eastern Province
          </h2>
          <p className="text-sm text-text-muted">
            Rapid response across all major towns and rural areas
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {districts.map((district) => (
            <div
              key={district.name}
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="bg-primary px-6 py-4">
                <div className="flex items-center gap-2.5">
                  <i className="fas fa-map-marker-alt text-accent-light"></i>
                  <h3 className="text-sm font-bold text-white">
                    {district.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2.5">
                  {district.towns.map((town) => (
                    <li
                      key={town}
                      className="flex items-center gap-2.5 text-[13px] text-text-light"
                    >
                      <i className="fas fa-check text-[10px] text-secondary"></i>
                      {town}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
