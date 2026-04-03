export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-[#071f07] text-white">
      <div className="mx-auto max-w-5xl px-6 pb-10 pt-16 sm:px-8">
        <div className="mx-auto max-w-md">
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
              Contact Us
            </h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                  <i className="fas fa-phone text-[9px] text-white/30"></i>
                </div>
                <div>
                  <a
                    href="tel:+94775354349"
                    className="block text-[12px] font-medium text-white/55 transition-colors hover:text-white"
                  >
                    077 535 4349
                  </a>
                  <a
                    href="tel:+94652058699"
                    className="block text-[12px] text-white/35 transition-colors hover:text-white"
                  >
                    065 205 8699
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                  <i className="fas fa-envelope text-[9px] text-white/30"></i>
                </div>
                <a
                  href="mailto:greensolutionpm@gmail.com"
                  className="text-[12px] text-white/40 transition-colors hover:text-white"
                >
                  greensolutionpm@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                  <i className="fas fa-clock text-[9px] text-white/30"></i>
                </div>
                <p className="text-[12px] text-white/40">
                  Mon – Sun, 7 AM – 8 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-6 py-5 text-center text-[10px] text-white/15 sm:px-8">
          <p>
            &copy; Green Solution Pest Management
            &amp; Environmental Engineering Consultancy
          </p>
          <p>Licensed Pest Control Operator — Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
