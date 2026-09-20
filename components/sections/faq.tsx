"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const FAQS = [
  {
    q: "Do you guarantee I will get a job?",
    a: "No — and you should be cautious of any service that makes that promise. What we guarantee is a professionally written, ATS-optimised CV, a tailored cover letter, and access to remote job leads. Our clients have an excellent track record, but your outcome depends on your effort, your target role, and current market conditions.",
  },
  {
    q: "Are you a recruitment agency? Will you apply for jobs on my behalf?",
    a: "No. Forevercalculated is a career and resources service. We equip you with everything you need to secure a remote role yourself. We do not contact employers, submit applications, or negotiate offers on your behalf. You do the applying — we make sure you are fully prepared to succeed when you do.",
  },
  {
    q: "How long does it take to find a remote role?",
    a: "This varies significantly depending on your experience, target role, industry, and how consistently you apply. Some clients secure roles within a few weeks. Others take longer. We will give you an honest picture of what to expect based on your specific situation at the start of your service.",
  },
  {
    q: "What happens if I do not secure a role within the month?",
    a: "The 1-month programme gives you all the tools and materials to continue applying independently. Our full policy on extensions and refunds is set out in the Terms and Conditions. We recommend reading these before purchasing.",
  },
  {
    q: "What types of remote roles can you help with?",
    a: "We work across a wide range of sectors — customer service, administration, project management, marketing, tech support, data entry, sales, creative, finance, and more. During your CV revamp we tailor everything to your specific target role and industry.",
  },
  {
    q: "How does the CV revamp work?",
    a: "Once you purchase, you share your current CV and tell us what type of remote role you are targeting. We rewrite it to be ATS-friendly — designed to pass the automated screening systems most employers now use — and tailored to remote hiring standards. You will receive your new CV within the agreed timeframe.",
  },
  {
    q: "How do the interview preparation sessions work?",
    a: "Sessions take place over WhatsApp voice or video call at a time that suits you. We cover the likely interview questions for your target role, practise your answers, and work on your delivery and confidence. You have up to 3 sessions to use within your 1-month programme.",
  },
  {
    q: "What is the Forever Broadcast WhatsApp group?",
    a: "A private WhatsApp community where we share remote job leads, tips, motivation, and updates. Members also support each other through the job search process. Access is included for the duration of your 1-month service.",
  },
  {
    q: "What is the refund policy?",
    a: "Please review the full Terms and Conditions on our website before purchasing. We recommend doing this before making any payment so you start with complete clarity on what is included and what our policies are.",
  },
  {
    q: "Can I ask questions before committing?",
    a: (
      <>
        Absolutely. Message us at{" "}
        <a
          href="mailto:forevercalculated@gmail.com"
          className="text-brand-accent underline"
        >
          forevercalculated@gmail.com
        </a>{" "}
        or reach out on WhatsApp. We would rather you start with the right
        expectations than regret a purchase.
      </>
    ),
  },
  {
    q: "What is the difference between the AI tools and the 1-on-1 service?",
    a: "The AI tool (CV Keyword Extractor) is self-service and instant — great for getting started quickly and practising at your own pace. The £199 1-on-1 service adds a human expert who personally rewrites your CV, prepares you for real interview sessions, and provides tailored support throughout your job search month.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-18">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
            FAQ
          </div>
          <h2 className="mb-4 text-2xl font-extrabold text-brand-navy sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-[600px] text-brand-grey">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mt-10 max-w-[800px] rounded-[10px] border-2 border-[#ffc107] bg-[#fff3cd] px-6 py-5"
        >
          <p className="text-[0.95rem] leading-relaxed text-[#664d03]">
            <strong>The most important thing to understand:</strong>{" "}
            Forevercalculated is a career and tools service, not a
            recruitment agency. We do not apply for jobs on your behalf or
            guarantee employment. We give you everything you need to secure a
            remote role yourself.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 max-w-[800px]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <motion.div
                key={item.q}
                variants={fadeUp}
                className="mb-3 overflow-hidden rounded-[10px] border border-brand-border"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between bg-white px-6 py-5 text-left text-[0.95rem] font-semibold text-brand-navy"
                >
                  {item.q}
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-none"
                  >
                    <ChevronDown className="h-5 w-5 text-brand-accent" aria-hidden />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-brand-border"
                    >
                      <div className="px-6 pb-5 pt-4 text-[0.95rem] leading-relaxed text-[#444]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
