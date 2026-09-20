const ROLES = [
  { title: "Customer Service", body: "Support roles across various industries", tag: "High Demand" },
  { title: "Development", body: "Software and web development positions", tag: "High Demand" },
  { title: "Creative", body: "Design and creative opportunities", tag: "Growing" },
  { title: "Administration", body: "Virtual assistant and admin support roles", tag: "High Demand" },
  { title: "Sales & Marketing", body: "Remote sales, content, and digital marketing", tag: "Growing" },
  { title: "Finance & Data", body: "Bookkeeping, data entry, and analysis roles", tag: "Stable" },
];

export function Roles() {
  return (
    <section className="bg-brand-off-white px-6 py-18">
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center">
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            Remote Roles
          </div>
          <h2 className="mb-4 text-2xl font-extrabold text-brand-navy sm:text-3xl md:text-4xl">
            Roles We Help You Target
          </h2>
          <p className="mx-auto max-w-[600px] text-brand-grey">
            We tailor your CV and application materials to the specific remote
            role and sector you are going after.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
          {ROLES.map((r) => (
            <div
              key={r.title}
              className="rounded-[10px] border border-brand-border bg-white p-6 text-center"
            >
              <h3 className="mb-1.5 font-bold text-brand-navy">{r.title}</h3>
              <p className="mb-2.5 text-sm text-brand-grey">{r.body}</p>
              <span className="inline-block rounded-full bg-[#d4edda] px-2.5 py-1 text-xs font-semibold text-[#155724]">
                {r.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
