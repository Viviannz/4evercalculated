"use client";

import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

const PROGRAMME_FEATURES = [
  "Professionally revamped CV — ATS-friendly, tailored to remote roles",
  "Tailored cover letter for a specific job of your choosing",
  "Up to 3 interview preparation sessions",
  "Access to Forever Broadcast WhatsApp group — remote job leads",
  "WhatsApp support throughout your 1-month programme",
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-18">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            Pricing
          </div>
          <h2 className="mb-4 text-2xl font-extrabold text-brand-navy sm:text-3xl md:text-4xl">
            Choose the Support Level That&apos;s Right for You
          </h2>
          <p className="mx-auto max-w-[600px] text-brand-grey">
            From a one-off CV refresh to full 1-on-1 support — pick the option
            that matches how much help you want along the way.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mt-8 max-w-[900px] rounded-lg border-2 border-l-8 border-[#ffc107] bg-[#fff8e1] px-7 py-6"
        >
          <h3 className="mb-2.5 flex items-center gap-2 font-bold text-[#664d03]">
            <AlertTriangle className="h-5 w-5" aria-hidden />
            Please read before purchasing
          </h3>
          <p className="text-[0.95rem] leading-relaxed text-[#664d03]">
            Forevercalculated is a <strong>career and tools service, not a
            recruitment agency.</strong> We do not apply for jobs on your
            behalf, contact employers, or guarantee employment. We provide
            professionally written application materials and job leads so
            that you are fully equipped to secure a remote role yourself.
            Outcomes depend on individual effort, experience, and current
            market conditions.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 grid max-w-[900px] grid-cols-1 items-stretch gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div
            variants={scaleIn}
            whileHover={{ y: -6 }}
            className="flex flex-col rounded-xl border border-brand-border bg-white p-7 text-center transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
          >
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-grey">
              Bundle
            </div>
            <h3 className="mb-1 text-lg font-bold text-brand-navy">
              CV &amp; Cover Letter Bundle
            </h3>
            <div className="mb-1 text-4xl font-extrabold text-brand-navy">£75</div>
            <div className="mb-2 text-sm text-brand-grey">3 CVs + 3 Cover Letters</div>
            <div className="mb-6 text-sm font-semibold text-brand-accent">
              Tailored to 3 different roles
            </div>
            <motion.a
              href="mailto:forevercalculated@gmail.com?subject=CV%20%26%20Cover%20Letter%20Bundle%20(%C2%A375)"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="mt-auto block rounded-md bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              Get Started
            </motion.a>
          </motion.div>

          <motion.div
            id="service"
            variants={scaleIn}
            whileHover={{ y: -6 }}
            className="relative flex scroll-mt-24 flex-col rounded-xl border-2 border-brand-gold bg-gradient-to-br from-brand-navy to-brand-navy-light p-7 text-center text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)]"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-navy">
              Most Popular
            </div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/70">
              1-Month Complete Programme
            </div>
            <h3 className="mb-1 text-lg font-bold">
              Work From Home Success Pack
            </h3>
            <div className="mb-4 text-4xl font-extrabold text-brand-gold">£199</div>
            <ul className="mb-6 list-none space-y-1.5 text-left">
              {PROGRAMME_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/90">
                  <span className="mt-0.5 font-bold text-brand-gold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <motion.a
              href="mailto:forevercalculated@gmail.com?subject=Work%20From%20Home%20Success%20Pack%20(%C2%A3199)"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="mt-auto block rounded-md bg-brand-gold px-4 py-2.5 text-sm font-bold text-brand-navy transition-opacity hover:opacity-90"
            >
              Get Started
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-10 rounded-xl bg-brand-light-grey p-8 text-center"
        >
          <p className="mb-4 text-brand-grey">See what our clients are saying</p>
          <div className="flex flex-wrap justify-center gap-5">
            <motion.a
              href="https://instagram.com/forevercalculated"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              className="font-semibold text-brand-accent hover:underline"
            >
              🌟 Success Stories @forevercalculated
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
