"use client";

import { useState } from "react";

const WA_NUMBER = "94775354349";

export default function QuotationForm() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    contact: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      "Hello Green Solution,",
      "I would like to get a quotation.",
      "",
      `Name: ${form.name}`,
      `Address: ${form.address}`,
      `Contact: ${form.contact}`,
      "",
      "Please send your plan.",
    ].join("\n");

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="w-full bg-white px-6 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-md sm:max-w-lg">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black/40">
            Free Estimate
          </p>
          <h2 className="mb-3 text-2xl font-extrabold text-black sm:text-3xl md:text-[2.25rem]">
            Get Your Quotation
          </h2>
          <p className="text-[13px] text-black/60 sm:text-sm">
            Fill in your details and we will respond within a day.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-black/20 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9"
        >
          <div className="mb-5">
            <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full rounded-xl border border-black/30 bg-white/[0.04] px-4 py-3.5 text-sm text-black placeholder-black/20 outline-none transition-colors focus:border-black/60"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">
              Address
            </label>
            <textarea
              name="address"
              required
              value={form.address}
              onChange={handleChange}
              placeholder="Property address"
              rows={2}
              className="w-full resize-none rounded-xl border border-black/30 bg-white/[0.04] px-4 py-3.5 text-sm text-black placeholder-black/20 outline-none transition-colors focus:border-black/60"
            />
          </div>

          <div className="mb-8">
            <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">
              Contact Number
            </label>
            <input
              type="tel"
              name="contact"
              required
              value={form.contact}
              onChange={handleChange}
              placeholder="07X XXX XXXX"
              className="w-full rounded-xl border border-black/30 bg-white/[0.04] px-4 py-3.5 text-sm text-black placeholder-black/20 outline-none transition-colors focus:border-black/60"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-4 text-[15px] font-bold text-white shadow-lg transition-all hover:brightness-110 hover:shadow-2xl"
          >
            <i className="fab fa-whatsapp text-lg"></i>
            Submit via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
