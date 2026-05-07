"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Download, UserCircle2 } from "lucide-react";
import { LEADERS } from "@/lib/data/leadership";
import Link from "next/link";

const CATEGORIES = ["All", "Executive", "Engineering", "Management"];

export default function LeadershipGallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredLeaders = activeTab === "All" 
    ? LEADERS 
    : LEADERS.filter(l => l.category === activeTab);

  return (
    <main className="bg-white min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="border-b border-black/5 pb-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="font-display text-5xl text-black tracking-tight mb-4">
                Executives Gallery
              </h1>
              <p className="font-body text-black/50 text-lg">
                The leadership team driving Clover Tech Nepal forward.
              </p>
            </div>
            
            <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
              {CATEGORIES.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTab === tab 
                      ? "bg-white text-black shadow-sm" 
                      : "text-black/40 hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredLeaders.map((leader) => (
              <motion.div
                layout
                key={leader.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                
              >
                <Link href={`/executives/${leader.id}`} className="group relative flex flex-col">
                <div className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden mb-6">
                  <Image 
                    src={leader.image} 
                    alt={leader.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-2">
                  <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1 block">
                    {leader.category}
                  </span>
                  <h3 className="font-display text-2xl text-black mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="font-body text-sm text-black/40">
                    {leader.role}
                  </p>
                </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}