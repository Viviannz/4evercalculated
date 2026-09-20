"use client";

import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { Compose } from "@/components/ui/compose";
import { fadeUp, scaleIn, viewportOnce } from "@/lib/motion";

const FEATURES = [
  "Professionally revamped CV — ATS-friendly, tailored to remote roles",
  "Tailored cover letter for a specific job of your choosing",
  "Up to 3 interview preparation sessions",
  "Proven application strategies to increase your success rate",
  "Access to Forever Broadcast WhatsApp group — remote job leads",
  "WhatsApp support throughout your 1-month programme",
];

const INCLUDES = ["CV rewrite included", "Cover letter included", "WhatsApp group access included"];

export function PremiumService() {
  const handleSubmit = (message: string) => {
    const subject = encodeURIComponent("Work From Home Success Pack (£199)");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:forevercalculated@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="service" className="bg-brand-off-white px-6 py-18">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            Personalised Support
          </div>
          <h2 className="mb-4 text-2xl font-extrabold text-brand-navy sm:text-3xl md:text-4xl">
            1-on-1 Career Support
          </h2>
          <p className="mx-auto max-w-[600px] text-brand-grey">
            For remote job seekers who want expert human guidance at every
            stage.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto my-10 max-w-[900px] rounded-lg border-2 border-l-8 border-[#ffc107] bg-[#fff8e1] px-7 py-6"
        >
          <h3 className="mb-2.5 flex items-center gap-2 font-bold text-[#664d03]">
            <AlertTriangle className="h-5 w-5" aria-hidden />
            Please read before purchasing
          </h3>
          <p className="text-[0.95rem] leading-relaxed text-[#664d03]">
            Forevercalculated is a <strong>career and tools service, not a
            recruitment agency.</strong> We do not apply for jobs on your
            behalf, contact employers, or guarantee employment. We provide a
            professionally written CV, tailored cover letter, and job leads
            so that you are fully equipped to secure a remote role yourself.
            Outcomes depend on individual effort, experience, and current
            market conditions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scaleIn}
          className="mt-6 grid grid-cols-1 items-center gap-10 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-light p-8 text-white md:grid-cols-2 md:p-12"
        >
          <div>
            <h2 className="mb-4 text-2xl font-extrabold sm:text-3xl">
              Work From Home
              <br />
              Success Pack
            </h2>
            <p className="mb-6 text-white/80">
              A focused 1-month programme with everything you need to go from
              where you are now to application-ready and interview-confident.
            </p>
            <ul className="list-none space-y-1">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2.5 py-2 text-sm text-white/90">
                  <span className="font-bold text-brand-gold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/15 bg-white/[0.08] p-8 text-center">
            <div className="mb-1 text-sm text-white/60">One-Time Payment</div>
            <div className="text-5xl font-extrabold text-brand-gold">£199</div>
            <div className="mb-5 text-sm text-white/70">
              1-Month Complete Programme
            </div>
            <ul className="mb-6 list-none space-y-1 text-left">
              {INCLUDES.map((i) => (
                <li key={i} className="flex gap-2 py-1 text-sm text-white/85">
                  <span>✨</span>
                  {i}
                </li>
              ))}
            </ul>

            <Compose
              className="text-left"
              defaultValue="Hi, I'd like to get started with the Work From Home Success Pack (£199)."
              placeholder="Tell us a bit about the remote role you're targeting…"
              submitLabel="Message to Get Started"
              maxLength={800}
              onSubmit={handleSubmit}
              aria-label="Message Forevercalculated"
            />

            <p className="mt-3 text-[0.78rem] text-white/50">
              Please review our full Terms &amp; Conditions at
              forevercalculated.com before purchasing.
            </p>
          </div>
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
