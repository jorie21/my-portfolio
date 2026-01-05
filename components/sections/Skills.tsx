import { H2 } from "../ui/heading";
import { P } from "../ui/typography";
import TiltedCard from "../TiltedCard";
import { techStack } from "@/constant/tech-stack";

export default function Skills() {
  return (
    <section className="screen min-h-screen flex flex-col items-center justify-center px-4 md:px-16 py-16">
      {/* HEADER */}
      <div className="space-y-2 text-center mb-16">
        <H2>Tech Stack</H2>
        <P>Tools and technologies I use to build modern web applications.</P>
      </div>

      {/* TECH GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center justify-center rounded-2xl
              bg-[#f1f1f1] backdrop-blur
              border border-neutral-200
              h-[180px] w-[180px]
              transition-all duration-300
              hover:border-black/50 hover:-translate-y-2
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
          >
            <TiltedCard
              imageSrc={tech.icon}
              altText={tech.name}
              containerHeight="100px"
              containerWidth="100px"
              imageHeight="50px"
              imageWidth="50px"
              rotateAmplitude={8}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />

            <p className="mt-4 text-sm font-medium font-sora tracking-wide text-neutral-700">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}