"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "/services" },
      { label: "Web Development", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
      { label: "UI/UX Design", href: "/services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

const socials = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Instagram, href: "#" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".footer-item", {
      y: 30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        once: true,
      },
    });
  }, { scope: footerRef });

  return (
    <footer
      ref={footerRef}
      className="relative bg-[var(--color-deep-forest)] text-[var(--color-deep-forest-foreground)] pt-20 pb-10 overflow-hidden border-t border-white"
    >
      {/* Watermark — bottom right */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-[0.04] pointer-events-none select-none">
        <Image
          src="/logo.svg"
          alt=""
          fill
          className="object-contain brightness-0 invert"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pb-16 border-b border-white/5">

          {/* Brand — full width on mobile, 4 cols on desktop */}
          <div className="footer-item col-span-2 md:col-span-4 flex flex-col gap-7">
            <Link href="/" className="inline-block relative w-28 h-10 shrink-0">
              <Image
                src="/logo.svg"
                alt="Clover Tech Nepal"
                fill
                className="object-contain"
              />
            </Link>

            <p className="font-body text-sm leading-relaxed max-w-xs" style={{ color: "rgba(249,249,247,0.45)" }}>
              Engineering digital products from the heart of Kathmandu — built to scale, designed to matter.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary"
                  style={{ border: "1px solid rgba(249,249,247,0.1)" }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Spacer on desktop */}
          <div className="hidden md:block md:col-span-1" />

          {/* Link groups — each 2 cols on md */}
          {footerLinks.map((group, i) => (
            <div key={i} className="footer-item col-span-1 md:col-span-2 flex flex-col gap-5">
              <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map(({ label, href }, j) => (
                  <li key={j}>
                    <Link
                      href={href}
                      className="font-body text-sm transition-colors duration-200 text-[rgba(249,249,247,0.4)] hover:text-white"
                    //   style={{ color: "rgba(249,249,247,0.4)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="footer-item col-span-2 md:col-span-3 flex flex-col gap-5">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="font-body text-sm" style={{ color: "rgba(249,249,247,0.4)" }}>
                  Chabahil, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+97715XXXXXX"
                  className="font-body text-sm hover:text-white transition-colors"
                  style={{ color: "rgba(249,249,247,0.4)" }}
                >
                  +977 1-XXXXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:hello@clovertechnepal.com.np"
                  className="font-body text-sm hover:text-white transition-colors break-all"
                  style={{ color: "rgba(249,249,247,0.4)" }}
                >
                  hello@clovertechnepal.com.np
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-item pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-[11px] uppercase tracking-widest font-medium" style={{ color: "rgba(249,249,247,0.2)" }}>
            © 2026 Clover Tech Nepal. All Rights Reserved.
          </p>
          <p className="font-body text-[11px] uppercase tracking-widest" style={{ color: "rgba(249,249,247,0.2)" }}>
            Made with ♥ in Nepal
          </p>
        </div>

      </div>
    </footer>
  );
}