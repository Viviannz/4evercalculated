"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

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
    <section className="bg-white/[0.03] px-6 py-18">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            Remote Roles
          </div>
          <h2 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
            Roles We Help You Target
          </h2>
          <p className="mx-auto max-w-[600px] text-white/70">
            We tailor your CV and application materials to the specific remote
            role and sector you are going after.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {ROLES.map((r) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-[10px] border border-white/10 bg-white/[0.06] p-6 text-center shadow-[0_2px_6px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.4)]"
            >
              <h3 className="mb-1.5 font-bold text-white">{r.title}</h3>
              <p className="mb-2.5 text-sm text-white/70">{r.body}</p>
              <span className="inline-block rounded-full bg-brand-accent/15 px-2.5 py-1 text-xs font-semibold text-brand-accent">
                {r.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
