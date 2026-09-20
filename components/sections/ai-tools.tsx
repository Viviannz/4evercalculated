"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function AiTools() {
  return (
    <section id="tools" className="bg-brand-off-white px-6 py-18">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            AI Career Assistants
          </div>
          <h2 className="mb-4 text-2xl font-extrabold text-brand-navy sm:text-3xl md:text-4xl">
            Powerful Tools, Free to Start
          </h2>
          <p className="mx-auto max-w-[600px] text-brand-grey">
            Designed to help you land your dream remote job faster and easier
            than ever before.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-xl border border-brand-border bg-white p-7 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
          >
            <div className="mb-4 text-3xl">🔐💽</div>
            <h3 className="mb-2.5 text-lg font-bold text-brand-navy">
              CV Keyword Extractor
            </h3>
            <p className="mb-5 text-brand-grey">
              Extract key skills from your CV and match them to job roles —
              find your best-fit remote positions and stand out to employers.
            </p>
            <motion.a
              href="https://studio.pickaxe.co/STUDIOY9PMGFPKC7PBNUG/ZBXRPDWK5R"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block rounded-md bg-brand-accent-light px-5 py-2.5 text-sm font-semibold text-brand-accent transition-colors hover:bg-brand-accent-hover"
            >
              Try Free →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
