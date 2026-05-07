// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// const navLinks = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Services", path: "/services" },
//   { label: "Portfolio", path: "/portfolio" },
//   { label: "Career", path: "/career" },
//   { label: "Contact", path: "/contact" },
// ];

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [menuOpen]);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           scrolled && !menuOpen
//             ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
//             : "bg-transparent py-5"
//         }`}
//       >
//         <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-12">
          
//           <Link href="/" className="relative z-50 flex items-center gap-3 group">
//             <motion.div 
//               whileHover={{ rotate: 15 }} 
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <Image 
//                 src="/logo.svg" 
//                 alt="Clover Tech Logo" 
//                 width={40} 
//                 height={40} 
//                 className="transition-all duration-300"
//               />
//             </motion.div>
//             <div className="hidden sm:block">
//               <span className={`font-display text-lg font-bold tracking-tight leading-none block transition-colors duration-300 ${
//                 menuOpen ? "text-white" : "text-foreground"
//               }`}>
//                 Clover Tech
//               </span>
//               <span className={`block font-body text-[10px] uppercase tracking-[0.35em] leading-none mt-1 transition-colors duration-300 ${
//                 menuOpen ? "text-white/50" : "text-muted-foreground opacity-70"
//               }`}>
//                 Nepal
//               </span>
//             </div>
//           </Link>

//           <nav className="hidden lg:flex items-center gap-10">
//             {navLinks.slice(0, 5).map((link) => (
//               <Link
//                 key={link.path}
//                 href={link.path}
//                 className={`story-link font-body text-[12px] uppercase tracking-[0.15em] transition-colors duration-300 ${
//                   pathname === link.path
//                     ? "text-primary font-semibold"
//                     : "text-muted-foreground hover:text-foreground"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* 3. Right Side: CTA + Mobile Toggle */}
//           <div className="relative z-50 flex items-center gap-6">
//             <Link
//               href="/contact"
//               className={`hidden md:inline-block font-body text-[12px] uppercase tracking-[0.15em] font-medium px-7 py-3 border transition-all duration-300 ${
//                 menuOpen 
//                   ? "border-white/20 text-white hover:border-white" 
//                   : "border-foreground/10 text-foreground hover:border-primary hover:text-primary"
//               }`}
//             >
//               Let&apos;s Talk
//             </Link>

//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className={`cursor-pointer lg:hidden font-body text-[12px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 flex items-center gap-3 ${
//                 menuOpen ? "text-white" : "text-foreground"
//               }`}
//             >
//               <span className="relative flex flex-col gap-1.5 w-5">
//                 <motion.span
//                   className={`block h-[1.5px] w-full origin-center transition-colors duration-300 ${menuOpen ? "bg-white" : "bg-foreground"}`}
//                   animate={menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
//                 />
//                 <motion.span
//                   className={`block h-[1.5px] w-full origin-center transition-colors duration-300 ${menuOpen ? "bg-white" : "bg-foreground"}`}
//                   animate={menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
//                 />
//               </span>
//               <span className="hidden sm:inline transition-opacity duration-300">
//                 {menuOpen ? "Close" : "Menu"}
//               </span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* 4. Full-Screen Circular Reveal Menu */}
//       <AnimatePresence mode="wait">
//         {menuOpen && (
//           <motion.div
//             initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2rem)" }}
//             animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2rem)" }}
//             exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2rem)" }}
//             transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
//             className="fixed inset-0 z-40 section-inverted flex items-center justify-center overflow-hidden"
//           >
//             <nav className="flex flex-col items-center gap-4">
//               {navLinks.map((link, i) => (
//                 <motion.div
//                   key={link.path}
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
//                 >
//                   <Link
//                     href={link.path}
//                     onClick={() => setMenuOpen(false)}
//                     className={`font-display text-5xl sm:text-6xl md:text-8xl font-medium transition-all duration-500 ${
//                       pathname === link.path
//                         ? "gradient-text"
//                         : "text-white/20 hover:text-white"
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.div>
//               ))}
//             </nav>

//             {/* Menu Footer Details */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="absolute bottom-12 left-6 md:left-12 text-left"
//             >
//               <p className="font-body text-[10px] uppercase tracking-[0.3em] text-white/30">Location</p>
//               <p className="font-body text-sm text-white/70 mt-1">Kathmandu, Nepal</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//               className="absolute bottom-12 right-6 md:right-12"
//             >
//               <Image 
//                 src="/logo.svg" 
//                 alt="Logo Decoration" 
//                 width={60} 
//                 height={60} 
//                 className="opacity-10 invert grayscale" 
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Header;
















"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Career", path: "/career" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  return <HeaderContent key={pathname} pathname={pathname} />;
};

type HeaderContentProps = {
  pathname: string;
};

const HeaderContent = ({ pathname }: HeaderContentProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = menuOpen ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled && !menuOpen
            ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-12">
          <Link
            href="/"
            className="relative z-50 flex items-center gap-3 group"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/logo.svg"
                alt="Clover Tech Logo"
                width={40}
                height={40}
                className="transition-all duration-300"
              />
            </motion.div>

            <div className="hidden sm:block">
              <span
                className={`font-display text-lg font-bold tracking-tight leading-none block transition-colors duration-300 ${
                  menuOpen ? "text-white" : "text-foreground"
                }`}
              >
                Clover Tech
              </span>

              <span
                className={`block font-body text-[10px] uppercase tracking-[0.35em] leading-none mt-1 transition-colors duration-300 ${
                  menuOpen
                    ? "text-white/50"
                    : "text-muted-foreground opacity-70"
                }`}
              >
                Nepal
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`story-link font-body text-[12px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-50 flex items-center gap-6">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`hidden md:inline-block font-body text-[12px] uppercase tracking-[0.15em] font-medium px-7 py-3 border transition-all duration-300 ${
                menuOpen
                  ? "border-white/20 text-white hover:border-white"
                  : "border-foreground/10 text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              Let&apos;s Talk
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`cursor-pointer lg:hidden font-body text-[12px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 flex items-center gap-3 ${
                menuOpen ? "text-white" : "text-foreground"
              }`}
            >
              <span className="relative flex flex-col gap-1.5 w-5">
                <motion.span
                  className={`block h-[1.5px] w-full origin-center transition-colors duration-300 ${
                    menuOpen ? "bg-white" : "bg-foreground"
                  }`}
                  animate={
                    menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }
                  }
                />

                <motion.span
                  className={`block h-[1.5px] w-full origin-center transition-colors duration-300 ${
                    menuOpen ? "bg-white" : "bg-foreground"
                  }`}
                  animate={
                    menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }
                  }
                />
              </span>

              <span className="hidden sm:inline transition-opacity duration-300">
                {menuOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2rem)" }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-40 section-inverted flex items-center justify-center overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`font-display text-5xl sm:text-6xl md:text-8xl font-medium transition-all duration-500 ${
                      pathname === link.path
                        ? "gradient-text"
                        : "text-white/20 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-12 left-6 md:left-12 text-left"
            >
              <p className="font-body text-[10px] uppercase tracking-[0.3em] text-white/30">
                Location
              </p>
              <p className="font-body text-sm text-white/70 mt-1">
                Kathmandu, Nepal
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 right-6 md:right-12"
            >
              <Image
                src="/logo.svg"
                alt="Logo Decoration"
                width={60}
                height={60}
                className="opacity-10 invert grayscale"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;