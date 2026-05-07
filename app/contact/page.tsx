"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import OfficeMap from "@/components/main/sections/map";

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "clovertechnp@gmail.com",
    href: "mailto:clovertechnp@gmail.com",
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

type Status = "idle" | "loading" | "success" | "error";

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

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "Custom Software Development",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);

    // Re-validate touched fields live
    if (touched[name as keyof FormData]) {
      setErrors(validate(updated));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");

    // Simulate API call
    await new Promise((res) => setTimeout(res, 2000));

    // 90% success, 10% error for realism
    if (Math.random() > 0.1) {
      setStatus("success");
      setForm({ name: "", email: "", subject: "Custom Software Development", message: "" });
      setTouched({});
    } else {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full p-4 bg-gray-50 border rounded-2xl outline-none transition-all font-body text-sm";

  function fieldClass(field: keyof FormErrors) {
    if (!touched[field]) return `${inputBase} border-transparent focus:border-[var(--color-primary)] focus:bg-white`;
    if (errors[field]) return `${inputBase} border-red-400 bg-red-50 focus:border-red-500`;
    return `${inputBase} border-green-400 bg-green-50/30 focus:border-green-500`;
  }

  return (
    <main className="min-h-screen">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[var(--color-primary)] font-bold tracking-[0.4em] uppercase text-xs"
          >
            Connect with us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-8xl text-[var(--color-deep-forest)] mt-6 leading-[0.9] tracking-tighter"
          >
            Let&apos;s build something <br />
            <span className="italic gradient-text">meaningful.</span>
          </motion.h1>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 bg-white rounded-[40px] shadow-sm border border-black/5">
              <h3 className="font-display text-2xl mb-8 flex items-center gap-3">
                <MessageSquare className="text-[var(--color-primary)]" />
                Send a Message
              </h3>

              {/* Success State */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12 gap-4"
                >
                  <CheckCircle2 size={56} className="text-green-500" strokeWidth={1.5} />
                  <h4 className="font-display text-2xl text-[var(--color-deep-forest)]">Message Sent!</h4>
                  <p className="font-body text-sm text-black/50 max-w-xs">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-8 py-3 border border-[var(--color-deep-forest)] text-[var(--color-deep-forest)] rounded-2xl text-sm font-bold hover:bg-[var(--color-deep-forest)] hover:text-white transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}

              {/* Error State */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-sm"
                >
                  <AlertCircle size={18} />
                  Something went wrong. Please try again.
                  <button onClick={() => setStatus("idle")} className="ml-auto underline text-xs">Dismiss</button>
                </motion.div>
              )}

              {/* Form */}
              {status !== "success" && (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-2">
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
                        <p className="text-xs text-red-500 ml-2 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-2">
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
                        <p className="text-xs text-red-500 ml-2 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`${inputBase} border-transparent focus:border-[var(--color-primary)] focus:bg-white appearance-none`}
                    >
                      <option>Custom Software Development</option>
                      <option>Web & Mobile Apps</option>
                      <option>UI/UX Design</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      placeholder="Tell us about your project..."
                      className={fieldClass("message")}
                    />
                    <div className="flex items-start justify-between ml-2">
                      {touched.message && errors.message ? (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className={`text-xs ${form.message.length < 20 ? "text-black/30" : "text-green-500"}`}>
                        {form.message.length} / 20 min
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full md:w-auto px-12 py-5 bg-[var(--color-deep-forest)] text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-[var(--color-primary)] hover:text-black transition-all group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Proposal
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {contactDetails.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group p-8 bg-white/50 backdrop-blur-md border border-black/5 rounded-[32px] flex items-start gap-6 hover:border-[var(--color-primary)] transition-all"
                >
                  <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">{item.label}</p>
                    <p className="font-display text-xl">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-8 bg-[var(--color-deep-forest)] rounded-[32px] text-white">
              <div className="flex items-center gap-3 mb-4 text-[var(--color-primary)]">
                <Clock size={20} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Availability</span>
              </div>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                Our team is active Monday through Friday, 9:00 AM — 6:00 PM (NPT).
                We typically respond to new inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="map" className="-mb-20">
        <OfficeMap />
      </div>
    </main>
  );
}