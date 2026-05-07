
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, Download } from "lucide-react";
import { LEADERS } from "@/lib/data/leadership";

const DOWNLOAD_SIZES = [
  { label: "Original" },
  { label: "4K (2160px)" },
  { label: "HD (1080px)" },
  { label: "Web (800px)" },
];

export default function LeaderProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const leader = LEADERS.find((l) => l.id === id);
  if (!leader) notFound();

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".fade-in", {
      opacity: 0,
      y: 24,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-white min-h-screen pt-4">
      <nav className="px-6 sm:px-0 pt-24 pb-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/executives"
            className="inline-flex items-center gap-2 text-xs"
          >
            <span className="p-1 rounded-full border border-gray-300">
              <ArrowLeft size={12} />
            </span>
            Back to Executives
          </Link>
        </div>
      </nav>
      <main className="bg-[#f1f3f5] w-full py-16 px-6 min-h-[400px] flex items-center justify-center">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-medium text-[#1a1a1a] tracking-tight mb-4">
              {leader.name}
            </h1>
            <p className="text-sm md:text-base uppercase tracking-wider text-gray-600 font-semibold">
              {leader.role}
            </p>
          </div>

          {/* Right Side: Image Container */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          
        </div>
      </main>
      <section>
        <div className="max-w-3xl mx-auto py-16 px-6 flex flex-col gap-8">
          {leader.full_bio && leader.full_bio.map((para, i) => (
            <p key={i} className="text-base text-gray-700 leading-relaxed">
              {para}
            </p>
          ))}
          {leader.socials && leader.socials.length > 0 && (
            <div className="flex flex-col gap-2">
              {leader.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                  {social.platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}