"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    desc: "We dive deep into your business logic, identifying pain points and defining the roadmap for your digital future.",
  },
  {
    number: "02",
    title: "Intuitive Design",
    desc: "Our design team crafts high-fidelity interfaces that prioritize user experience and brand identity.",
  },
  {
    number: "03",
    title: "Engineering Excellence",
    desc: "Powered by the latest reliable tech stacks, we transform designs into scalable, high-performance software.",
  },
  {
    number: "04",
    title: "Deployment & Growth",
    desc: "We ensure a smooth launch and provide ongoing support to scale your product as your business grows.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animate the vertical line drawing down
    gsap.from(".process-line", {
      scaleY: 0,
      transformOrigin: "top center",
      ease: "none",
      scrollTrigger: {
        trigger: ".process-container",
        start: "top 20%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    // 2. Animate each step entering
    gsap.from(".process-step", {
      opacity: 0,
      x: (i) => (i % 2 === 0 ? -50 : 50), // Alternating slide direction
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".process-container",
        start: "top 60%",
        end: "bottom 20%",
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            How We <span className="gradient-text italic">Succeed.</span>
          </h2>
        </div>

        <div className="process-container relative max-w-5xl mx-auto">
          {/* The Vertical Line */}
          <div className="process-line absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-primary/20 hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`process-step flex flex-col md:flex-row items-center justify-between gap-12 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 !== 0 ? "md:items-end md:text-right" : "md:items-start"}`}>
                    <span className="font-mono text-primary text-sm font-bold tracking-[0.3em] mb-4">
                      STEP {step.number}
                    </span>
                    <h3 className="font-display text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Central Circle Node */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,170,169,0.2)]">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Empty Spacer for layout balance */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}