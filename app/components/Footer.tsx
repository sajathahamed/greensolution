export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-gradient-to-b from-[#dceeff] via-[#cfe6ff] to-[#c6e0ff] text-[#0d2b63]">
      <div className="mx-auto max-w-5xl px-6 pb-10 pt-16 sm:px-8">
        <div className="mb-10 text-center">
          <p className="footer-brand-rentokil text-[1.5rem] text-black sm:text-[2.3rem]">
            <span className="block">Green Solution Pest Management</span>
          </p>
        </div>

        <div className="mx-auto max-w-md">
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1d4288]/70">
              Contact Us
            </h4>

            <div className="space-y-3 text-left">
              <div className="flex gap-4 items-start">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#15408f]/10">
                  <i className="fas fa-phone text-[9px] text-[#15408f]/70"></i>
                </div>
                <div className="space-y-0.5 flex-1">
                  <a
                    href="tel:+94775354349"
                    className="block text-[13px] font-medium text-[#0d2b63]/90 transition-colors hover:text-[#0b2252]"
                  >
                    077 5354 349
                  </a>
                  <a
                    href="tel:+94652058699"
                    className="block text-[13px] text-[#0d2b63]/70 transition-colors hover:text-[#0b2252]"
                  >
                    065 2058 699
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#15408f]/10">
                  <i className="fas fa-envelope text-[9px] text-[#15408f]/70"></i>
                </div>
                <a
                  href="mailto:greensolutionpm@gmail.com"
                  className="block text-[13px] text-[#0d2b63]/80 transition-colors hover:text-[#0b2252] flex-1"
                >
                  greensolutionpm@gmail.com
                </a>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#15408f]/10">
                  <i className="fas fa-clock text-[9px] text-[#15408f]/70"></i>
                </div>
                <p className="text-[13px] text-[#0d2b63]/80 flex-1">
                  Mon – Sun, 7 AM – 8 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#15408f]/15">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-6 py-5 text-center text-[11px] text-[#0d2b63]/70 sm:px-8">
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
