const areas = [
  { name: "Batticaloa", icon: "fa-map-marker-alt", region: "Eastern Province" },
  { name: "Trincomalee", icon: "fa-map-marker-alt", region: "Eastern Province" },
  { name: "Ampara", icon: "fa-map-marker-alt", region: "Eastern Province" },
  { name: "All Island", icon: "fa-globe-asia", region: "Sri Lanka" },
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="w-full bg-gradient-to-b from-[#0a3d0a] via-[#145214] to-[#1B5E20] px-6 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-secondary">
            Coverage Area
          </p>
          <h2 className="text-2xl font-extrabold text-text sm:text-3xl md:text-[2.25rem]">
            Where We Serve
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {areas.map((area) => (
            <div
              key={area.name}
              className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-4 py-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 hover:shadow-xl sm:py-10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/[0.05] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <i className={`fas ${area.icon} text-lg`}></i>
              </div>
              <h3 className="text-sm font-bold text-text">{area.name}</h3>
              <p className="mt-1 text-[11px] text-text-muted">{area.region}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
