"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { H2 } from "../ui/heading";
import { P } from "../ui/typography";
import { techStack } from "@/constant/tech-stack";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="screen min-h-screen flex flex-col items-center justify-center px-4 md:px-16 py-16">
      {/* HEADER */}
      <div className="space-y-2 text-center mb-16">
        <H2>Tech Stack</H2>
        <P>Tools and technologies I use to build modern web applications.</P>
      </div>

      {/* TECH GRID */}
      <div
        className="
          grid
          w-full
          max-w-6xl
          gap-6 md:gap-8
          grid-cols-2 md:grid-cols-4
        "
      >
        {techStack.map((tech) => (
          <MagneticCard key={tech.name}>
            {/* ICON */}
            <Image
              src={tech.icon}
              alt={tech.name}
              width={70}
              height={70}
            />

            {/* LABEL */}
            <p className="mt-4 text-sm font-medium font-sora tracking-wide text-neutral-700">
              {tech.name}
            </p>
          </MagneticCard>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic Card Component */
/* ------------------------------------------------------------------ */

function MagneticCard({ children }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 180, damping: 20 });
  const springY = useSpring(y, { stiffness: 180, damping: 20 });

  function handleMouseMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
        aspect-square
        w-full
        flex flex-col items-center justify-center
        rounded-2xl
        bg-[#f1f1f1]
        border border-black/10
        cursor-default
        hover:border-black/40
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
      "
    >
      {children}
    </motion.div>
  );
}
