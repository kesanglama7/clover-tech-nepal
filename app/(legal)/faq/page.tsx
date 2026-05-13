"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HelpCircle,
  Building2,
  Code2,
  Workflow,
  CreditCard,
  LifeBuoy,
  Mail,
  Phone,
  Globe,
  Facebook,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const COMPANY_EMAIL = "clovertechnp@gmail.com";
const COMPANY_PHONE = "+977 9702006554";
const WEBSITE_URL = "https://clovertechnepal.com.np";
const FACEBOOK_URL = "https://www.facebook.com/cloverTechNepal";

const faqGroups = [
  {
    id: "general",
    title: "General Information",
    icon: Building2,
    items: [
      {
        question: "What is Clover Tech Nepal?",
        answer:
          "Clover Tech Nepal is a software development company based in Nepal that provides innovative and customized software solutions for businesses and organizations.",
      },
      {
        question: "What services does Clover Tech Nepal offer?",
        answer:
          "Clover Tech Nepal offers custom software development, web and mobile app development, UI/UX design, e-commerce solutions, quality assurance and testing, maintenance, and support.",
      },
      {
        question: "Where is Clover Tech Nepal located?",
        answer:
          "Clover Tech Nepal is located in Chabahil, Kathmandu, Nepal.",
      },
      {
        question: "How can I contact Clover Tech Nepal?",
        answer:
          "You can contact Clover Tech Nepal by phone, email, website, or social media. Our contact details are available at the bottom of this page.",
      },
    ],
  },
  {
    id: "services",
    title: "Services",
    icon: Code2,
    items: [
      {
        question: "What types of custom software can Clover Tech Nepal develop?",
        answer:
          "We can develop custom software solutions based on your business needs, including ERP systems, CRM software, inventory management systems, e-commerce platforms, POS solutions, and healthcare management systems.",
      },
      {
        question: "Does Clover Tech Nepal provide mobile app development services?",
        answer:
          "Yes. Clover Tech Nepal provides mobile app development services for both iOS and Android platforms. We can develop native, hybrid, and cross-platform mobile applications based on project requirements.",
      },
      {
        question: "Can Clover Tech Nepal develop e-commerce websites?",
        answer:
          "Yes. Clover Tech Nepal develops secure, user-friendly, and feature-rich e-commerce websites that help businesses improve their online presence and manage digital sales more effectively.",
      },
    ],
  },
  {
    id: "process",
    title: "Process and Engagement",
    icon: Workflow,
    items: [
      {
        question: "What is Clover Tech Nepal’s development process?",
        answer:
          "Clover Tech Nepal follows an agile development process with continuous collaboration, feedback, and iteration. We prioritize transparency and communication throughout the project lifecycle.",
      },
      {
        question: "How can I engage with Clover Tech Nepal for a project?",
        answer:
          "You can contact us through phone, email, or our website. We will schedule a consultation to understand your project requirements, goals, and expectations. After that, we can provide a proposal and project roadmap.",
      },
      {
        question: "How does Clover Tech Nepal ensure quality in deliverables?",
        answer:
          "We follow a structured quality assurance and testing process throughout development. Our team tests the software carefully to make sure it is reliable, functional, and aligned with project requirements.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing and Payments",
    icon: CreditCard,
    items: [
      {
        question: "How does Clover Tech Nepal determine project pricing?",
        answer:
          "Project pricing depends on factors such as project complexity, scope, technology stack, required features, and estimated development time. We aim to provide transparent and reasonable pricing.",
      },
      {
        question: "What payment options are available at Clover Tech Nepal?",
        answer:
          "Payment options and terms can be discussed and agreed upon during the project initiation phase. We try to provide flexible arrangements based on the project and client requirements.",
      },
    ],
  },
  {
    id: "support",
    title: "Support and Maintenance",
    icon: LifeBuoy,
    items: [
      {
        question: "Does Clover Tech Nepal provide post-project support and maintenance?",
        answer:
          "Yes. Clover Tech Nepal provides post-project support and maintenance services to help ensure your software continues to operate smoothly and efficiently.",
      },
      {
        question: "How can I request support or maintenance after project completion?",
        answer:
          "You can request support or maintenance by contacting our team through phone or email. We will review your request and provide the necessary assistance.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pb-36">
      <section className="px-6 pt-36 pb-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="mb-5 flex items-center gap-3 text-[var(--color-primary)]">
              <HelpCircle size={20} />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                Frequently Asked Questions
              </span>
            </div>

            <h1 className="font-display text-5xl leading-[0.95] tracking-tighter text-[var(--color-deep-forest)] md:text-7xl">
              Questions, <br />
              <span className="italic gradient-text">answered.</span>
            </h1>

            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-black/45">
              Find answers to common questions about Clover Tech Nepal, our
              services, development process, pricing, and support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.32fr_0.68fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[32px] border border-black/5 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)] backdrop-blur">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-black/35">
                Categories
              </p>

              <nav className="space-y-3 font-body text-sm text-black/45">
                {faqGroups.map((group) => (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    className="flex items-center gap-2 transition hover:text-[var(--color-primary)]"
                  >
                    <group.icon size={15} />
                    {group.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-[40px] border border-black/5 bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.05)] md:p-10 lg:p-12"
          >
            <div className="mb-12 rounded-[32px] bg-[var(--color-deep-forest)] p-8 text-white">
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                <HelpCircle size={26} />
              </div>

              <h2 className="font-display text-3xl">How can we help?</h2>

              <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-white/60">
                This page covers the most common questions from clients and
                visitors. For specific project inquiries, you can contact our
                team directly.
              </p>
            </div>

            <div className="space-y-14">
              {faqGroups.map((group, groupIndex) => (
                <FAQGroup
                  key={group.id}
                  id={group.id}
                  index={groupIndex + 1}
                  title={group.title}
                  icon={<group.icon size={18} />}
                  items={group.items}
                />
              ))}
            </div>

            <div
              id="contact"
              className="mt-16 rounded-[32px] bg-[var(--color-deep-forest)] p-8 text-white md:p-10"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                Still have questions?
              </p>

              <h4 className="mt-4 font-display text-3xl">
                Contact Clover Tech Nepal
              </h4>

              <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-white/55">
                If you have a specific inquiry or need more information, feel
                free to reach out to us directly. We look forward to assisting
                you.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                <ContactCard
                  href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}
                  icon={<Phone size={20} />}
                  label="Phone"
                  value={COMPANY_PHONE}
                />

                <ContactCard
                  href={`mailto:${COMPANY_EMAIL}`}
                  icon={<Mail size={20} />}
                  label="Email"
                  value={COMPANY_EMAIL}
                />

                <ContactCard
                  href={WEBSITE_URL}
                  icon={<Globe size={20} />}
                  label="Website"
                  value="clovertechnepal.com.np"
                  external
                />

                <ContactCard
                  href={FACEBOOK_URL}
                  icon={<Facebook size={20} />}
                  label="Facebook"
                  value="Clover Tech Nepal"
                  external
                />

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:col-span-2">
                  <div className="rounded-full bg-white/10 p-3">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                      Location
                    </p>
                    <p className="font-body text-sm">
                      Chabahil, Kathmandu, Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function FAQGroup({
  id,
  index,
  title,
  icon,
  items,
}: {
  id: string;
  index: number;
  title: string;
  icon: React.ReactNode;
  items: {
    question: string;
    answer: string;
  }[];
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-6 flex items-center gap-4">
        <span className="font-mono text-[10px] font-bold text-[var(--color-primary)]/60">
          {String(index).padStart(2, "0")}
        </span>

        <div className="flex size-9 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
          {icon}
        </div>

        <h2 className="font-display text-2xl text-[var(--color-deep-forest)]">
          {title}
        </h2>
      </div>

      <div className="ml-[18px] space-y-4 border-l border-black/5 pl-8">
        {items.map((item, itemIndex) => (
          <motion.details
            key={item.question}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: itemIndex * 0.04 }}
            viewport={{ once: true }}
            className="group rounded-[24px] border border-black/5 bg-black/[0.015] p-5 transition-all open:bg-white open:shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-lg text-[var(--color-deep-forest)]">
              <span>{item.question}</span>

              <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-black/55">
              {item.answer}
            </p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white hover:text-black"
    >
      <div className="rounded-full bg-white/10 p-3 transition-colors group-hover:bg-[var(--color-primary)]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
          {label}
        </p>

        <p className="flex items-center gap-2 truncate font-body text-sm">
          {value}
          {external && <ArrowUpRight size={14} />}
        </p>
      </div>
    </a>
  );
}