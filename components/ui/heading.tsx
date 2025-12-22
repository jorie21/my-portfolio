import React from "react";
import clsx from "clsx";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

/* H1 */
export function H1({ children, className }: HeadingProps) {
  return (
    <h1
      className={clsx(
        "font-sora font-extrabold text-4xl md:text-5xl lg:text-7xl text-soft-black",
        className
      )}
    >
      {children}
    </h1>
  );
}

/* H2 */
export function H2({ children, className }: HeadingProps) {
  return (
    <h2
      className={clsx(
        "font-sora font-bold text-3xl md:text-4xl text-soft-black",
        className
      )}
    >
      {children}
    </h2>
  );
}

/* H3 */
export function H3({ children, className }: HeadingProps) {
  return (
    <h3
      className={clsx(
        "font-sora font-bold text-2xl text-soft-black",
        className
      )}
    >
      {children}
    </h3>
  );
}

/* H4 */
export function H4({ children, className }: HeadingProps) {
  return (
    <h4
      className={clsx(
        "font-sora font-semibold text-xl text-soft-black",
        className
      )}
    >
      {children}
    </h4>
  );
}

/* H5 */
export function H5({ children, className }: HeadingProps) {
  return (
    <h5
      className={clsx(
        "font-sora font-medium text-lg text-soft-black",
        className
      )}
    >
      {children}
    </h5>
  );
}
