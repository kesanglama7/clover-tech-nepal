// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// // Simple staggering animation settings
// const containerVariants = {
//   hidden: { opacity: 0, y: 15 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       ease: [0.22, 1, 0.36, 1],
//       staggerChildren: 0.2, // Delay between each text element
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 15 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// export default function Hero() {
//   return (
//     <section className="min-h-screen w-full flex items-center justify-center bg-background px-6 pt-28 pb-16">
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants as any}
//         className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6"
//       >
//         {/* Simple Label */}
//         <motion.div variants={itemVariants} className="simple-label">
//           Digital solutions made with intuition.
//         </motion.div>

//         {/* Clean H1 */}
//         <motion.h1 
//           variants={itemVariants}
//           className="font-display text-5xl md:text-7xl font-bold leading-[1.15] tracking-tight text-balance"
//         >
//           We translate complexity <br />
//           into elegant <span className="minimal-gradient italic">software.</span>
//         </motion.h1>

//         {/* Short, Professional Description */}
//         <motion.p
//           variants={itemVariants}
//           className="font-body text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed text-balance"
//         >
//           Bespoke digital experiences crafted in Kathmandu, Nepal. We help businesses integrate intuition and logic.
//         </motion.p>

//         {/* Simple CTA Buttons */}
//         <motion.div 
//           variants={itemVariants} 
//           className="flex flex-col sm:flex-row items-center gap-5 pt-8"
//         >
//           <Link
//             href="/portfolio"
//             className="w-full sm:w-auto px-10 py-3.5 bg-primary text-white font-body text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-secondary transition-colors duration-300"
//           >
//             Our Work
//           </Link>
//           <Link
//             href="/contact"
//             className="w-full sm:w-auto px-10 py-3.5 border border-foreground/10 text-foreground font-body text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-foreground hover:text-white transition-all duration-300"
//           >
//             Start a Project
//           </Link>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }














"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Users } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[95vh] flex items-center pt-32 pb-20 px-6 overflow-hidden bg-[var(--color-background)]"
    >
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[var(--color-primary)] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        <div className="lg:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-secondary)] font-body text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} /> Established 2022
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-display text-[var(--color-deep-forest)] leading-[0.95] tracking-tight">
              Welcome to<br />
              <span className="text-[var(--color-primary)]">Clover Tech</span>{" "}
              <span className="italic opacity-70">Nepal</span>
            </h1>
          </motion.div>

          <motion.p 
            className="font-body text-lg text-[var(--color-foreground)] leading-relaxed max-w-xl opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A pioneering software company where innovation meets precision. Our startup ethos gives us the agility to explore novel ideas, adapt swiftly, and deliver solutions that are tailored, innovative, and forward-looking — with{" "}
            <span className="font-semibold text-[var(--color-primary)]">personalized attention</span>{" "}
            to every project.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-6 pt-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/contact" className="px-8 py-4 bg-primary  text-white font-body font-bold rounded-sm shadow-card hover:shadow-card-hover transition-all active:scale-95 flex items-center gap-3 group">
              Start a Project 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about/story" className="story-link py-2 font-body font-bold text-[var(--color-deep-forest)]">
              Our Story
            </Link>
          </motion.div>
        </div>

        <div className="lg:col-span-6 relative h-[600px] flex items-center justify-center">
          
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-0 top-12 w-[220px] h-[320px] rounded-[2rem] overflow-hidden border-4 border-white shadow-card-hover z-20"
          >
            <Image 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
              alt="Team at work" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="absolute z-30 w-[260px] h-[400px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-card-hover"
          >
            <Image 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80" 
              alt="UI Design session" fill className="object-cover" 
            />
            <div className="absolute inset-x-4 bottom-4 p-4 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl text-white">
              <p className="text-xs font-bold uppercase tracking-tighter">Live Session</p>
              <p className="text-sm font-body">Designing your product</p>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y3 }}
            className="absolute right-0 bottom-12 w-[220px] h-[320px] rounded-[2rem] overflow-hidden border-4 border-white shadow-card-hover z-10"
          >
            <Image 
              src="/assets/about/about-us-team-collab.jpg" 
              alt="Team collaboration" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>

          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white p-2 rounded-full shadow-card flex items-center gap-3 px-6 border border-gray-100 whitespace-nowrap"
          >
            <Users size={16} className="text-[var(--color-primary)]" />
            <span className="text-xs font-body font-bold text-[var(--color-muted)]">
              Trusted by <strong>15+</strong> happy clients
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;