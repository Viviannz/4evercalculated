"use client";

import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#tools", label: "AI Tools" },
  { href: "#how-it-works", label: "How It Works" },
];

const PRICING_LINKS = [
  { href: "#pricing", label: "CV & Cover Letter Bundle – £75" },
  { href: "#service", label: "1-on-1 Support – £199" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between bg-brand-navy px-6 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
      <Link
        href="#"
        className="flex items-center text-xl font-extrabold tracking-tight text-white"
      >
        <Image
          src="/logo.png"
          alt="Forevercalculated logo"
          width={28}
          height={28}
          className="mr-2 rounded-[7px] object-cover"
        />
        Forever<span className="text-brand-gold">Calculated</span>
      </Link>

      <ul className="hidden items-center gap-6 list-none md:flex">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm text-white/85 transition-colors hover:text-brand-gold"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li className="group relative">
          <a
            href="#pricing"
            className="text-sm text-white/85 transition-colors hover:text-brand-gold"
          >
            Pricing
          </a>
          <ul className="invisible absolute left-0 top-full z-[200] mt-2 min-w-[240px] list-none rounded-lg bg-brand-navy p-1 opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
            {PRICING_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block whitespace-nowrap rounded-md px-4 py-2.5 text-[13px] text-white/85 hover:bg-white/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a
            href="#service"
            className="text-sm text-white/85 transition-colors hover:text-brand-gold"
          >
            1-on-1 Service
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="text-sm text-white/85 transition-colors hover:text-brand-gold"
          >
            FAQ
          </a>
        </li>
      </ul>

      <a
        href="#service"
        className="rounded-md bg-brand-gold px-5 py-2 text-sm font-bold text-brand-navy transition-opacity hover:opacity-90"
      >
        Get Started
      </a>
    </nav>
  );
}
