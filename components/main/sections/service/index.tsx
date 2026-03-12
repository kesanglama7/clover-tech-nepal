// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { 
//   Code2, 
//   Globe, 
//   Smartphone, 
//   Palette, 
//   Megaphone, 
//   ArrowUpRight 
// } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     title: "Custom Software",
//     desc: "Bespoke enterprise solutions designed to solve unique business challenges with precision engineering.",
//     icon: <Code2 className="w-5 h-5" />,
//   },
//   {
//     title: "Web Development",
//     desc: "High-performance, SEO-optimized websites built with Next.js and modern full-stack architectures.",
//     icon: <Globe className="w-5 h-5" />,
//   },
//   {
//     title: "Mobile Apps",
//     desc: "Native and cross-platform mobile applications that provide seamless experiences on iOS and Android.",
//     icon: <Smartphone className="w-5 h-5" />,
//   },
//   {
//     title: "UI/UX Design",
//     desc: "User-centric interfaces that blend aesthetic beauty with intuitive functional logic.",
//     icon: <Palette className="w-5 h-5" />,
//   },
//   {
//     title: "Digital Marketing",
//     desc: "Data-driven strategies to amplify your brand reach and convert traffic into loyal customers.",
//     icon: <Megaphone className="w-5 h-5" />,
//   },
// ];

// export default function Services() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     // 1. Entrance Animation
//     gsap.from(".service-card", {
//       y: 60,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 80%",
//       },
//     });

//     // 2. Mouse Spotlight Effect Logic
//     const cards = document.querySelectorAll(".service-card");
//     cards.forEach((card) => {
//       card.addEventListener("mousemove", (e: any) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
//         (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
//       });
//     });
//   }, { scope: containerRef });

//   return (
//     <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
//       <div className="container mx-auto px-6">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
//           <div className="max-w-xl">
//             <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
//               Our <span className="gradient-text">Expertise.</span>
//             </h2>
//             <p className="font-body text-muted-foreground text-lg leading-relaxed">
//               From Kathmandu to the world, we deliver technical excellence across five core pillars.
//             </p>
//           </div>
//           <div className="hidden md:block h-[1px] flex-1 bg-foreground/5 mx-12 mb-6" />
//         </div>

//         {/* Dynamic Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div 
//               key={index} 
//               className="service-card group relative overflow-hidden p-8 rounded-3xl border border-foreground/5 bg-white/[0.01] transition-all duration-500 hover:border-primary/20"
//             >
//               {/* Spotlight Glow Effect */}
//               <div 
//                 className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
//                 style={{
//                   background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 170, 169, 0.08), transparent 40%)`
//                 }}
//               />

//               <div className="relative z-20 flex flex-col h-full">
//                 <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-foreground/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-6">
//                   {service.icon}
//                 </div>

//                 <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
//                   {service.title}
//                 </h3>
                
//                 <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
//                   {service.desc}
//                 </p>

//                 <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground/30 group-hover:text-primary transition-colors">
//                   Learn More <ArrowUpRight className="w-3 h-3" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Globe, Smartphone, Palette, Megaphone, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Custom Software",
    desc: "Bespoke systems built around your exact workflow — scalable, maintainable, and engineered for the long run.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Web Development",
    desc: "Fast, accessible web applications built with modern tooling and deployed to edge infrastructure.",
    icon: Globe,
  },
  {
    number: "03",
    title: "Mobile Apps",
    desc: "Cross-platform apps with native feel, deep OS integrations, and support for local APIs like eSewa.",
    icon: Smartphone,
  },
  {
    number: "04",
    title: "UI/UX Design",
    desc: "Interfaces that feel intuitive from the first click. Complex flows turned into experiences people enjoy.",
    icon: Palette,
  },
  {
    number: "05",
    title: "Digital Marketing",
    desc: "Data-led campaigns across SEO, social, and paid — built to grow your audience and convert.",
    icon: Megaphone,
  },
];

const CARD_WIDTH = 340;
const CARD_GAP = 24;

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Mobile: simple stagger entrance, no pin
      gsap.from(".service-card", {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mobile-cards",
          start: "top 85%",
          once: true,
        },
      });
      return; // ← exit early, never touch sliderRef or pin
    }

    // Desktop only from here
    const slider = sliderRef.current;
    const container = containerRef.current;
    if (!slider || !container) return;

    const xMove = slider.scrollWidth - container.offsetWidth;

    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${xMove}`,
        invalidateOnRefresh: true,
      },
    }).to(slider, { x: -xMove, ease: "none" });

    gsap.from(".service-card", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 90%",
        once: true,
      },
    });
  }, { scope: containerRef });

  const CardInner = ({ service }: { service: typeof services[0] }) => {
    const Icon = service.icon;
    return (
      <>
        <div>
          <div className="flex items-start justify-between mb-7">
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Icon className="w-5 h-5" />
            </div>
            <span className="font-body text-xs text-muted/40 tabular-nums">{service.number}</span>
          </div>
          <h3 className="font-display text-xl font-bold text-foreground mb-3 leading-snug">
            {service.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {service.desc}
          </p>
        </div>
        <div className="mt-8 pt-5 border-t border-foreground/8 flex items-center justify-between">
          <span className="font-body text-xs text-muted/50 uppercase tracking-widest">Learn more</span>
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </>
    );
  };

  const cardClass = "service-card flex flex-col justify-between bg-background border border-foreground/8 rounded-2xl p-7 group hover:border-primary/30 transition-colors duration-300";

  return (
    <div ref={containerRef}>

      {/* ── MOBILE: vertical scroll stack ── */}
      <div className="md:hidden py-20 bg-background px-5">
        <div className="mb-10">
          <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight">
            Core <span className="text-primary italic">Capabilities</span>
          </h2>
        </div>

        <div className="mobile-cards flex flex-col gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className={cardClass}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <CardInner service={service} />
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: scroll-pin horizontal ── */}
      <div style={{ overflowX: "clip" }} className="hidden md:block">
        <div className="bg-background h-screen flex flex-col justify-center">
          <div className="mx-auto w-full max-w-[1200px] px-6 mb-12">
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              What We Do
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Core <span className="text-primary italic">Capabilities</span>
            </h2>
          </div>

          <div
            ref={sliderRef}
            className="flex will-change-transform"
            style={{
              gap: `${CARD_GAP}px`,
              paddingLeft: "calc((100vw - 1200px) / 2 + 24px)",
              paddingRight: "80px",
            }}
          >
            {services.map((service, i) => (
              <div
                key={i}
                className={`flex-shrink-0 ${cardClass}`}
                style={{ width: `${CARD_WIDTH}px`, minHeight: "300px", boxShadow: "var(--shadow-card)" }}
              >
                <CardInner service={service} />
              </div>
            ))}
          </div>

          <div className="mx-auto w-full max-w-[1200px] px-6 mt-10">
            <p className="font-body text-xs text-muted/40 flex items-center gap-2">
              <ArrowRight className="w-3 h-3" /> Scroll to explore
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}