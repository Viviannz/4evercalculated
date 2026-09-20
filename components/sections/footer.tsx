import { LOGO_DATA_URI } from "@/lib/logo-data";

const LINKS = [
  { href: "#tools", label: "AI Tools" },
  { href: "#service", label: "1-on-1 Service" },
  { href: "#faq", label: "FAQ" },
  { href: "https://forevercalculated.com/terms", label: "Terms & Conditions", external: true },
  { href: "mailto:forevercalculated@gmail.com", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-navy px-6 py-10 text-center text-white/70">
      <div className="mb-3 flex items-center justify-center text-[1.3rem] font-extrabold text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={LOGO_DATA_URI}
          alt="Forevercalculated logo"
          width={24}
          height={24}
          className="mr-2 rounded-[6px] object-cover"
        />
        Forever<span className="text-brand-gold">Calculated</span>
      </div>

      <div className="my-4 flex flex-wrap justify-center gap-6">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.external ? "_blank" : undefined}
            rel={l.external ? "noreferrer" : undefined}
            className="text-sm text-white/60 hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </div>

      <p className="text-sm">
        Career and tools service. Not a recruitment agency. We do not
        guarantee employment.
      </p>
      <p className="mt-2 text-sm">© 2026 Forevercalculated. All rights reserved.</p>
    </footer>
  );
}
