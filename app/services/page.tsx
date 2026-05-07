"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {ChevronDown } from "lucide-react";
import { SERVICES_DETAILED } from "@/lib/data/service";

export default function ServicesPage() {
  const [openId, setOpenId] = useState<string | null>(
    SERVICES_DETAILED[0]?.id ?? null
  );

  const toggleService = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-5 py-24 text-[var(--color-deep-forest)] md:px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-14 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[var(--color-primary)]"
          >
            Our Capabilities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="max-w-4xl font-display text-4xl leading-tight text-[var(--color-deep-forest)] sm:text-5xl md:text-7xl"
          >
            Practical software services for{" "}
            <span className="gradient-text italic">real business growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-2xl font-body text-base leading-7 text-black/60 md:text-lg md:leading-8"
          >
            From custom systems and web platforms to mobile apps, QA, UI/UX, and
            digital growth, we help businesses build useful, scalable, and
            easy-to-manage digital solutions.
          </motion.p>
        </header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start">
            {SERVICES_DETAILED.map((service, index) => {
                const Icon = service.icon;
                const isOpen = openId === service.id;

                return (
                <motion.article
                    key={service.id}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className={`overflow-hidden rounded-[1.5rem] border transition-all duration-300 ${
                    isOpen
                        ? "border-[var(--color-primary)]/45 bg-white shadow-[0_22px_70px_rgba(0,0,0,0.08)]"
                        : "border-black/10 bg-white/55 hover:bg-white"
                    }`}
                >
                    <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start gap-4 p-5 text-left md:p-6"
                    >
                    <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                        isOpen
                            ? "bg-[var(--color-deep-forest)] text-white"
                            : "bg-[var(--color-background)] text-black/45"
                        }`}
                    >
                        <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="mb-2 flex items-center gap-3">
                        <span className="font-display text-sm text-black/30">
                            {service.number}
                        </span>

                        <h2 className="font-display text-xl leading-tight md:text-2xl">
                            {service.title}
                        </h2>
                        </div>

                        <p className="font-body text-sm leading-6 text-black/55">
                        {service.shortDesc}
                        </p>
                    </div>

                    <ChevronDown
                        className={`mt-1 h-5 w-5 shrink-0 text-black/35 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[var(--color-primary)]" : ""
                        }`}
                    />
                    </button>

                    <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                        >
                        <div className="px-5 pb-6 md:px-6 md:pb-7">
                            <div className="border-t border-black/10 pt-5">
                            <p className="font-body text-sm leading-7 text-black/65 md:text-base">
                                {service.fullDesc}
                            </p>

                            <div className="mt-6">
                                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-black/35">
                                Expertise
                                </p>

                                <div className="flex flex-wrap gap-2">
                                {service.expertise.map((item) => (
                                    <span
                                    key={item}
                                    className="rounded-full border border-black/10 bg-[var(--color-background)] px-3 py-2 text-[11px] font-semibold text-black/55"
                                    >
                                    {item}
                                    </span>
                                ))}
                                </div>
                            </div>
                            </div>
                        </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </motion.article>
                );
            })}
        </section>

        {/* Bottom CTA */}
        <footer className="mt-16 rounded-[1.75rem] bg-[var(--color-deep-forest)] p-7 text-white md:mt-24 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                Start with clarity
              </p>

              <h3 className="font-display text-3xl leading-tight md:text-4xl">
                Have an idea, system, or product to build?
              </h3>

              <p className="mt-4 max-w-2xl font-body text-sm leading-7 text-white/60 md:text-base">
                Share your requirements with us. We can help plan the right
                approach, choose the right technology, and build a solution that
                fits your business.
              </p>
            </div>

            <button className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105 md:w-auto">
              Start Project
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}