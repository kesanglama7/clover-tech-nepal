// "use client";

// import React, { useRef } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Sparkles, ArrowRight, Users } from 'lucide-react';

// const AboutHeroSection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
//   const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);

//   return (
//     <section 
//       ref={containerRef}
//       className="relative min-h-[95vh] flex items-center pt-32 pb-20 px-6 overflow-hidden bg-[var(--color-background)]"
//     >
//       <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[var(--color-primary)] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
//         <div className="lg:col-span-6 space-y-8">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "circOut" }}
//           >
//             <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-secondary)] font-body text-xs font-bold uppercase tracking-widest">
//               <Sparkles size={14} /> Established 2022
//             </span>
//             <h1 className="mt-6 text-5xl md:text-7xl font-display text-[var(--color-deep-forest)] leading-[0.95] tracking-tight">
//               Welcome to<br />
//               <span className="text-[var(--color-primary)]">Clover Tech</span>{" "}
//               <span className="italic opacity-70">Nepal</span>
//             </h1>
//           </motion.div>

//           <motion.p 
//             className="font-body text-lg text-[var(--color-foreground)] leading-relaxed max-w-xl opacity-90"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             A pioneering software company where innovation meets precision. Our startup ethos gives us the agility to explore novel ideas, adapt swiftly, and deliver solutions that are tailored, innovative, and forward-looking — with{" "}
//             <span className="font-semibold text-[var(--color-primary)]">personalized attention</span>{" "}
//             to every project.
//           </motion.p>

//           <motion.blockquote
//             className="border-l-4 border-[var(--color-primary)] pl-5 font-body text-base italic text-[var(--color-foreground)] opacity-75 max-w-lg"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.45, duration: 0.8 }}
//           >
//             We envision a world where cutting-edge technology seamlessly integrates with human potential — empowering businesses with bespoke software that drives efficiency and ignites growth.
//           </motion.blockquote>

//           <motion.div 
//             className="flex flex-wrap gap-6 pt-4 items-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             <button className="px-8 py-4 bg-[var(--color-deep-forest)] text-[var(--color-deep-forest-foreground)] font-body font-bold rounded-sm shadow-card hover:shadow-card-hover transition-all active:scale-95 flex items-center gap-3 group">
//               Start a Project 
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </button>
//             <a href="#our-story" className="story-link py-2 font-body font-bold text-[var(--color-deep-forest)] underline underline-offset-4">
//               Our Story
//             </a>
//           </motion.div>
//         </div>

//         <div className="lg:col-span-6 relative h-[600px] flex items-center justify-center">
          
//           <motion.div 
//             style={{ y: y1 }}
//             className="absolute left-0 top-12 w-[220px] h-[320px] rounded-[2rem] overflow-hidden border-4 border-white shadow-card-hover z-20"
//           >
//             <Image 
//               src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
//               alt="Team at work" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
//             />
//           </motion.div>

//           <motion.div 
//             style={{ y: y2 }}
//             className="absolute z-30 w-[260px] h-[400px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-card-hover"
//           >
//             <Image 
//               src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80" 
//               alt="UI Design session" fill className="object-cover" 
//             />
//             <div className="absolute inset-x-4 bottom-4 p-4 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl text-white">
//               <p className="text-xs font-bold uppercase tracking-tighter">Live Session</p>
//               <p className="text-sm font-body">Designing your product</p>
//             </div>
//           </motion.div>

//           <motion.div 
//             style={{ y: y3 }}
//             className="absolute right-0 bottom-12 w-[220px] h-[320px] rounded-[2rem] overflow-hidden border-4 border-white shadow-card-hover z-10"
//           >
//             <Image 
//               src="/assets/about/about-us-team-collab.jpg" 
//               alt="Team collaboration" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
//             />
//           </motion.div>

//           <motion.div 
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 1, type: "spring" }}
//             className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white p-2 rounded-full shadow-card flex items-center gap-3 px-6 border border-gray-100 whitespace-nowrap"
//           >
//             <Users size={16} className="text-[var(--color-primary)]" />
//             <span className="text-xs font-body font-bold text-[var(--color-muted)]">
//               Trusted by <strong>100+</strong> happy clients
//             </span>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHeroSection;

"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        ".about-badge",
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        }
      )
        .fromTo(
          ".about-title",
          {
            opacity: 0,
            y: 36,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.45"
        )
        .fromTo(
          ".about-content",
          {
            opacity: 0,
            y: 22,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
          },
          "-=0.55"
        )
        .fromTo(
          ".about-vision-card",
          {
            opacity: 0,
            y: 28,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
          },
          "-=0.45"
        );

      return () => {
        tl.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[var(--color-background)] px-6 py-28 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="about-badge mb-7 flex items-center justify-center gap-4">
          <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
            Est. 2022
          </span>

          <div className="h-2 w-2 rounded-full bg-[var(--color-accent)]/40" />

          <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Clover Tech Nepal
          </span>
        </div>

        <h1 className="about-title mb-10 font-display text-5xl leading-[1.05] text-[var(--color-deep-forest)] md:text-7xl lg:text-8xl">
          Innovating <br />
          <span className="gradient-text italic">with Impact.</span>
        </h1>

        <p className="about-content mx-auto mb-12 max-w-2xl font-body text-lg leading-relaxed text-[var(--color-foreground)] opacity-75 md:text-xl">
          Clover Tech Nepal is a startup software company focused on quality and
          impactful digital solutions. We build custom software that helps
          businesses grow, improve efficiency, and deliver better user
          experiences.
        </p>

        <div className="about-vision-card relative mx-auto max-w-3xl overflow-hidden rounded-2xl bg-[var(--color-deep-forest)] p-8 text-left text-white shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:p-12">
          <div className="absolute right-0 top-0 h-48 w-48 bg-[var(--color-primary)] opacity-10 blur-3xl" />

          <div className="relative z-10">
            <h3 className="mb-4 font-display text-2xl text-white">
              Our Vision
            </h3>

            <p className="font-body text-lg leading-relaxed text-white/80 md:text-xl">
              To combine technology with human potential and create solutions
              that make a real difference in the digital landscape.
            </p>

            <div className="mt-8 flex items-center gap-2">
              <div className="h-1 w-12 rounded-full bg-[var(--color-primary)]" />
              <div className="h-1 w-2 rounded-full bg-[var(--color-primary)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}