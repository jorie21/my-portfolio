"use client";

import React from "react";
import { H2 } from "../ui/heading";
import { ProjectCard } from "@/src/components/uitripled/project-card-shadcnui";
import { projects } from "@/constant/projects";
import { Button } from "../ui/button";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects() {
  return (
    <section className="screen min-h-screen flex flex-col gap-8 items-center p-20 px-4 md:px-16">
      <H2>Featured Projects</H2>

      {/* Mobile / Tablet Swiper */}
      <div className="w-full mt-10 md:hidden">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex justify-center">
                <ProjectCard {...project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-wrap gap-8 mt-10 justify-center w-full">
        {projects.map((project, index) => (
          <div key={index} className="w-72">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <div>
        <Button>View All Projects</Button>
      </div>
    </section>
  );
}
