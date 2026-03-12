"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Code2, Globe, Smartphone, Palette, Megaphone, ArrowRight 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Custom Software", desc: "Bespoke enterprise solutions designed to solve unique business challenges.", icon: <Code2 /> },
  { title: "Web Development", desc: "High-performance, SEO-optimized websites built with Next.js architectures.", icon: <Globe /> },
  { title: "Mobile Apps", desc: "Native and cross-platform applications for seamless iOS and Android experiences.", icon: <Smartphone /> },
  { title: "UI/UX Design", desc: "User-centric interfaces blending aesthetic beauty with functional logic.", icon: <Palette /> },
  { title: "Digital Marketing", desc: "Data-driven strategies to amplify brand reach and convert traffic.", icon: <Megaphone /> },
];

export default function ServicesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Calculate how far the slider needs to move
    const totalWidth = slider.scrollWidth;
    const viewportWidth = window.innerWidth;
    const xMove = totalWidth - viewportWidth + 100; // Extra padding

    // Horizontal Scroll Trigger
    gsap.to(slider, {
      x: -xMove,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true, // Pins the section while scrolling horizontally
        scrub: 1,  // Smoothly follows scroll progress
        start: "top top",
        end: () => `+=${xMove}`, // Length of scroll matches movement
        invalidateOnRefresh: true,
      },
    });

    // Entrance animation for cards
    gsap.from(".service-card", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-background overflow-hidden">
      <div className="h-screen flex flex-col justify-center">
        {/* Header inside the pinned section */}
        <div className="container mx-auto px-6 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Our Solutions
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
            Moving <span className="gradient-text italic">Ideas Forward.</span>
          </h2>
        </div>

        {/* The Sliding Track */}
        <div ref={sliderRef} className="flex gap-8 px-6 md:px-[10vw] cursor-grab active:cursor-grabbing">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="service-card flex-shrink-0 w-[300px] md:w-[450px] aspect-[4/5] md:aspect-video p-10 rounded-[2rem] bg-white/[0.02] border border-foreground/5 flex flex-col justify-between group hover:border-primary/40 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 group-hover:text-primary transition-all duration-500 transform group-hover:scale-110">
                {service.icon}
              </div>

              <div className="relative z-10">
                <span className="font-mono text-primary/40 text-sm mb-4 block">0{i + 1}</span>
                <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
                  {service.title.split(' ').map((word, j) => (
                    <span key={j} className="block">{word}</span>
                  ))}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-[280px]">
                  {service.desc}
                </p>
                <div className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-[0.2em] text-primary group-hover:gap-5 transition-all">
                  Details <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Subtle glass effect bottom */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
          
          {/* Spacing at the end */}
          <div className="flex-shrink-0 w-[10vw]" />
        </div>
      </div>
    </div>
  );
}