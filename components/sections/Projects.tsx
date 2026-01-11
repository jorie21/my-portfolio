"use client";

import React from "react";
import { H2 } from "../ui/heading";
import { ProjectCard } from "@/src/components/uitripled/project-card-shadcnui";
import { projects } from "@/constant/projects";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="screen min-h-screen flex flex-col gap-8 items-center p-20 px-4 md:px-16">
      <H2>Featured Projects</H2>

      {/* Mobile/Tablet slider */}
      <div className="w-full overflow-x-hidden md:overflow-x-visible">
        <motion.div
          className="flex gap-8 mt-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: projects.length * 3, // adjust speed here
            ease: "linear",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-auto"
            >
              <ProjectCard {...project} />
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {projects.map((project, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-72 md:w-auto"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </motion.div>
      </div>

      <div>
        <Button>View All Projects</Button>
      </div>
    </section>
  );
}
