"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";
type Variant = "light" | "dark";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  variant = "light",
  thickness = 4, // slightly thicker so spin is visible
  ...props
}: React.PropsWithChildren<{
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  variant?: Variant;
  thickness?: number;
}> &
  React.HTMLAttributes<HTMLElement>) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const spinColor = variant === "dark" ? "white" : "black";

  const rotateDirection = (current: Direction): Direction => {
    const dirs: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const i = dirs.indexOf(current);
    return clockwise
      ? dirs[(i - 1 + dirs.length) % dirs.length]
      : dirs[(i + 1) % dirs.length];
  };

  const movingMap: Record<Direction, string> = {
    TOP: `radial-gradient(25% 60% at 50% 0%, ${spinColor} 0%, transparent 100%)`,
    LEFT: `radial-gradient(25% 60% at 0% 50%, ${spinColor} 0%, transparent 100%)`,
    BOTTOM: `radial-gradient(25% 60% at 50% 100%, ${spinColor} 0%, transparent 100%)`,
    RIGHT: `radial-gradient(25% 60% at 100% 50%, ${spinColor} 0%, transparent 100%)`,
  };

  const highlight = `radial-gradient(80% 200% at 50% 50%, ${spinColor} 0%, transparent 100%)`;

  useEffect(() => {
    if (!hovered) {
      const id = setInterval(
        () => setDirection((d) => rotateDirection(d)),
        duration * 1000
      );
      return () => clearInterval(id);
    }
  }, [hovered, duration]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full overflow-hidden",
        containerClassName
      )}
      style={{ padding: thickness }}
      {...props}
    >
      {/* BUTTON CONTENT */}
      <div
        className={cn(
          "relative z-10 rounded-full px-6 py-3 text-sm font-medium",
          variant === "dark"
            ? "bg-black text-white"
            : "bg-white text-black",
          className
        )}
      >
        {children}
      </div>

      {/* SPINNING RING */}
      <motion.div
        className="absolute inset-0 rounded-full z-0"
        style={{ filter: "blur(2.5px)" }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ duration, ease: "linear" }}
      />

      {/* MASK — SMALLER THAN PADDING */}
      <div
        className={cn(
          "absolute rounded-full z-[1]",
          variant === "dark" ? "bg-black" : "bg-white"
        )}
        style={{ inset: thickness - 2 }}
      />
    </Tag>
  );
}
