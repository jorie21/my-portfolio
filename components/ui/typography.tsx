import React from "react";
import clsx from "clsx";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

/* Paragraph – Default body text */
export function P({ children, className }: TextProps) {
  return (
    <p
      className={clsx(
        "font-sora text-base leading-relaxed ",
        className
      )}
    >
      {children}
    </p>
  );
}

/* Small paragraph / caption */
export function PSmall({ children, className }: TextProps) {
  return (
    <p
      className={clsx(
        "font-sora text-sm leading-relaxed text-soft-black/80",
        className
      )}
    >
      {children}
    </p>
  );
}

/* Muted / description text */
export function PMuted({ children, className }: TextProps) {
  return (
    <p
      className={clsx(
        "font-sora text-base leading-relaxed text-gray-500",
        className
      )}
    >
      {children}
    </p>
  );
}

/* Large paragraph (hero / intro text) */
export function PLarge({ children, className }: TextProps) {
  return (
    <p
      className={clsx(
        "font-sora text-lg leading-relaxed text-soft-black",
        className
      )}
    >
      {children}
    </p>
  );
}
