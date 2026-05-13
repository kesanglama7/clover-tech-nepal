"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Cpu,
  Globe,
  ShieldCheck,
  Clock,
} from "lucide-react";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <section className="px-6 pt-36 pb-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-primary)]">
              Careers at Clover Tech
            </span>

            <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tighter text-[var(--color-deep-forest)] md:text-7xl">
              Build with purpose. <br />
              <span className="italic gradient-text">Grow with craft.</span>
            </h1>

            <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-black/50">
              We currently do not have any open vacancies. This page shares our
              culture, working style, and the kind of people we look forward to
              welcoming when new roles become available.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] bg-[var(--color-deep-forest)] p-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)] md:p-14"
          >
            <div className="absolute right-0 top-0 h-72 w-72 -translate-y-1/2 translate-x-1/3 rounded-full bg-[var(--color-primary)]/20 blur-[90px]" />

            <div className="relative z-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/60">
                  Hiring Status
                </span>

                <h2 className="mt-6 font-display text-4xl italic md:text-5xl">
                  No Current Openings.
                </h2>

                <p className="mt-5 max-w-xl font-body leading-relaxed text-white/60">
                  We are not hiring for any roles at the moment. When new
                  opportunities become available, we will update this page with
                  role details, requirements, and the application process.
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                  <Clock size={26} />
                </div>

                <h3 className="font-display text-2xl">Please check back later</h3>

                <p className="mt-3 font-body text-sm leading-relaxed text-white/45">
                  We appreciate your interest in Clover Tech. Our careers page
                  will be updated once a suitable position is open.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black/[0.02] px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Our Culture
            </span>

            <h2 className="mt-5 font-display text-4xl leading-tight text-[var(--color-deep-forest)] md:text-5xl">
              Designed for people who care about quality.
            </h2>
          </div>

          <div className="space-y-5 font-body text-black/50">
            <p className="leading-relaxed">
              At Clover Tech, we focus on building reliable, thoughtful, and
              polished digital products. From business platforms to customer
              experiences, our team values clean execution, strong communication,
              and long-term product thinking.
            </p>

            <p className="leading-relaxed">
              We care about modern technology, beautiful interfaces, stable
              systems, and practical solutions that help real businesses move
              faster.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--color-primary)]">
              How We Work
            </span>

            <h2 className="mt-5 font-display text-4xl text-[var(--color-deep-forest)] md:text-5xl">
              Our working principles
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FeatureCard
              icon={<Code2 size={26} />}
              title="Modern Engineering"
              desc="We prefer clean, scalable, and maintainable solutions using modern frontend and backend technologies."
            />

            <FeatureCard
              icon={<Sparkles size={26} />}
              title="Design-Focused Delivery"
              desc="We believe good software should feel clear, smooth, and easy to use from the first interaction."
            />

            <FeatureCard
              icon={<ShieldCheck size={26} />}
              title="Reliable Quality"
              desc="We value testing, review, and stable delivery so products can perform confidently in real use."
            />

            <FeatureCard
              icon={<Globe size={26} />}
              title="Global Mindset"
              desc="We build for local and international clients, with attention to performance, usability, and trust."
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-36">
        <div className="mx-auto max-w-5xl border-t border-black/5 pt-20">
          <div className="grid gap-10 md:grid-cols-3">
            <ValueItem
              icon={<Cpu size={20} />}
              title="Tech First"
              desc="We use technology thoughtfully to solve real business problems."
            />

            <ValueItem
              icon={<Sparkles size={20} />}
              title="Craft Matters"
              desc="Small details, smooth UX, and clean interfaces are part of our standard."
            />

            <ValueItem
              icon={<Globe size={20} />}
              title="Long-Term Thinking"
              desc="We build products that are easier to maintain, improve, and scale."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
    >
      <div className="mb-7 flex size-14 items-center justify-center rounded-2xl bg-[var(--color-primary)]/15 text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
        {icon}
      </div>

      <h3 className="font-display text-2xl text-[var(--color-deep-forest)]">
        {title}
      </h3>

      <p className="mt-4 font-body text-sm leading-relaxed text-black/45">
        {desc}
      </p>
    </motion.div>
  );
}

function ValueItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <div className="mb-5 text-[var(--color-primary)]">{icon}</div>

      <h4 className="font-display text-xl text-[var(--color-deep-forest)]">
        {title}
      </h4>

      <p className="mt-3 font-body text-sm leading-relaxed text-black/40">
        {desc}
      </p>
    </div>
  );
}