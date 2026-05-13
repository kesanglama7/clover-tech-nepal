"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import OfficeMap from "@/components/main/sections/map";

const COMPANY_EMAIL = "clovertechnp@gmail.com";

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: COMPANY_EMAIL,
    href: `mailto:${COMPANY_EMAIL}`,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+977 9702006554",
    href: "tel:+9779702006554",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Chabahil, Kathmandu, Nepal",
    href: "#map",
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Full name is required.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  return errors;
}

function buildMailtoUrl(data: FormData) {
  const subject = encodeURIComponent(`[Website Inquiry] ${data.subject}`);

  const body = encodeURIComponent(
    `Hello Clover Tech Nepal,

I would like to contact you regarding: ${data.subject}

Name: ${data.name}
Email: ${data.email}
Location: Nepal

Message:
${data.message}

Regards,
${data.name}`
  );

  return `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "Custom Software Development",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});

  const mailtoUrl = useMemo(() => buildMailtoUrl(form), [form]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    const updated = {
      ...form,
      [name]: value,
    };

    setForm(updated);

    if (touched[name as keyof FormData]) {
      setErrors(validate(updated));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors(validate(form));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      message: true,
    });

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    window.location.href = buildMailtoUrl(form);
  }

  const inputBase =
    "w-full rounded-2xl border p-4 font-body text-sm outline-none transition-all";

  function fieldClass(field: keyof FormErrors) {
    if (!touched[field]) {
      return `${inputBase} border-transparent bg-gray-50 focus:border-[var(--color-primary)] focus:bg-white`;
    }

    if (errors[field]) {
      return `${inputBase} border-red-400 bg-red-50 focus:border-red-500`;
    }

    return `${inputBase} border-green-400 bg-green-50/30 focus:border-green-500`;
  }

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <section className="px-6 pt-36 pb-20">
        <div className="mx-auto max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-primary)]"
          >
            Connect with us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display text-5xl leading-[0.95] tracking-tighter text-[var(--color-deep-forest)] md:text-7xl"
          >
            Let&apos;s build something <br />
            <span className="italic gradient-text">meaningful.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-7 max-w-2xl font-body text-lg leading-relaxed text-black/50"
          >
            Tell us about your project, product idea, or business requirement.
            After submitting, your email app will open with the message ready to
            send.
          </motion.p>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[40px] border border-black/5 bg-white p-6 shadow-[0_25px_80px_rgba(0,0,0,0.05)] md:p-10"
            >
              <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                  <h3 className="flex items-center gap-3 font-display text-2xl text-[var(--color-deep-forest)]">
                    <MessageSquare className="text-[var(--color-primary)]" />
                    Send a Message
                  </h3>

                  <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-black/45">
                    No backend email API is required. Your default mail app will
                    open with all details pre-filled.
                  </p>
                </div>

                <div className="hidden rounded-full bg-[var(--color-primary)]/10 p-3 text-[var(--color-primary)] md:flex">
                  <Mail size={22} />
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-2 text-[10px] font-bold uppercase tracking-widest text-black/40">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      className={fieldClass("name")}
                    />

                    {touched.name && errors.name && (
                      <p className="ml-2 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle size={11} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="ml-2 text-[10px] font-bold uppercase tracking-widest text-black/40">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      className={fieldClass("email")}
                    />

                    {touched.email && errors.email && (
                      <p className="ml-2 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle size={11} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-2 text-[10px] font-bold uppercase tracking-widest text-black/40">
                    Subject
                  </label>

                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`${inputBase} appearance-none border-transparent bg-gray-50 focus:border-[var(--color-primary)] focus:bg-white`}
                  >
                    <option>Custom Software Development</option>
                    <option>Web & Mobile Apps</option>
                    <option>UI/UX Design</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="ml-2 text-[10px] font-bold uppercase tracking-widest text-black/40">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={6}
                    placeholder="Tell us about your project..."
                    className={`${fieldClass("message")} resize-none`}
                  />

                  <div className="ml-2 flex items-start justify-between gap-4">
                    {touched.message && errors.message ? (
                      <p className="flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle size={11} />
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}

                    <span
                      className={`text-xs ${
                        form.message.length < 20
                          ? "text-black/30"
                          : "text-green-500"
                      }`}
                    >
                      {form.message.length} / 20 min
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[var(--color-primary)] px-10 py-5 font-bold text-white transition-all hover:bg-[var(--color-deep-forest)] sm:w-auto cursor-pointer"
                  >
                    Open Email App
                    <Send
                      size={18}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          <div className="space-y-6 lg:col-span-5">
            {contactDetails.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="group flex items-start gap-6 rounded-[32px] border border-black/5 bg-white/60 p-7 backdrop-blur-md transition-all hover:border-[var(--color-primary)] hover:bg-white"
              >
                <div className="rounded-2xl bg-white p-4 shadow-sm transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-black/40">
                    {item.label}
                  </p>
                  <p className="font-display text-xl text-[var(--color-deep-forest)]">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] bg-[var(--color-primary)] p-8 text-white"
            >
              <div className="mb-4 flex items-center gap-3">
                <Clock size={20} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Availability
                </span>
              </div>

              <p className="font-body text-sm leading-relaxed text-white/90">
                Our team is active Monday through Friday, 9:00 AM — 6:00 PM
                NPT. You can reach us directly by email, phone, or through the
                form on this page.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="map" className="-mb-20">
        <OfficeMap />
      </div>
    </main>
  );
}