export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-18">
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center">
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            Pricing
          </div>
          <h2 className="mb-4 text-2xl font-extrabold text-brand-navy sm:text-3xl md:text-4xl">
            CV &amp; Cover Letter Bundle
          </h2>
          <p className="mx-auto max-w-[600px] text-brand-grey">
            Professionally written application materials for multiple roles,
            at a fraction of the 1-on-1 programme price.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[340px]">
          <div className="rounded-xl border border-brand-border bg-white p-6 text-center transition-shadow hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-grey">
              Bundle
            </div>
            <div className="mb-1 text-3xl font-extrabold text-brand-navy">£75</div>
            <div className="mb-2 text-sm text-brand-grey">3 CVs + 3 Cover Letters</div>
            <div className="mb-4 text-sm font-semibold text-brand-accent">
              Tailored to 3 different roles
            </div>
            <a
              href="mailto:forevercalculated@gmail.com?subject=CV%20%26%20Cover%20Letter%20Bundle%20(%C2%A375)"
              className="block rounded-md bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
