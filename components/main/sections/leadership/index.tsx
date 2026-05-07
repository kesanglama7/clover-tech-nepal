'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function LeaderShip() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:py-42">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            Meet our leadership
          </h2>

          <p className="text-base leading-7 text-gray-600">
            Clover Tech Nepal&apos;s leaders are guiding our company as technology evolves, helping to create the next evolution of digital solutions.
          </p>

          <div className="mt-2">
            <Link
              href="/executives"
              className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/75"
            >
              Get to know our leadership
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[1.5rem] bg-gray-100 aspect-square"
        >
          <Image
            src="/assets/team/sudeep.jpg"
            alt="Sudeep Bajracharya - CEO of Clover Tech Nepal"
            fill
            className="object-cover object-top"
          />
        </motion.div>

      </div>
    </section>
  );
}