import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects"
import Bottom from "@/components/sections/Bottom";
import { Bot } from "lucide-react";

export default function Home() {

  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Bottom/>
    </div>
  );
}
