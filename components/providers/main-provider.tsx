'use client';

import { useState, useEffect, ReactNode } from "react";
import Preloader from "../custom/pre-loader";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MainProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Smooth Scroll
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Body scroll lock
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-700"}>
        {children}
      </div>
    </>
  );
}