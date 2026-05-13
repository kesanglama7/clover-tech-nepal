"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about", newTab: false },
      { label: "Our Team", href: "/team", newTab: false },
      { label: "Careers", href: "/careers", newTab: false },
      { label: "Contact", href: "/contact", newTab: false },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "/services", newTab: false },
      { label: "Web Development", href: "/services", newTab: false },
      { label: "Mobile Apps", href: "/services", newTab: false },
      { label: "UI/UX Design", href: "/services", newTab: false },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-and-policy", newTab: true },
      {
        label: "Terms and Conditions",
        href: "/terms-and-conditions",
        newTab: true,
      },
      { label: "FAQ", href: "/faq", newTab: true },
    ],
  },
]

const socials = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Instagram, href: "#" },
]

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!footerRef.current) return

      const items = gsap.utils.toArray<HTMLElement>(".footer-item")

      gsap.fromTo(
        items,
        {
          y: 24,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            once: true,
          },
        }
      )

      const refreshTimer = window.setTimeout(() => {
        ScrollTrigger.refresh()
      }, 300)

      return () => {
        window.clearTimeout(refreshTimer)
      }
    },
    { scope: footerRef }
  )

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden border-t border-white bg-[var(--color-deep-forest)] pt-20 pb-10 text-[var(--color-deep-forest-foreground)]"
    >
      <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 select-none opacity-[0.04]">
        <Image
          src="/logo.svg"
          alt=""
          fill
          className="object-contain brightness-0 invert"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 gap-10 border-b border-white/5 pb-16 md:grid-cols-12 md:gap-8">
          <div className="footer-item col-span-2 flex flex-col gap-7 md:col-span-4">
            <Link href="/" className="relative inline-block h-10 w-28 shrink-0">
              <Image
                src="/logo.svg"
                alt="Clover Tech Nepal"
                fill
                className="object-contain"
              />
            </Link>

            <p
              className="max-w-xs font-body text-sm leading-relaxed"
              style={{ color: "rgba(249,249,247,0.45)" }}
            >
              Engineering digital products from the heart of Kathmandu — built
              to scale, designed to matter.
            </p>

            <div className="flex gap-3">
              {socials.map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noopener noreferrer"}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-primary"
                  style={{ border: "1px solid rgba(249,249,247,0.1)" }}
                >
                  <Icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:col-span-1 md:block" />

          {footerLinks.map((group) => (
            <div
              key={group.title}
              className="footer-item col-span-1 flex flex-col gap-5 md:col-span-2"
            >
              <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {group.title}
              </h4>

              <ul className="flex flex-col gap-3">
                {group.links.map(({ label, href, newTab }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target={newTab ? "_blank" : undefined}
                      rel={newTab ? "noopener noreferrer" : undefined}
                      className="font-body text-sm text-[rgba(249,249,247,0.4)] transition-colors duration-200 hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-item col-span-2 flex flex-col gap-5 md:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Contact
            </h4>

            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span
                  className="font-body text-sm"
                  style={{ color: "rgba(249,249,247,0.4)" }}
                >
                  Chabahil, Kathmandu, Nepal
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="tel:+9779702006554"
                  className="font-body text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(249,249,247,0.4)" }}
                >
                  +977 9702006554
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:clovertechnp@gmail.com"
                  className="break-all font-body text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(249,249,247,0.4)" }}
                >
                  clovertechnp@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-item flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p
            className="font-body text-[11px] font-medium uppercase tracking-widest"
            style={{ color: "rgba(249,249,247,0.2)" }}
          >
            © 2026 Clover Tech Nepal. All Rights Reserved.
          </p>

          <p
            className="font-body text-[11px] uppercase tracking-widest"
            style={{ color: "rgba(249,249,247,0.2)" }}
          >
            Made with ♥ in Nepal
          </p>
        </div>
      </div>
    </footer>
  )
}