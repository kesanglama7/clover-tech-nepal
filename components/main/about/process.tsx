"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, Layers, Code2, FlaskConical, Rocket } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Idea Discussion",
    desc: "We meet with you to understand your needs, goals, and vision before proposing a tailored plan.",
    icon: <MessageSquare size={24} />,
    tag: "Consultation"
  },
  {
    number: "02",
    title: "Design & Wireframing",
    desc: "Our designers craft multiple design directions and wireframes for you to review, refine, and choose from.",
    icon: <Layers size={24} />,
    tag: "UI/UX Architecture"
  },
  {
    number: "03",
    title: "Development",
    desc: "Frontend and backend components are built in agile sprints, breaking work into focused, high-quality delivery cycles.",
    icon: <Code2 size={24} />,
    tag: "Engineering"
  },
  {
    number: "04",
    title: "Testing & QA",
    desc: "Comprehensive testing across platforms and devices ensures the product performs reliably before it reaches users.",
    icon: <FlaskConical size={24} />,
    tag: "Quality Assurance"
  },
  {
    number: "05",
    title: "Deployment",
    desc: "The tested product goes live — transitioning from development into a stable, scalable digital reality.",
    icon: <Rocket size={24} />,
    tag: "Launch"
  },
];

export default function AboutProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".process-header", {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: ".process-header",
        start: "top 85%",
      }
    });

    gsap.from(".process-card", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".process-grid",
        start: "top 75%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-[var(--color-background)] relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="process-header max-w-2xl mb-20">
          <span className="text-[var(--color-secondary)] font-body font-bold tracking-[0.2em] uppercase text-xs">
            Our Methodology
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-[var(--color-deep-forest)]">
            How we{" "}
            <span className="text-[var(--color-primary)] italic">Execute.</span>
          </h2>
          <p className="mt-6 font-body text-[var(--color-foreground)] opacity-70 text-lg">
            A systematic approach to digital craftsmanship — ensuring every line of code serves a business purpose.
          </p>
        </div>

        <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-card p-8 rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-surface,#fff)] flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-[var(--color-primary)]/5 text-[var(--color-primary)] rounded-lg">
                    {step.icon}
                  </div>
                  <span className="font-display text-4xl text-[var(--color-primary)] opacity-10">
                    {step.number}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)] mb-2 block">
                  {step.tag}
                </span>
                <h3 className="font-display text-2xl text-[var(--color-deep-forest)] mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-[var(--color-foreground)] opacity-80 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--color-accent)]/10">
                <span className="text-[10px] font-bold text-[var(--color-secondary)] uppercase tracking-widest">
                  Phase {step.number}
                </span>
              </div>
            </div>
          ))}

          <div className="process-card p-8 rounded-xl bg-[var(--color-deep-forest)] text-[var(--color-deep-forest-foreground)] flex flex-col justify-center items-center text-center">
            <h4 className="font-display text-2xl mb-4">Ready to start?</h4>
            <p className="font-body text-sm opacity-70 mb-8">
              Let&apos;s turn your vision into a high-performance reality.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-sm text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
            >
              Get in Touch <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}