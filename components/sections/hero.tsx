export function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light px-6 py-20 text-center text-white">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-6 inline-block rounded-full border border-brand-gold bg-brand-gold/15 px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-gold">
          🌍 Trusted by 1,000+ Remote Job Seekers
        </div>
        <h1 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          Land Your <span className="text-brand-gold">Remote Role</span>
          <br />
          With AI-Powered Support
        </h1>
        <p className="mx-auto mb-8 max-w-[600px] text-lg text-white/80">
          Professional CV rewrites, interview prep, job leads, and AI career
          tools — everything you need to secure remote work, faster.
        </p>

        <div className="mb-9 flex flex-wrap justify-center gap-10">
          <div className="text-center">
            <div className="text-2xl font-extrabold text-brand-gold">1,000+</div>
            <div className="text-xs uppercase tracking-wide text-white/70">
              Clients Supported
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold text-brand-gold">3</div>
            <div className="text-xs uppercase tracking-wide text-white/70">
              AI Career Tools
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold text-brand-gold">Daily</div>
            <div className="text-xs uppercase tracking-wide text-white/70">
              Job Leads Shared
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#tools"
            className="rounded-lg bg-brand-gold px-7 py-3.5 font-bold text-brand-navy transition-opacity hover:opacity-90"
          >
            Try Our Free AI Tools
          </a>
          <a
            href="#service"
            className="rounded-lg border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white"
          >
            View 1-on-1 Service
          </a>
        </div>
      </div>
    </section>
  );
}
