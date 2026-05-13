"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  UserRound,
  Database,
  Mail,
  Phone,
  Globe,
  Lock,
  Cookie,
  Baby,
  RefreshCcw,
  Scale,
  Eye,
  Server,
  ShieldCheck,
} from "lucide-react";

const COMPANY_EMAIL = "clovertechnp@gmail.com";
const COMPANY_PHONE = "+977 9702006554";
const WEBSITE_URL = "https://clovertechnepal.com.np/";

export default function PrivacyPolicyPage() {
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
              <Shield size={20} />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                Privacy & Data Protection
              </span>
            </div>

            <h1 className="font-display text-5xl leading-[0.95] tracking-tighter text-[var(--color-deep-forest)] md:text-7xl">
              Privacy <br />
              <span className="italic gradient-text">Policy.</span>
            </h1>

            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-black/45">
              This Privacy Policy explains how Clover Tech Nepal Pvt. Ltd
              collects, uses, protects, and manages information shared through
              our website and online services.
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
                <a
                  href="#overview"
                  className="block transition hover:text-[var(--color-primary)]"
                >
                  Overview
                </a>
                <a
                  href="#consent"
                  className="block transition hover:text-[var(--color-primary)]"
                >
                  Consent
                </a>
                <a
                  href="#information"
                  className="block transition hover:text-[var(--color-primary)]"
                >
                  Information We Collect
                </a>
                <a
                  href="#usage"
                  className="block transition hover:text-[var(--color-primary)]"
                >
                  How We Use Information
                </a>
                <a
                  href="#log-files"
                  className="block transition hover:text-[var(--color-primary)]"
                >
                  Log Files
                </a>
                <a
                  href="#third-party"
                  className="block transition hover:text-[var(--color-primary)]"
                >
                  Third-Party Policies
                </a>
                <a
                  href="#rights"
                  className="block transition hover:text-[var(--color-primary)]"
                >
                  Your Rights
                </a>
                <a
                  href="#children"
                  className="block transition hover:text-[var(--color-primary)]"
                >
                  Children’s Information
                </a>
                <a
                  href="#contact"
                  className="block transition hover:text-[var(--color-primary)]"
                >
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

              <h2 className="font-display text-3xl">Policy Overview</h2>

              <p className="mt-4 font-body text-sm leading-relaxed text-white/60">
                At Clover Tech Nepal Pvt. Ltd, accessible from {WEBSITE_URL},
                protecting visitor privacy is one of our priorities. This policy
                describes the types of information we collect and how we use it.
                This Privacy Policy applies to our online website activities and
                does not apply to information collected offline or through
                channels outside this website.
              </p>
            </div>

            <div className="space-y-12">
              <PrivacySection
                id="consent"
                number="01"
                title="Consent"
                icon={<ShieldCheck size={18} />}
              >
                <p>
                  By using our website, you consent to this Privacy Policy and
                  agree to its terms.
                </p>
              </PrivacySection>

              <PrivacySection
                id="information"
                number="02"
                title="Information We Collect"
                icon={<UserRound size={18} />}
              >
                <p>
                  The personal information we ask you to provide, and the
                  reasons for collecting it, will be made clear at the point
                  where we ask for your information.
                </p>

                <ul>
                  <li>
                    If you contact us directly, we may receive your name, email
                    address, phone number, message contents, attachments, and any
                    other information you choose to provide.
                  </li>
                  <li>
                    If an account registration feature is available, we may ask
                    for details such as your name, company name, address, email
                    address, and telephone number.
                  </li>
                </ul>
              </PrivacySection>

              <PrivacySection
                id="usage"
                number="03"
                title="How We Use Your Information"
                icon={<Database size={18} />}
              >
                <p>We may use collected information for the following purposes:</p>

                <ul>
                  <li>To provide, operate, and improve our services.</li>
                  <li>To improve, personalize, and expand user experience.</li>
                  <li>
                    To understand and analyze how visitors use our website and
                    services.
                  </li>
                  <li>
                    To develop new products, services, features, and
                    functionality.
                  </li>
                  <li>To comply with applicable legal obligations.</li>
                  <li>
                    To communicate with users, respond to inquiries, and provide
                    support.
                  </li>
                  <li>To send emails related to inquiries or service updates.</li>
                  <li>To find, prevent, and address fraud or misuse.</li>
                </ul>
              </PrivacySection>

              <PrivacySection
                id="log-files"
                number="04"
                title="Log Files"
                icon={<Server size={18} />}
              >
                <p>
                  Clover Tech Nepal Pvt. Ltd follows a standard procedure of
                  using log files. These files log visitors when they visit
                  websites. This is a common practice used by hosting companies
                  and hosting analytics services.
                </p>

                <p>
                  Log file information may include IP addresses, browser type,
                  Internet Service Provider, date and time stamp, referring and
                  exit pages, and possibly the number of clicks. This information
                  is not linked to personally identifiable information. It is
                  used to analyze trends, manage the website, monitor user
                  movement, and gather demographic information.
                </p>
              </PrivacySection>

              <PrivacySection
                id="cookies"
                number="05"
                title="Cookies and Tracking Technologies"
                icon={<Cookie size={18} />}
              >
                <p>
                  Third-party services, advertising partners, or analytics tools
                  may use technologies such as cookies, JavaScript, or web
                  beacons. These technologies may be used to measure campaign
                  effectiveness, personalize content, or understand visitor
                  activity.
                </p>

                <p>
                  Clover Tech Nepal Pvt. Ltd does not have access to or control
                  over cookies used by third-party advertisers or external
                  services. You can disable cookies through your browser
                  settings.
                </p>
              </PrivacySection>

              <PrivacySection
                id="third-party"
                number="06"
                title="Third-Party Privacy Policies"
                icon={<Globe size={18} />}
              >
                <p>
                  Our Privacy Policy does not apply to third-party websites,
                  advertisers, tools, or services. We recommend reviewing the
                  privacy policies of those third parties for more detailed
                  information about their practices and how to opt out of certain
                  options.
                </p>
              </PrivacySection>

              <PrivacySection
                id="ccpa"
                number="07"
                title="CCPA Privacy Rights"
                icon={<Scale size={18} />}
              >
                <p>
                  Under the California Consumer Privacy Act, California consumers
                  may have the right to request that a business disclose the
                  categories and specific pieces of personal data collected,
                  request deletion of personal data, and request that personal
                  data not be sold.
                </p>

                <p>
                  If you make a request, we will respond within one month. To
                  exercise these rights, please contact us.
                </p>
              </PrivacySection>

              <PrivacySection
                id="gdpr"
                number="08"
                title="GDPR Data Protection Rights"
                icon={<Lock size={18} />}
              >
                <p>
                  We would like to make sure users are aware of their data
                  protection rights. Depending on your location and applicable
                  law, you may have the following rights:
                </p>

                <ul>
                  <li>
                    <strong>Right to access:</strong> request copies of your
                    personal data.
                  </li>
                  <li>
                    <strong>Right to rectification:</strong> request correction
                    of inaccurate or incomplete information.
                  </li>
                  <li>
                    <strong>Right to erasure:</strong> request deletion of your
                    personal data under certain conditions.
                  </li>
                  <li>
                    <strong>Right to restrict processing:</strong> request that
                    we limit processing of your personal data under certain
                    conditions.
                  </li>
                  <li>
                    <strong>Right to object:</strong> object to our processing
                    of your personal data under certain conditions.
                  </li>
                  <li>
                    <strong>Right to data portability:</strong> request transfer
                    of collected data to another organization or directly to you.
                  </li>
                </ul>

                <p>
                  If you make a request, we will respond within one month. To
                  exercise any of these rights, please contact us.
                </p>
              </PrivacySection>

              <PrivacySection
                id="rights"
                number="09"
                title="Your Rights and Choices"
                icon={<Eye size={18} />}
              >
                <p>
                  You may request access, correction, modification, or deletion
                  of your personal information. For assistance with privacy
                  requests, please contact us using the contact information
                  provided on this page.
                </p>
              </PrivacySection>

              <PrivacySection
                id="children"
                number="10"
                title="Children’s Information"
                icon={<Baby size={18} />}
              >
                <p>
                  Protecting children while they use the internet is important to
                  us. We encourage parents and guardians to observe, participate
                  in, monitor, and guide children’s online activity.
                </p>

                <p>
                  Clover Tech Nepal Pvt. Ltd does not knowingly collect
                  personally identifiable information from children under the age
                  of 13. If you believe that a child has provided this type of
                  information through our website, please contact us immediately,
                  and we will make reasonable efforts to remove such information
                  from our records.
                </p>
              </PrivacySection>

              <PrivacySection
                id="changes"
                number="11"
                title="Changes to This Privacy Policy"
                icon={<RefreshCcw size={18} />}
              >
                <p>
                  We may update this Privacy Policy from time to time. We
                  recommend checking this page regularly for updates. Any changes
                  will be posted on this page and will take effect as soon as
                  they are published.
                </p>
              </PrivacySection>
            </div>

            <div
              id="contact"
              className="mt-16 rounded-[32px] bg-[var(--color-deep-forest)] p-8 text-white md:p-10"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                Contact Information
              </p>

              <h4 className="mt-4 font-display text-3xl">
                Privacy questions?
              </h4>

              <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-white/55">
                If you have questions, concerns, or suggestions regarding this
                Privacy Policy, please contact Clover Tech Nepal using the
                details below.
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

function PrivacySection({
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

      <div className="privacy-content ml-[18px] space-y-4 border-l border-black/5 pl-8 font-body text-sm leading-relaxed text-black/55">
        {children}
      </div>
    </section>
  );
}