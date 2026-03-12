"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%", // Trigger when the section is 70% in view
        toggleActions: "play none none none",
      },
    });

    // 1. Reveal the "Who We Are" label
    tl.from(".about-label", {
      opacity: 0,
      y: 20,
      duration: 0.6,
    })
    // 2. Reveal the Title
    .from(".about-title", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.3")
    // 3. Line-by-line reveal for the description
    .from(".about-description span", {
      y: "100%",
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    }, "-=0.5")
    // 4. Button fade in
    .from(".about-btn", {
      opacity: 0,
      x: -20,
      duration: 0.6,
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Small Label */}
          <div className="lg:col-span-4">
            <div className="about-label flex items-center gap-4">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                Who We Are?
              </span>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-8 space-y-10">
            <h2 className="about-title font-display text-5xl md:text-7xl font-bold tracking-tight">
              Clover Tech <span className="text-primary italic font-medium text-4xl md:text-6xl ml-2">Nepal</span>
            </h2>

            {/* The Animated Description */}
            <p ref={textRef} className="about-description font-body text-xl md:text-3xl leading-snug text-foreground/80 max-w-4xl">
              {/* Breaking text into spans for the GSAP reveal effect */}
              {[
                "We help businesses imagine and create the",
                "digital experiences of tomorrow. We succeed",
                "together by blending the best of entrepreneurship,",
                "startup thinking, and world-class engineering."
              ].map((line, i) => (
                <span key={i} className="block overflow-hidden py-1">
                  <span className="inline-block">{line}</span>
                </span>
              ))}
            </p>

            <div className="about-btn pt-6">
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-4 font-body text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
              >
                Learn More 
                <span className="w-10 h-[1px] bg-foreground group-hover:bg-primary group-hover:w-14 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}