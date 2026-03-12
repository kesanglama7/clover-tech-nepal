"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Simple staggering animation settings
const containerVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.2, // Delay between each text element
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-background px-6 pt-28 pb-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants as any}
        className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6"
      >
        {/* Simple Label */}
        <motion.div variants={itemVariants} className="simple-label">
          Digital solutions made with intuition.
        </motion.div>

        {/* Clean H1 */}
        <motion.h1 
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl font-bold leading-[1.15] tracking-tight text-balance"
        >
          We translate complexity <br />
          into elegant <span className="minimal-gradient italic">software.</span>
        </motion.h1>

        {/* Short, Professional Description */}
        <motion.p
          variants={itemVariants}
          className="font-body text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed text-balance"
        >
          Bespoke digital experiences crafted in Kathmandu, Nepal. We help businesses integrate intuition and logic.
        </motion.p>

        {/* Simple CTA Buttons */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row items-center gap-5 pt-8"
        >
          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-10 py-3.5 bg-primary text-white font-body text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-secondary transition-colors duration-300"
          >
            Our Work
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-3.5 border border-foreground/10 text-foreground font-body text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-foreground hover:text-white transition-all duration-300"
          >
            Start a Project
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}