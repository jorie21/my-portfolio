"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";

const MotionImage = motion(Image);

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  links?: {
    demo?: string;
    github?: string;
  };
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  links,
  className,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("w-full max-w-[400px]", className)}
    >
      <Card className="group relative h-full border-black/50 overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/60">
        {/* IMAGE */}
        <div className="relative aspect-video overflow-hidden">
          <MotionImage
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* ACTION BUTTONS */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            {links?.demo && (
              <motion.a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 backdrop-blur-md"
                title="View Demo"
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}

            {links?.github && (
              <motion.a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg backdrop-blur-md"
                title="View Code"
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5">
          <h3 className="mb-2 text-xl font-semibold font-sora tracking-tight text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>

          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="
                    bg-secondary/40
                    border border-black/40
                    text-foreground
                    rounded-sm
                    px-2
                    py-0.5
                    text-xs
                    font-normal
                    transition-colors
                    hover:bg-primary
                    hover:text-primary-foreground
                  "
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
