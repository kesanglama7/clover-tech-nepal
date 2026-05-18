"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Projects Delivered", value: 10, suffix: "+" },
  { label: "Lines of Code", value: 500, suffix: "K+" },
  { label: "Happy Clients", value: 10, suffix: "" },
  { label: "Coffee Consumed", value: 1200, suffix: "+" },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the numbers from 0 to their target value
    const counters = document.querySelectorAll(".stat-number");
    
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target") || "0");
      
      gsap.to(counter, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 }, // Ensures it increments by whole numbers
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    });

    // Fade in the text blocks
    gsap.from(".stat-item", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 bg-deep-forest text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item flex flex-col gap-2">
              <div className="font-display text-5xl md:text-6xl font-bold text-primary">
                <span className="stat-number" data-target={stat.value}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}