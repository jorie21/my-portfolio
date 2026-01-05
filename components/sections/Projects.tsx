import React from "react";
import { H2 } from "../ui/heading";
import { ProjectCard } from "@/src/components/uitripled/project-card-shadcnui";
import { projects } from "@/constant/projects";
import { Button } from "../ui/button";

export default function Projects() {
  return (
    <section className="screen min-h-screen flex flex-col gap-8 items-center p-20 px-4 md:px-16">
      <H2>Featured Projects</H2>

      <div className="flex gap-8 mt-10">
       {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div>
        <Button>View All Projects</Button>
      </div>
    </section>
  );
}
