"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Settings2,
  ShieldCheck,
  Zap,
  Maximize,
  Activity,
  Headphones,
  Lock,
  Wallet,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const expertise = [
  {
    title: "Customization",
    desc: "Tailoring products to match specific customer requirements, ensuring a personalized experience.",
    icon: <Settings2 size={20} strokeWidth={1.5} />,
    span: "lg:col-span-2",
  },
  {
    title: "Security",
    desc: "Advanced encryption to shield your data both in transit and at rest.",
    icon: <Lock size={20} strokeWidth={1.5} />,
    span: "lg:col-span-1",
  },
  {
    title: "Scalability",
    desc: "Designing products that adapt and grow alongside your business.",
    icon: <Maximize size={20} strokeWidth={1.5} />,
    span: "lg:col-span-1",
  },
  {
    title: "Responsiveness",
    desc: "Efficient, consistent performance across all devices and screen sizes.",
    icon: <Zap size={20} strokeWidth={1.5} />,
    span: "lg:col-span-1",
  },
  {
    title: "Quality Control",
    desc: "Reliable QA systems that build trust through consistent, tested releases.",
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    span: "lg:col-span-1",
  },
  {
    title: "Product Engineering",
    desc: "Periodic testing and refining at every version for optimal performance.",
    icon: <Activity size={20} strokeWidth={1.5} />,
    span: "lg:col-span-1",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock assistance to troubleshoot issues and keep you moving.",
    icon: <Headphones size={20} strokeWidth={1.5} />,
    span: "lg:col-span-1",
  },
  {
    title: "Cost-Effectiveness",
    desc: "Competitive, value-driven pricing built to support startups and growing teams.",
    icon: <Wallet size={20} strokeWidth={1.5} />,
    span: "lg:col-span-2",
    featured: true,
  },
];

export default function AboutExpertiseSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".expertise-header", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".expertise-header",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".expertise-card", {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".expertise-grid",
          start: "top 90%",
          once: true,
        },
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="pb-32 bg-[var(--color-background)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="expertise-header mb-20 max-w-3xl">
          <span
            className="block font-body text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
            style={{ color: "var(--color-secondary)" }}
          >
            Our expertise
          </span>

          <h2 className="font-display text-5xl md:text-6xl text-[var(--color-deep-forest)] leading-[1.05]">
            We excel in delivering{" "}
            <em className="italic" style={{ color: "var(--color-primary)" }}>
              optimal solutions.
            </em>
          </h2>

          <p className="mt-6 font-body text-base text-[var(--color-foreground)] opacity-70 leading-relaxed max-w-xl">
            Eight core capabilities that shape every product we build — from
            first line of code to long-term support.
          </p>
        </div>

        <div className="expertise-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertise.map((item) => (
            <div
              key={item.title}
              className={`expertise-card group flex flex-col justify-between p-7 rounded-xl min-h-[220px] transition-all duration-300 ${item.span} ${
                item.featured
                  ? "bg-[var(--color-deep-forest)] text-[var(--color-deep-forest-foreground)]"
                  : "border border-[var(--color-accent)]/30 bg-[var(--color-surface,#fff)] hover:border-[var(--color-primary)]/40 hover:shadow-sm"
              }`}
            >
              <div>
                <div
                  className={`mb-5 p-2.5 w-fit rounded-lg transition-all duration-300 ${
                    item.featured
                      ? "text-[var(--color-deep-forest-foreground)]"
                      : "text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]"
                  }`}
                  style={
                    item.featured
                      ? undefined
                      : {
                          background:
                            "color-mix(in srgb, var(--color-primary) 8%, transparent)",
                        }
                  }
                >
                  {item.icon}
                </div>

                <h3
                  className={`font-display text-xl mb-2.5 leading-snug ${
                    item.featured
                      ? "text-[var(--color-deep-forest-foreground)]"
                      : "text-[var(--color-deep-forest)]"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`font-body text-sm leading-relaxed ${
                    item.featured
                      ? "opacity-60 max-w-sm"
                      : "text-[var(--color-foreground)] opacity-65"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}