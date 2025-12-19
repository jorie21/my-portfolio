export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const

export type NavLink = typeof NAV_LINKS[number]
