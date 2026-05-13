"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  ShieldAlert,
  Globe,
  Mail,
  Phone,
  Lock,
  Copyright,
  AlertTriangle,
  RefreshCcw,
} from "lucide-react";

const COMPANY_EMAIL = "clovertechnp@gmail.com";
const COMPANY_PHONE = "+977 9702006554";

export default function TermsPage() {
  const lastUpdated = "May 13, 2026";

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
              <Scale size={20} />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                Legal Framework
              </span>
            </div>

            <h1 className="font-display text-5xl leading-[0.95] tracking-tighter text-[var(--color-deep-forest)] md:text-7xl">
              Terms & <br />
              <span className="italic gradient-text">Conditions.</span>
            </h1>

            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-black/45">
              These Terms & Conditions explain the rules for using Clover Tech
              Nepal&apos;s website, digital services, and related business
              communications.
            </p>

            <p className="mt-5 inline-flex rounded-full border border-black/5 bg-white px-4 py-2 font-body text-xs text-black/45 shadow-sm">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.32fr_0.68fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[32px] border border-black/5 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)] backdrop-blur">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-black/35">
                Contents
              </p>

              <nav className="space-y-3 font-body text-sm text-black/45">
                <a href="#overview" className="block transition hover:text-[var(--color-primary)]">
                  Overview
                </a>
                <a href="#definitions" className="block transition hover:text-[var(--color-primary)]">
                  Definitions
                </a>
                <a href="#website-use" className="block transition hover:text-[var(--color-primary)]">
                  Website Use
                </a>
                <a href="#services" className="block transition hover:text-[var(--color-primary)]">
                  Services
                </a>
                <a href="#intellectual-property" className="block transition hover:text-[var(--color-primary)]">
                  Intellectual Property
                </a>
                <a href="#liability" className="block transition hover:text-[var(--color-primary)]">
                  Limitation of Liability
                </a>
                <a href="#law" className="block transition hover:text-[var(--color-primary)]">
                  Governing Law
                </a>
                <a href="#contact" className="block transition hover:text-[var(--color-primary)]">
                  Contact
                </a>
              </nav>
            </div>
          </aside>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-[40px] border border-black/5 bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.05)] md:p-10 lg:p-12"
          >
            <div
              id="overview"
              className="mb-12 rounded-[32px] bg-[var(--color-deep-forest)] p-8 text-white"
            >
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                <FileText size={26} />
              </div>

              <h2 className="font-display text-3xl">Agreement Overview</h2>

              <p className="mt-4 font-body text-sm leading-relaxed text-white/60">
                Welcome to Clover Tech Nepal Pvt. Ltd. By accessing our website
                or using our services, you agree to follow these Terms &
                Conditions. Please read them carefully before using our website
                or engaging with our services.
              </p>
            </div>

            <div className="space-y-12">
              <LegalSection
                id="definitions"
                number="01"
                title="Definitions"
                icon={<FileText size={18} />}
              >
                <ul className="space-y-4">
                  <li>
                    <strong>&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;</strong>{" "}
                    refers to Clover Tech Nepal Pvt. Ltd, located in Chabahil,
                    Kathmandu, Nepal.
                  </li>
                  <li>
                    <strong>&quot;Website&quot;</strong> refers to the official
                    website and digital pages operated by Clover Tech Nepal.
                  </li>
                  <li>
                    <strong>&quot;Services&quot;</strong> refers to software
                    development, web development, mobile application development,
                    UI/UX design, consulting, maintenance, and other digital
                    services provided by Clover Tech Nepal.
                  </li>
                  <li>
                    <strong>&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;</strong>{" "}
                    refers to any person, business, or organization accessing
                    our website or using our services.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection
                id="acceptance"
                number="02"
                title="Acceptance of Terms"
                icon={<ShieldAlert size={18} />}
              >
                <p>
                  By using our website or contacting us for services, you
                  acknowledge that you have read, understood, and agreed to these
                  Terms & Conditions. If you do not agree with any part of these
                  terms, you should discontinue use of our website and services.
                </p>
              </LegalSection>

              <LegalSection
                id="website-use"
                number="03"
                title="Use of the Website"
                icon={<Globe size={18} />}
              >
                <p>
                  You agree to use our website only for lawful purposes. You must
                  not attempt to damage, interrupt, misuse, or gain unauthorized
                  access to our website, server, data, forms, or related systems.
                </p>
              </LegalSection>

              <LegalSection
                id="services"
                number="04"
                title="Services and Project Communication"
                icon={<RefreshCcw size={18} />}
              >
                <p>
                  Information shown on our website is provided for general
                  business and informational purposes. Final project scope,
                  pricing, timeline, deliverables, revisions, maintenance, and
                  payment terms will be agreed separately through written
                  communication, quotation, proposal, invoice, or contract.
                </p>
              </LegalSection>

              <LegalSection
                id="intellectual-property"
                number="05"
                title="Intellectual Property"
                icon={<Copyright size={18} />}
              >
                <p>
                  All website content, branding, graphics, layouts, text, icons,
                  designs, and other materials are owned by Clover Tech Nepal
                  Pvt. Ltd or used with permission. You may not copy, reproduce,
                  modify, distribute, or reuse our content without prior written
                  approval.
                </p>
              </LegalSection>

              <LegalSection
                id="privacy"
                number="06"
                title="Information Submitted Through the Website"
                icon={<Lock size={18} />}
              >
                <p>
                  When you contact us through our website, email, or phone, you
                  may provide details such as your name, email address, phone
                  number, company name, or project requirements. We use this
                  information only to respond to your inquiry, discuss your
                  requirements, and provide relevant service communication.
                </p>
              </LegalSection>

              <LegalSection
                id="liability"
                number="07"
                title="Limitation of Liability"
                icon={<AlertTriangle size={18} />}
              >
                <p>
                  We make reasonable efforts to keep website information accurate
                  and updated. However, we do not guarantee that all information
                  will always be complete, current, or error-free. Clover Tech
                  Nepal Pvt. Ltd shall not be responsible for any direct,
                  indirect, incidental, or consequential loss arising from the use
                  of our website or reliance on website information.
                </p>
              </LegalSection>

              <LegalSection
                id="third-party"
                number="08"
                title="Third-Party Links and Tools"
                icon={<Globe size={18} />}
              >
                <p>
                  Our website may include links, maps, embedded tools, or
                  third-party services. We are not responsible for the content,
                  privacy practices, availability, or accuracy of third-party
                  websites or services.
                </p>
              </LegalSection>

              <LegalSection
                id="law"
                number="09"
                title="Governing Law"
                icon={<Scale size={18} />}
              >
                <p>
                  These Terms & Conditions shall be governed by and interpreted
                  in accordance with the laws of Nepal. Any disputes shall be
                  handled under the applicable legal jurisdiction of Nepal.
                </p>
              </LegalSection>

              <LegalSection
                id="changes"
                number="10"
                title="Changes to These Terms"
                icon={<RefreshCcw size={18} />}
              >
                <p>
                  We may update or revise these Terms & Conditions from time to
                  time. Any changes will be posted on this page with an updated
                  date. Continued use of our website after updates means you
                  accept the revised terms.
                </p>
              </LegalSection>
            </div>

            <div
              id="contact"
              className="mt-16 rounded-[32px] bg-[var(--color-deep-forest)] p-8 text-white md:p-10"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                Contact Information
              </p>

              <h4 className="mt-4 font-display text-3xl">
                Questions or concerns?
              </h4>

              <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-white/55">
                If you have any questions about these Terms & Conditions, you can
                contact Clover Tech Nepal using the details below.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 2xl:grid-cols-2">
                <a
                  href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white hover:text-black"
                >
                  <div className="rounded-full bg-white/10 p-3 transition-colors group-hover:bg-[var(--color-primary)]">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                      Call Us
                    </p>
                    <p className="font-body text-sm">{COMPANY_PHONE}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white hover:text-black"
                >
                  <div className="rounded-full bg-white/10 p-3 transition-colors group-hover:bg-[var(--color-primary)]">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                      Email Us
                    </p>
                    <p className="font-body text-sm">{COMPANY_EMAIL}</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function LegalSection({
  id,
  number,
  title,
  children,
  icon,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-[10px] font-bold text-[var(--color-primary)]/60">
          {number}
        </span>

        <div className="flex size-9 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
          {icon}
        </div>

        <h2 className="font-display text-2xl text-[var(--color-deep-forest)]">
          {title}
        </h2>
      </div>

      <div className="ml-[18px] border-l border-black/5 pl-8 font-body text-sm leading-relaxed text-black/55">
        {children}
      </div>
    </section>
  );
}