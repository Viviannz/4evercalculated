"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LOGO_DATA_URI } from "@/lib/logo-data";

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
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-[100] flex items-center justify-between bg-brand-navy px-6 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
    >
      <Link
        href="#"
        className="flex items-center text-xl font-extrabold tracking-tight text-white"
      >
        <motion.span whileHover={{ rotate: 8, scale: 1.08 }} className="mr-2 inline-flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_DATA_URI}
            alt="Forevercalculated logo"
            width={28}
            height={28}
            className="rounded-[7px] object-cover"
          />
        </motion.span>
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

      <motion.a
        href="#service"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-md bg-brand-gold px-5 py-2 text-sm font-bold text-brand-navy"
      >
        Get Started
      </motion.a>
    </motion.nav>
  );
}
