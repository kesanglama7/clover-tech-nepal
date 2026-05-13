"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Palette, Layout, Search, Vote } from "lucide-react";
import { PROJECTS } from "@/lib/data/portfolios";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <section className="px-6 pt-36 pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--color-primary)]"
              >
                Clover Tech Nepal Portfolio
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 font-display text-5xl leading-[0.95] tracking-tighter text-[var(--color-deep-forest)] md:text-7xl"
              >
                Engineering <br />
                <span className="italic gradient-text">Distinction.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="max-w-sm border-l border-black/10 pl-6 font-body text-base leading-relaxed text-black/45"
            >
              Transforming complex digital requirements into high-end architectural reality.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl space-y-28">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`grid gap-8 rounded-[36px] border border-black/5 bg-white/70 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.06)] backdrop-blur md:p-6 lg:grid-cols-12 lg:items-center lg:gap-10 ${
                index % 2 !== 0 ? "lg:[&_.project-image]:order-2" : ""
              }`}
            >
              <div className="project-image lg:col-span-7">
                <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-[28px] bg-black/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    priority={index === 0}
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-70" />

                  <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-black shadow-lg">
                    {project.role}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <span className="inline-flex rounded-full border border-[var(--color-primary)]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)]">
                  {project.category}
                </span>

                <h3 className="mt-5 font-display text-3xl leading-tight text-[var(--color-deep-forest)] md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-4 font-body text-base leading-relaxed text-black/50">
                  {project.description}
                </p>

              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-deep-forest)] px-6 py-28 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 max-w-xl">
            <h2 className="font-display text-4xl italic md:text-5xl">
              Extended Capabilities
            </h2>
            <p className="mt-4 font-body leading-relaxed text-white/45">
              Beyond product development, we provide specialized consulting and infrastructure support for global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <ServiceCard
              icon={<Search size={28} />}
              title="Silicon Soft & I.T."
              desc="Architectural oversight and strategic I.T. consulting for enterprise modernization."
            />
            <ServiceCard
              icon={<Palette size={28} />}
              title="Graphic Design"
              desc="High-fidelity visual identity, branding, and asset creation for premium digital brands."
            />
            <ServiceCard
              icon={<Vote size={28} />}
              title="Mobile Survey App"
              desc="Secure mobile platforms designed for data-intensive organizational field surveys."
            />
            <ServiceCard
              icon={<Layout size={28} />}
              title="Custom App Dev"
              desc="Bespoke application development tailored to complex business workflows."
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-32 text-center">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.96 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <h3 className="font-display text-4xl leading-tight text-[var(--color-deep-forest)] md:text-6xl">
            Ready to start a project?
          </h3>
          <Link href="/contact" className="inline-block">
            <button className="mt-10 rounded-full bg-[var(--color-primary)] px-12 py-5 text-base font-bold text-white shadow-lg transition-all duration-500 hover:bg-[var(--color-deep-forest)] cursor-pointer">
                Let&apos;s Collaborate
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:bg-white hover:text-black">
      <div className="mb-7 text-[var(--color-primary)] transition-colors group-hover:text-black">
        {icon}
      </div>
      <h4 className="font-display text-2xl">{title}</h4>
      <p className="mt-4 font-body text-sm leading-relaxed text-white/45 transition-colors group-hover:text-black/60">
        {desc}
      </p>
    </div>
  );
}