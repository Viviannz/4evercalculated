"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const STATS = [
  { value: "1,000+", label: "Clients Supported" },
  { value: "Daily", label: "Job Leads Shared" },
];

const AURORA_BLOBS = [
  {
    className: "-top-32 -right-20 h-[26rem] w-[26rem] bg-brand-gold/30",
    animate: {
      x: [0, -30, 10, 0],
      y: [0, 25, -10, 0],
      scale: [1, 1.18, 1.05, 1],
      opacity: [0.35, 0.55, 0.3, 0.35],
    },
    duration: 15,
    delay: 0,
  },
  {
    className: "-bottom-40 -left-24 h-[30rem] w-[30rem] bg-brand-accent/30",
    animate: {
      x: [0, 25, -20, 0],
      y: [0, -20, 15, 0],
      scale: [1, 1.1, 1.22, 1],
      opacity: [0.3, 0.5, 0.32, 0.3],
    },
    duration: 18,
    delay: 1.5,
  },
  {
    className: "top-1/3 left-1/4 h-[22rem] w-[22rem] bg-brand-navy-light/40",
    animate: {
      x: [0, -25, 20, 0],
      y: [0, 15, -18, 0],
      scale: [1, 1.08, 0.95, 1],
      opacity: [0.2, 0.4, 0.22, 0.2],
    },
    duration: 21,
    delay: 3,
  },
  {
    className: "-top-10 left-1/3 h-64 w-64 bg-brand-gold/20",
    animate: {
      x: [0, 15, -12, 0],
      y: [0, -12, 10, 0],
      opacity: [0.15, 0.32, 0.15],
    },
    duration: 12,
    delay: 0.8,
  },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-light px-6 py-20 text-center text-white">
      {AURORA_BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          aria-hidden
          className={`pointer-events-none absolute mix-blend-screen rounded-full blur-[100px] ${blob.className}`}
          animate={reduce ? undefined : blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.delay,
          }}
        />
      ))}

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
