"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const STATS = [
  { value: "1,000+", label: "Clients Supported" },
  { value: "3", label: "AI Career Tools" },
  { value: "Daily", label: "Job Leads Shared" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-light px-6 py-20 text-center text-white">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand-accent/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="relative mx-auto max-w-[1100px]"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-block rounded-full border border-brand-gold bg-brand-gold/15 px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-gold"
        >
          🌍 Trusted by 1,000+ Remote Job Seekers
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl"
        >
          Land Your <span className="text-brand-gold">Remote Role</span>
          <br />
          With AI-Powered Support
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mb-8 max-w-[600px] text-lg text-white/80"
        >
          Professional CV rewrites, interview prep, job leads, and AI career
          tools — everything you need to secure remote work, faster.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mb-9 flex flex-wrap justify-center gap-10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-extrabold text-brand-gold">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-wide text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#tools"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg bg-brand-gold px-7 py-3.5 font-bold text-brand-navy shadow-lg shadow-brand-gold/20"
          >
            Try Our Free AI Tools
          </motion.a>
          <motion.a
            href="#service"
            whileHover={{ scale: 1.04, y: -2, borderColor: "rgba(255,255,255,0.9)" }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg border-2 border-white/40 px-7 py-3.5 font-semibold text-white"
          >
            View 1-on-1 Service
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
