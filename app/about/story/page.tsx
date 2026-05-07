"use client";

import React, { useId, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { TEAM_DATA } from "@/lib/data/teams";

gsap.registerPlugin(ScrollTrigger);

export default function OurStoryPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const maskLayerRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<SVGGElement>(null);
  const maskId = useId().replace(/:/g, "");

  useGSAP(
    () => {
      if (!sectionRef.current || !textGroupRef.current || !maskLayerRef.current) {
        return;
      }

      gsap.set(textGroupRef.current, {
        scale: 1,
        svgOrigin: "500 500",
        transformOrigin: "50% 50%",
      });

      gsap.set(maskLayerRef.current, {
        autoAlpha: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=260%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(textGroupRef.current, {
        scale: 46,
        ease: "none",
        duration: 1,
      }).to(maskLayerRef.current, {
        autoAlpha: 0,
        ease: "none",
        duration: 0.01,
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <main className="bg-[var(--color-background)] text-[var(--color-deep-forest)]">
      <section
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden bg-[var(--color-background)]"
      >
        {/* Content behind the mask */}
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-deep-forest)]">
          <div className="relative z-10 max-w-5xl px-6 text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Founded in 2022
            </p>

            <h1 className="font-display text-5xl leading-tight text-white md:text-7xl lg:text-8xl">
              Built from a vision.
              <br />
              Grown through people.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl font-body text-lg leading-8 text-white/65 md:text-xl">
              Clover Tech Nepal began with a belief that technology should not
              just solve problems, but create possibilities. What started with a
              small founding vision became a collaborative team driven by
              innovation, execution, and long-term impact.
            </p>
          </div>

          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(var(--color-primary) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_85%)]" />
        </div>

        {/* Mask overlay */}
        <div
          ref={maskLayerRef}
          className="pointer-events-none absolute inset-0 z-20"
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask
                id={maskId}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1000"
                height="1000"
              >
                <rect x="0" y="0" width="1000" height="1000" fill="white" />

                <g ref={textGroupRef}>
                  <text
                    x="500"
                    y="500"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="black"
                    className="font-display font-bold uppercase"
                    style={{
                      fontSize: "118px",
                      letterSpacing: "-5px",
                    }}
                  >
                    OUR STORY
                  </text>
                </g>
              </mask>
            </defs>

            <rect
              x="0"
              y="0"
              width="1000"
              height="1000"
              fill="var(--color-background)"
              mask={`url(#${maskId})`}
            />
          </svg>
        </div>
      </section>

      {/* <section className="relative overflow-hidden px-6 py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Chapter One
            </p>

            <h2 className="font-display text-5xl leading-tight md:text-7xl">
              2022:
              <br />
              The beginning.
            </h2>

            <p className="mt-8 font-body text-lg leading-8 text-black/60">
              Clover Tech Nepal was established in 2022 as a pioneering software
              company with a shared vision of innovation, excellence, and
              transformative digital solutions.
            </p>

            <p className="mt-5 font-body text-lg leading-8 text-black/60">
              The company was initially founded by{" "}
              <strong className="font-semibold text-[var(--color-deep-forest)]">
                Bijay Lama
              </strong>
              , a Full Stack Developer, whose early vision helped shape the
              company’s startup foundation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2rem] bg-white p-6 shadow-[0_30px_100px_rgba(0,0,0,0.08)]"
          >
            <div className="rounded-[1.5rem] border border-black/10 p-8">
              <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                    Initial Founder
                  </p>
                  <h3 className="mt-2 font-display text-3xl">Bijay Lama</h3>
                </div>

                <span className="rounded-full bg-[var(--color-deep-forest)] px-4 py-2 text-xs font-bold text-white">
                  2022
                </span>
              </div>
               <div className="relative rounded-2xl bg-[var(--color-background)] overflow-hidden h-100">
                <Image
                    src="/assets/team/bijay.jpg"
                    alt="Bijay Lama"
                    width={1000}                    
                    height={1000}
                    className="object-cover"
                />
                </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      <section className="bg-white px-6 py-28 md:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Chapter One
            </p>

            <h2 className="font-display text-5xl leading-tight md:text-7xl">
              The founding circle.
            </h2>

            <p className="mt-6 font-body text-lg leading-8 text-black/60">
              This is where Clover Tech was born. Four visionary co-founders united their expertise in development, mobile, design, and management to transform an early idea into a powerhouse team ready to build the future.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_DATA.founders.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-[var(--color-background)]"
              >
                <div className="relative aspect-[4/4.6] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={70} 
                    className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-black">
                    {member.yearJoined}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl text-white">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm font-medium text-black/55">
                    {member.skill}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-deep-forest)] px-6 py-28 text-white md:py-36">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Our Vision
            </p>

            <h2 className="font-display text-5xl leading-tight md:text-7xl">
              Technology that amplifies human potential.
            </h2>
          </div>

          <div className="space-y-7 font-body text-lg leading-8 text-white/65">
            <p>
              At Clover Tech Nepal, we envision a world where cutting-edge
              technology seamlessly integrates with human potential, amplifying
              possibilities beyond imagination.
            </p>

            <p>
              Our goal is to be a catalyst for digital transformation,
              empowering businesses with bespoke software solutions that drive
              efficiency, elevate user experiences, and ignite growth.
            </p>

            <p>
              As a startup, our lean structure promotes direct collaboration,
              personalized attention, and the freedom to navigate uncharted
              territories with confidence.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
      </section>

      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Chapter Two
            </p>

            <h2 className="font-display text-5xl leading-tight md:text-7xl">
              Growth through execution.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-8 text-black/60">
              From 2023 onward, the team expanded with people focused on QA,
              documentation, project management, and frontend development.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-black/10 md:left-1/2 md:block" />

            <div className="space-y-10">
              {TEAM_DATA.evolution.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55 }}
                  className={`relative grid gap-6 md:grid-cols-2 ${
                    index % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div
                    className={`rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.06)] ${
                      index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[var(--color-background)]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <span className="rounded-full bg-[var(--color-deep-forest)] px-3 py-1 text-xs font-bold text-white">
                          {member.yearJoined}
                        </span>

                        <h3 className="mt-3 font-display text-2xl">
                          {member.name}
                        </h3>

                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-6 text-black/50">
                      {member.skill}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERNS */}
      <section className="bg-white px-6 py-28 md:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Chapter Three
            </p>

            <h2 className="font-display text-5xl leading-tight md:text-7xl">
              The next contributors.
            </h2>

            <p className="mt-6 font-body text-lg leading-8 text-black/60">
              Our journey continues with new contributors joining across backend
              and frontend development, bringing fresh energy into the company.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_DATA.interns.map((intern, index) => (
              <motion.article
                key={intern.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-black/10 bg-[var(--color-background)] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)]"
              >
                <div className="relative mb-6 h-20 w-20 overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={intern.image}
                    alt={intern.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <h3 className="font-display text-xl">{intern.name}</h3>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  {intern.skill}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}