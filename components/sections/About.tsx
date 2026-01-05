"use client";

import Image from "next/image";
import { User, Heart, Star, GraduationCap, MapPin, Mail } from "lucide-react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { H2, H4 } from "../ui/heading";
import { P } from "../ui/typography";
import { Button } from "../ui/button";
import profileKo from "@/public/logo/profileko.jpg";
import PixelTransition from "../PixelTransition";
import JorDev from "@/public/logo/JorDevLogo.png";

export default function About() {
  return (
    <section className="screen min-h-screen p-20 flex flex-col items-center gap-16">
      <H2>About Me</H2>
      <div className="flex w-full p-4 gap-8">
        {/*left */}
        <div className="w-full space-y-4 ">
          <PixelTransition
            firstContent={
              <Image
                src={profileKo}
                alt="profile ko"
                fill
                sizes="200px"
                className="object-cover rounded-2xl"
              />
            }
            secondContent={
              <div className="w-full h-full grid place-items-center bg-white">
                <Image src={JorDev} alt="JorDev logo" className="w-24 h-auto" />
              </div>
            }
            gridSize={15}
            pixelColor="#f1f1f1"
            once={false}
            animationStepDuration={0.6}
            className="custom-pixel-card place-self-center"
          />

          {/* Info Cards */}
          <div className="space-y-3">
            <InfoCard
              icon={<GraduationCap className="w-5 h-5" />}
              label="Education"
              value="Colegio De Montalban"
            />
            <InfoCard
              icon={<MapPin className="w-5 h-5 " />}
              label="Location"
              value="Montalban, Rizal"
            />
            <InfoCard
              icon={<Mail className="w-5 h-5 " />}
              label="Email"
              value="visayajorie@email.com"
            />
          </div>
        </div>

        {/* right*/}
        <div className="w-full space-y-8 ">
          <Tabs defaultValue="story" className="w-full">
            {/* TAB BUTTONS */}
            <TabsList className="flex gap-2 bg-transparent justify-center md:justify-start">
              <TabsTrigger value="story" className="flex gap-2 p-4 ">
                <User className="w-4 h-4" />
                My Story
              </TabsTrigger>

              <TabsTrigger value="interests" className="flex gap-2 p-4 data-[state=active]:bg-black/80
               data-[state=active]:text-white">
                <Heart className="w-4 h-4" />
                Interests
              </TabsTrigger>

              <TabsTrigger value="facts" className="flex gap-2 p-4">
                <Star className="w-4 h-4" />
                Fun Facts
              </TabsTrigger>
            </TabsList>
            <div className="outline outline-black/50 w-full mt-2"></div>
            {/* TAB CONTENT */}
            <TabsContent value="story" className="mt-5">
              <P>
                I&apos;m Jorie Visaya, a 21-year-old 4th-year college student
                who is deeply passionate about web development, particularly
                building modern and scalable applications using Next.js.
                <br />
                <br />
                I enjoy solving real-world business problems through clean,
                efficient code and love experimenting with creative ideas and
                unique user experiences as a vibe coder.
                <br />
                <br />
                Beyond development, I strongly value continuous learning and
                personal growth, always striving to improve my technical skills
                and design thinking.
                <br />
                <br />
                When I&apos;m not coding, you&apos;ll usually find me at the gym
                doing powerlifting to stay disciplined and focused, or on the
                court playing badminton to keep myself active and energized.
              </P>
            </TabsContent>

            <TabsContent value="interests">
              <ListItem emoji="💻" title="Web Development">
                Building modern web apps with Next.js, React, and TypeScript
              </ListItem>
              <ListItem emoji="🏋️" title="Powerlifting">
                Staying strong and disciplined through training
              </ListItem>
              <ListItem emoji="🏸" title="Badminton">
                Playing competitively and staying active
              </ListItem>
              <ListItem emoji="🚀" title="Hackathons">
                Building innovative projects under pressure
              </ListItem>
            </TabsContent>

            <TabsContent value="facts">
              <ListItem emoji="🎯" title="Goal-Oriented">
                Working toward becoming a software engineer
              </ListItem>
              <ListItem emoji="🌱" title="Continuous Learner">
                Always improving my skillset
              </ListItem>
              <ListItem emoji="🎨" title="Vibe Coder">
                Loves creative coding solutions
              </ListItem>
              <ListItem emoji="🎓" title="4th Year Student">
                Final year of Computer Science
              </ListItem>
            </TabsContent>
          </Tabs>

          <Button className="bg-black/80">Contact me</Button>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value }: any) {
  return (
    <div
      className="
        group
        flex items-center gap-4
        rounded-xl
        bg-[#f1f1f1]
        border border-black/10
        px-4 py-3
        font-sora
        transition-all duration-300
        hover:border-black/50
      "
    >
      {/* Icon */}
      <div
        className="
          grid place-items-center
          rounded-lg
          bg-black/5
          p-2
          text-black/80
          transition-transform duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      {/* Text */}
      <div className="leading-tight text-black/80">
        <P className="text-xs font-sora text-black/60">{label}</P>
        <P className="text-sm font-medium font-sora text-black/80">{value}</P>
      </div>
    </div>
  );
}

function ListItem({ emoji, title, children }: any) {
  return (
    <div className="flex items-start gap-3 mb-3 text-left">
      <span className="text-2xl">{emoji}</span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm opacity-80">{children}</p>
      </div>
    </div>
  );
}
