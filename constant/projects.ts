import SpaceSync from "@/public/projects/spacesyncpicsur.jpg";
import ChatSys from '@/public/projects/chatsystem.jpg'
import Capstone from '@/public/projects/capstonepicsur.jpg'
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  links?: {
    demo?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    title: "SpaceSync",
    description:
      "A class scheduling system for Colegio de Montalban. The system ensures efficient scheduling and real-time availability across platforms.",
    tags: [
      "VB.NET",
      "MySQL",
      "Guna UI 2",
      "PHP",
      "MVC",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: SpaceSync,
    links: {
      github: "https://github.com/jorie21/SpaceSync",
    },
  },

{
  title: "CDM: Chat Support System",
  description:
    "A chat-based support system for Colegio de Montalban with dedicated admin and student portals. Students can file support tickets and communicate their concerns in real time, while administrators manage, respond, and track issues efficiently through a centralized system.",
  tags: [
    "PHP",
    "MVC",
    "MySQL",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  image: ChatSys,
  links: {
    github: "https://github.com/jorie21/Dynamic-WebApp.git",
  },
},

{
  title: "Alpha Fitness Center",
  description:
    "A chat-based support system for Colegio de Montalban with dedicated admin and student portals. Students can file support tickets and communicate their concerns in real time, while administrators manage, respond, and track issues efficiently through a centralized system.",
  tags: [
    "Next JS",
    "Supabase",
    "Figma",
    "Tailwind",
  ],
  image: Capstone,
  links: {
    demo: "https://alphafitnesscenter.vercel.app/",
    github: "https://github.com/jorie21/Dynamic-WebApp.git",
  },
},

];
