import { H2 } from "../ui/heading";
import { P } from "../ui/typography";
import TiltedCard from "../TiltedCard";
import { techStack } from "@/constant/tech-stack";

export default function Skills() {
  return (
    <section className="screen min-h-screen flex flex-col items-center px-4 md:px-16">
      {/* HEADER */}
      <div className="space-y-2 text-center mb-12">
        <H2>Tech Stack</H2>
        <P>Tools and technologies I use to build modern web applications.</P>
      </div>

      {/* TECH GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {techStack.map((tech) => (
            <TiltedCard
              key={tech.name}
              imageSrc={tech.icon}
              altText={tech.name}
              containerHeight="200px"
              containerWidth="200px"
              imageHeight="100px"
              imageWidth="100px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="mt-3 text-sm text-neutral-300">{tech.name}</p>
              }
            />

        ))}
      </div>
    </section>
  );
}
