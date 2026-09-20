const STEPS = [
  {
    icon: "📄",
    num: 1,
    title: "Upload Your CV",
    body: "Securely share your CV. Our AI or your dedicated expert will analyse your skills, experience, and target role.",
  },
  {
    icon: "🔍",
    num: 2,
    title: "Choose Your Support",
    body: "Use our free AI tools for instant results, or upgrade to 1-on-1 support for a fully tailored, hands-on experience.",
  },
  {
    icon: "✨",
    num: 3,
    title: "Apply With Confidence",
    body: "Go to market with a polished CV, a tailored cover letter, and interview skills that give you a real competitive edge.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-18">
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center">
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            How It Works
          </div>
          <h2 className="mb-4 text-2xl font-extrabold text-brand-navy sm:text-3xl md:text-4xl">
            Get Started in Minutes
          </h2>
          <p className="mx-auto max-w-[600px] text-brand-grey">
            A simple three-step process — whether you use our free AI tools or
            our premium 1-on-1 service.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
          {STEPS.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mb-4 text-4xl">{s.icon}</div>
              <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                {s.num}
              </div>
              <h3 className="mb-2 text-lg font-bold text-brand-navy">
                {s.title}
              </h3>
              <p className="text-sm text-brand-grey">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
