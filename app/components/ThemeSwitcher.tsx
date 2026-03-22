"use client";

import { useState, useEffect } from "react";

type Theme = "green" | "blue" | "yellow";

const themes: { id: Theme; label: string; swatch: string; ring: string }[] = [
  { id: "green", label: "Green theme", swatch: "bg-[#1B5E20]", ring: "ring-[#4CAF50]" },
  { id: "blue", label: "Blue theme", swatch: "bg-[#0D47A1]", ring: "ring-[#1E88E5]" },
  { id: "yellow", label: "Yellow theme", swatch: "bg-[#F57C00]", ring: "ring-[#FFB300]" },
];

function applyTheme(theme: Theme) {
  const html = document.documentElement;

  html.classList.add("theme-transitioning");
  html.classList.remove("theme-blue", "theme-yellow");

  if (theme === "blue") html.classList.add("theme-blue");
  if (theme === "yellow") html.classList.add("theme-yellow");

  localStorage.setItem("gs-theme", theme);

  setTimeout(() => html.classList.remove("theme-transitioning"), 500);
}

export default function ThemeSwitcher() {
  const [active, setActive] = useState<Theme>("green");

  useEffect(() => {
    const saved = localStorage.getItem("gs-theme") as Theme | null;
    if (saved && ["green", "blue", "yellow"].includes(saved)) {
      setActive(saved);
      applyTheme(saved);
    }
  }, []);

  const handleSwitch = (theme: Theme) => {
    setActive(theme);
    applyTheme(theme);
  };

  return (
    <div className="flex items-center gap-1.5">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => handleSwitch(t.id)}
          aria-label={t.label}
          className={`h-6 w-6 rounded-full border-2 transition-all duration-200 ${t.swatch} ${
            active === t.id
              ? `border-white ring-2 ${t.ring} scale-110`
              : "border-gray-300 hover:scale-110"
          }`}
        />
      ))}
    </div>
  );
}
