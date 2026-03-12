"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
      },
    });

    tl.from(".nl-label", { opacity: 0, y: 16, duration: 0.5, ease: "power2.out" })
      .from(".nl-heading", { opacity: 0, y: 30, duration: 0.7, ease: "power3.out" }, "-=0.2")
      .from(".nl-sub", { opacity: 0, y: 16, duration: 0.5, ease: "power2.out" }, "-=0.3")
      .from(".nl-form", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" }, "-=0.2");
  }, { scope: containerRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      ref={containerRef}
      className="py-28 bg-[var(--color-deep-forest)]"
    >
      <div className="mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            <p className="nl-label font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">
              Newsletter
            </p>
            <h2 className="nl-heading font-display text-4xl md:text-5xl font-bold leading-tight text-[var(--color-deep-forest-foreground)] mb-5">
              Stay in the{" "}
              <span className="text-primary italic">loop.</span>
            </h2>
            <p className="nl-sub font-body text-sm text-[var(--color-deep-forest-foreground)]/50 leading-relaxed max-w-sm">
              Get occasional updates on what we're building, writing, and thinking about — no spam, unsubscribe anytime.
            </p>
          </div>

          {/* Right: form */}
          <div className="nl-form">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                {/* Input group */}
                <div
                  className="flex items-center gap-3 rounded-xl px-5 py-4 transition-all duration-300"
                  style={{
                    background: "rgba(249,249,247,0.05)",
                    border: `1px solid ${focused ? "var(--color-primary)" : "rgba(249,249,247,0.08)"}`,
                  }}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent font-body text-sm text-[var(--color-deep-forest-foreground)] placeholder:text-[var(--color-deep-forest-foreground)]/25 outline-none"
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-body text-xs font-semibold uppercase tracking-widest transition-all duration-300 shrink-0 hover:opacity-90"
                    style={{
                      background: "var(--color-primary)",
                      color: "var(--color-deep-forest-foreground)",
                    }}
                  >
                    Subscribe
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="font-body text-xs mt-3 px-1"
                  style={{ color: "rgba(249,249,247,0.25)" }}>
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              /* Success state */
              <div
                className="flex items-center gap-4 rounded-xl px-5 py-5"
                style={{ background: "rgba(0,167,157,0.1)", border: "1px solid rgba(0,167,157,0.3)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--color-primary)" }}
                >
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-[var(--color-deep-forest-foreground)]">
                    You're subscribed!
                  </p>
                  <p className="font-body text-xs mt-0.5" style={{ color: "rgba(249,249,247,0.4)" }}>
                    We'll be in touch soon.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}